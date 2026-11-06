import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { projects, site } from '../content/portfolio.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const docs=resolve(root,'docs');
const base=new URL(site.url).pathname;
// Windows 체크아웃의 CRLF를 Git 저장 형식인 LF로 정규화해 원본 내용을 비교합니다.
const readme=Buffer.from((await readFile(resolve(root,'README.md'),'utf8')).replace(/\r\n/g,'\n'));
const originalBlob='48d8ac3e553201974eaa684523225df5ddbe3749';
assert.equal(createHash('sha1').update(`blob ${readme.length}\0`).update(readme).digest('hex'),originalBlob,'원본 README가 변경되었습니다.');
assert.equal(base,'/myoungjoon31/','배포 기본 경로는 소문자 /myoungjoon31/이어야 합니다.');
assert.equal(new Set(projects.map(p=>p.slug)).size,projects.length,'프로젝트 slug 중복');
for(const p of projects){
  assert.match(p.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  for(const field of ['id','title','description','role','status','thumbnail'])assert.ok(p[field],`${p.slug}: ${field} 누락`);
  for(const field of ['githubUrl','gameplayVideoUrl','downloadUrl'])if(p[field])assert.equal(new URL(p[field]).protocol,'https:');
  for(const s of p.screenshots)assert.ok(s.alt,'스크린샷 대체 텍스트 필요');
}
async function files(dir){const all=await readdir(dir,{withFileTypes:true});return (await Promise.all(all.map(x=>x.isDirectory()?files(resolve(dir,x.name)):resolve(dir,x.name)))).flat();}
const htmlFiles=(await files(docs)).filter(x=>extname(x)==='.html');
let linkCount=0,imageCount=0;
for(const filename of htmlFiles){
  const html=await readFile(filename,'utf8');
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`${filename}: h1은 하나여야 합니다.`);
  assert.match(html,/<html lang="ko">/);
  assert.match(html,/<meta name="description" content="[^"]+">/);
  assert.ok(!/MyoungJoonKim|myoungjoonkim\.github\.io|\/myoungjoon\//i.test(html),'이전 계정·배포 경로가 남아 있습니다.');
  assert.ok(!/href="(?:#|)"/.test(html),'빈 링크 사용 금지');
  assert.ok(!html.includes('이력서'),'이력서 항목 제외 요청');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
  assert.equal(ids.length,new Set(ids).size,`${filename}: id 중복`);
  for(const img of html.matchAll(/<img\b[^>]*>/g)){
    assert.match(img[0],/\balt="[^"]*"/,'이미지 대체 텍스트 누락');
    assert.match(img[0],/\bwidth="\d+"/,'이미지 너비 누락');
    assert.match(img[0],/\bheight="\d+"/,'이미지 높이 누락');
    imageCount++;
  }
  for(const a of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))assert.match(a[0],/rel="noopener noreferrer"/);
  for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    let raw=match[1].replaceAll('&amp;','&');
    if(/^(https:|mailto:)/.test(raw))continue;
    assert.ok(!/^(javascript:|data:|http:|\/\/)/i.test(raw),'허용되지 않는 URL');
    const [pathpart,hash]=raw.split('#');
    let target=pathpart.startsWith('/')?resolve(docs,pathpart.slice(base.length)):resolve(dirname(filename),pathpart||filename);
    if(pathpart.startsWith('/'))assert.ok(pathpart.startsWith(base),'프로젝트 기본 경로 밖의 링크');
    const info=await stat(target).catch(()=>null);
    assert.ok(info,`${filename}: 존재하지 않는 경로 ${raw}`);
    if(info.isDirectory())target=resolve(target,'index.html');
    await stat(target);
    if(hash){const dest=await readFile(target,'utf8');assert.ok(dest.includes(`id="${hash}"`),`${filename}: 앵커 없음 ${raw}`);}
    linkCount++;
  }
}
const css=await readFile(resolve(docs,'assets/site.css'),'utf8');
assert.match(css,/prefers-reduced-motion/);
assert.match(css,/:focus-visible/);
console.log(`검증 통과: HTML ${htmlFiles.length}개, 내부 경로·앵커 ${linkCount}개, 이미지 ${imageCount}개`);
console.log('원본 README Git blob 해시 일치 / 소문자 배포 경로 / 프로젝트 데이터 검사 통과');
