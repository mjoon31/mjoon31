// 실행 중인 로컬 미리보기의 경로와 HTTP 상태를 검사합니다.
import assert from 'node:assert/strict';
import { site } from '../content/portfolio.mjs';
const origin='http://127.0.0.1:4173';
const base=new URL(site.url).pathname;
const routes=[
  [base,200,'text/html'],
  [base+'projects/slime-raising/',200,'text/html'],
  [base+'projects/house-haulers/',200,'text/html'],
  [base+'assets/site.css',200,'text/css'],
  [base+'assets/site.js',200,'text/javascript'],
  [base+'assets/images/slime-placeholder.svg',200,'image/svg+xml'],
  [base+'assets/images/house-placeholder.svg',200,'image/svg+xml'],
  [base+'sitemap.xml',200,'application/xml'],
  [base+'missing-page/',404,'text/html'],
  ['/myoungjoon/',404,'text/html'],
  ['/Myoungjoon31/',404,'text/html']
];
for(const [path,status,type] of routes){
  const response=await fetch(origin+path);
  assert.equal(response.status,status,path);
  assert.ok(response.headers.get('content-type').startsWith(type),path);
}
for(const slug of ['slime-raising','house-haulers']){
  const response=await fetch(`${origin}${base}projects/${slug}`,{redirect:'manual'});
  assert.equal(response.status,301);
  assert.equal(response.headers.get('location'),`${base}projects/${slug}/`);
}
console.log(`HTTP 검증 통과: 페이지·에셋·404·대소문자 ${routes.length}개, 디렉터리 리디렉션 2개`);
