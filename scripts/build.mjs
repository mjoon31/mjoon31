import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { site, projects, skills, experience } from '../content/portfolio.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, 'docs');
const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines = value => e(value).replace(/(?<=[.!?])\s+/g, '<br>');
const arrow = '<span aria-hidden="true">↗</span>';
const ext = (url, label, cls = '') => `<a class="${cls}" href="${e(url)}" target="_blank" rel="noopener noreferrer">${label} ${arrow}<span class="sr-only"> (새 탭)</span></a>`;
const icons = {
  unity: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 0v10m9-5-9 5-9-5m9 5v10"/>',
  csharp: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><text x="5.1" y="15.5" fill="currentColor" stroke="none" font-size="10" font-family="Arial" font-weight="bold">C#</text>',
  visualstudio: '<path d="m16 3 6 2v14l-6 2-9-8-4 4-2-1V8l2-1 4 4 9-8Zm0 4-6 5 6 5V7ZM3 10v4l2-2-2-2Z"/>',
  github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-1.5-.7-2 3.4-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.5 5c.1-1-.1-2-.5-3-1.3 0-3 1-4 1.6a15 15 0 0 0-6 0C8 3 6.3 2 5 2c-.4 1-.6 2-.5 3A5.4 5.4 0 0 0 3 9c0 5.4 3.3 6.6 6.7 7-.4.5-.7 1-.7 2v4"/>',
  systems: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M17 4v5H4v8h5m1 0h4"/>',
  network: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10 8-4 7m8-7 4 7M8 18h8"/>',
  spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>'
};
const icon = (name, label = '', cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" ${label ? `role="img" aria-label="${e(label)}"` : 'aria-hidden="true"'}>${icons[name] || icons.systems}</svg>`;
const badges = values => `<ul class="tags" aria-label="기술과 프로젝트 정보">${values.map(t=>`<li>${e(t)}</li>`).join('')}</ul>`;
const tools = p => `<ul class="tool-icons" aria-label="개발 도구">${p.technologies.map(name => `<li title="${e(name)}">${icon(({Unity:'unity','C#':'csharp','Visual Studio':'visualstudio'})[name] || 'systems', name)}</li>`).join('')}</ul>`;
const sectionHeading = (no, eyebrow, title, description = '') => `<div class="section-heading reveal"><div><p class="eyebrow"><span>${no}</span> ${eyebrow}</p><h2>${title}</h2></div>${description ? `<p class="section-description">${description}</p>` : ''}</div>`;
const navItems = [['about','소개'],['projects','프로젝트'],['skills','기술 역량'],['experience','개발 경험']];

function header(prefix, detail) {
  return `<a class="skip-link" href="#main">본문으로 바로 가기</a><header class="site-header"><button class="menu-toggle" aria-label="메뉴 열기" aria-controls="primary-nav" aria-expanded="false" hidden><span></span><span></span><span></span></button><nav id="primary-nav" aria-label="주 메뉴">${navItems.map(([id,title])=>`<a href="${prefix}#${id}"${!detail && id==='about'?' aria-current="location"':''}>${title}</a>`).join('')}</nav></header>`;
}

function shell({title, description, route='', body, prefix='./', detail=false, image='assets/images/og.svg', notFound=false}) {
  const url = new URL(route, site.url).href;
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark light"><title>${e(title)}</title><meta name="description" content="${e(description)}"><meta name="theme-color" content="#222831">${notFound?'<meta name="robots" content="noindex">':`<link rel="canonical" href="${url}">`}<meta property="og:type" content="website"><meta property="og:locale" content="ko_KR"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${new URL(image, site.url).href}"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="${prefix}assets/images/favicon.svg"><link rel="stylesheet" href="${prefix}assets/site.css"><script src="${prefix}assets/site.js" defer></script></head><body id="top" class="${detail ? 'detail-page' : 'home-page'}">${header(prefix,detail)}${body}</body></html>\n`;
}

function artwork(p,prefix){return p.cardArtwork ? `<div class="slime-card-art"><img class="card-scene" src="${prefix}${p.screenshots[0].src}" alt="" width="720" height="1560" loading="lazy"><img class="card-app-icon" src="${prefix}${p.thumbnail}" alt="${e(p.thumbnailAlt)}" width="1254" height="1254" loading="lazy"><img class="card-screen" src="${prefix}${p.screenshots[1].src}" alt="슬라임키우기 전투 화면" width="720" height="1560" loading="lazy"></div>` : `<img src="${prefix}${p.thumbnail}" alt="${e(p.thumbnailAlt)}" width="1000" height="625" loading="lazy" decoding="async">`;}

function card(p, prefix='./') {
  return `<article class="project-card reveal" aria-labelledby="project-${p.slug}"><a class="project-cover" href="${prefix}projects/${p.slug}/" tabindex="-1" aria-hidden="true">${artwork(p,prefix)}${p.placeholder?'<span class="cover-label">임시 커버 · 실제 게임 화면 준비 중</span>':''}</a><div class="project-card-body"><div class="project-overline"><span>${e(p.genre)}</span><span class="status ${p.statusKind}">${e(p.status)}</span></div><div class="card-title-row"><h3 id="project-${p.slug}"><a href="${prefix}projects/${p.slug}/">${e(p.title)}</a></h3>${tools(p)}</div><p class="project-description">${e(p.cardDescription || p.description)}</p><p class="project-role">${e(p.teamSize)}</p>${badges(p.tags.slice(0,3))}<div class="project-actions">${p.githubUrl?ext(p.githubUrl,`${icon('github')} GitHub Repository`,'repository-link'):'<span class="repository-link unavailable" aria-disabled="true">'+icon('github')+' 공개 저장소 준비 중</span>'}<a class="view-project" href="${prefix}projects/${p.slug}/" aria-label="${e(p.title)} 상세 페이지 보기">View Project <span aria-hidden="true">→</span></a></div></div></article>`;
}

function home() {
  return shell({title: `${site.name} · ${site.role}`, description: 'Unity와 C#으로 게임플레이 시스템을 설계하고 구현하는 김명준의 개인 포트폴리오.', body:`<main id="main"><section id="about" class="about-section" aria-labelledby="hero-title"><div class="about-panel"><h1 id="hero-title" class="hero-entry">${e(site.role)}</h1><div class="profile-row"><figure class="profile-picture hero-entry"><button type="button" class="profile-toggle" aria-label="${e(site.name)} 프로필 정보" aria-controls="profile-identity" aria-expanded="false"><img src="./${site.portrait}" alt="${e(site.portraitAlt)}" width="240" height="240"><span id="profile-identity" class="profile-overlay"><strong>${e(site.name)}</strong><span>${e(site.birthDate)}</span></span></button>${site.portraitPlaceholder ? '<figcaption>프로필 사진 준비 중</figcaption>' : ''}</figure><div class="profile-links hero-entry"><div class="profile-name">${e(site.name)} (${e(site.englishName)})</div><button type="button" class="email-copy" data-email="${e(site.email)}" aria-label="이메일 주소 복사: ${e(site.email)}"><span class="email-value">${e(site.email)}</span></button><a href="${e(site.github)}" target="_blank" rel="noopener noreferrer">GitHub<span class="sr-only"> (새 탭)</span></a><a href="#projects">Projects</a><p id="email-copy-status" class="copy-status" role="status" aria-live="polite"></p></div></div><div class="about-copy hero-entry"><p><strong>${e(site.introduction)}</strong></p>${site.introductionDetails.map(text=>`<p>${e(text)}</p>`).join('')}</div></div></section>
<section id="projects" class="section container" aria-labelledby="projects-heading"><h2 id="projects-heading" class="section-title reveal">Projects</h2><div class="project-grid">${projects.map(p=>card(p)).join('')}</div></section>
<section id="skills" class="section container" aria-labelledby="skills-heading"><h2 id="skills-heading" class="section-title reveal">Skills</h2><div class="skills-grid">${skills.map(s=>`<article class="skill-item reveal"><h3>${icon(s.icon)}${e(s.title)}</h3><p>${e(s.text).replaceAll('\n','<br>')}</p></article>`).join('')}</div></section>
<section id="experience" class="section experience-section container" aria-labelledby="experience-heading"><h2 id="experience-heading" class="section-title reveal">Experience</h2><div class="experience-list">${experience.map(x=>{const inner=`<span class="experience-time">${e(x.time)}</span><div><h3>${e(x.title)}<span>${e(x.type)}</span></h3><p>${e(x.summary || x.text)}</p></div><span class="experience-arrow" aria-hidden="true">↗</span>`;return x.url?ext(x.url,inner,'experience-item reveal'):`<a class="experience-item reveal" href="./projects/${x.slug}/">${inner}</a>`;}).join('')}</div></section></main>`});
}

function media(p, prefix) {
  const shots=p.screenshots.map(s=>`<figure class="gameplay-shot"><a href="${prefix}${e(s.src)}" target="_blank" rel="noopener noreferrer" aria-label="${e(s.alt)} 원본 보기"><img src="${prefix}${e(s.src)}" alt="${e(s.alt)}" width="${s.width}" height="${s.height}" loading="lazy" decoding="async"></a><figcaption>${e(s.caption)}</figcaption></figure>`).join('');
  const videos=(p.videos||[]).map(v=>`<figure class="gameplay-clip"><video data-gameplay data-src="${prefix}${e(v.src)}" muted loop playsinline autoplay controls preload="none" aria-label="${e(v.title)}"><a href="${prefix}${e(v.src)}">${e(v.title)}</a></video><figcaption>${e(v.title)}</figcaption></figure>`).join('');
  return shots||videos ? `<div class="screenshot-gallery">${shots}</div>${videos?`<h3 class="gameplay-video-title">플레이 영상</h3><p class="video-note">음소거 · 2배속 반복 재생</p><div class="video-gallery">${videos}</div>`:''}` : '<p>플레이 화면 준비 중</p>';
}

function detail(p, index) {
  const prefix='../../';
  const other=projects.filter(x=>x.slug!==p.slug);
  return shell({title:`${p.title} · 김명준의 게임 개발 포트폴리오`,description:p.description,route:`projects/${p.slug}/`,prefix,detail:true,image:p.thumbnail,body:`<main id="main" class="detail-main"><div class="container"><nav class="breadcrumb" aria-label="현재 위치"><a href="../../#projects">프로젝트</a><span aria-hidden="true">/</span><span aria-current="page">${e(p.title)}</span></nav><section class="project-hero" aria-labelledby="detail-title"><div class="detail-title-row hero-entry"><div><p class="eyebrow">PROJECT ${p.id} <span>/ ${e(p.subtitle)}</span></p><h1 id="detail-title">${e(p.title)}<span class="period">.</span></h1><p class="detail-subtitle">${lines(p.description)}</p></div><span class="status ${p.statusKind}"><i aria-hidden="true"></i>${e(p.status)}</span></div><figure class="detail-cover hero-entry">${artwork(p,prefix)}<figcaption>${p.placeholder?'임시 커버 · 실제 게임 스크린샷이 아닙니다.':'게임 대표 화면'}</figcaption></figure><dl class="project-facts">${[['장르',p.genre],['플랫폼',p.platform],['개발 기간',p.developmentPeriod],['개발 인원',p.teamSize],['담당 역할',p.role],['기술',p.engine+' / '+p.language]].map(([k,v])=>`<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl></section></div>
<div class="detail-body container"><aside class="detail-toc"><p class="mono">IN THIS PROJECT</p><nav aria-label="프로젝트 목차">${[['overview','게임 개요'],['gameplay','플레이 화면'],['contributions','담당 작업'],['systems','핵심 시스템'],['problem-solving','개발과 문제 해결'],['resources','프로젝트 자료']].map(([id,t],i)=>`<a href="#${id}"><span>0${i+1}</span>${t}</a>`).join('')}</nav><a class="small-link" href="../../#projects">← 프로젝트 목록</a></aside><div class="detail-content">
<section id="overview" class="detail-section reveal"><p class="eyebrow">01 / GAME OVERVIEW</p><h2>어떤 게임인가요?</h2><p class="lead">${lines(p.overview)}</p><ul class="feature-list">${p.features.map(t=>`<li>${e(t)}</li>`).join('')}</ul>${badges(p.tags)}</section>
<section id="gameplay" class="detail-section reveal"><p class="eyebrow">02 / GAMEPLAY</p><h2>플레이를 들여다보기</h2>${media(p,prefix)}</section>
<section id="contributions" class="detail-section reveal"><p class="eyebrow">03 / MY CONTRIBUTIONS</p><h2>${e(p.contributionsTitle)}</h2><p>${e(p.contributionsNote)}</p><div class="contribution-list">${p.contributions.map((c,i)=>`<article><span class="contribution-index mono">0${i+1}</span><div><span class="quiet-label">${e(c.stage)}</span><h3>${e(c.title)}</h3><p>${e(c.text)}</p></div></article>`).join('')}</div></section>
<section id="systems" class="detail-section reveal"><p class="eyebrow">04 / CORE SYSTEMS</p><h2>플레이를 받치는 구조</h2><div class="flow-diagram" role="group" aria-label="${e(p.architectureLabel)}"><p class="mono">${e(p.architectureLabel)}</p><ol>${p.flow.map(t=>`<li>${e(t)}</li>`).join('')}</ol></div><div class="system-list">${p.systems.map(s=>`<article><h3>${e(s.title)}</h3><p>${e(s.text)}</p></article>`).join('')}</div></section>
<section id="problem-solving" class="detail-section reveal"><p class="eyebrow">05 / DEVELOPMENT & PROBLEM SOLVING</p><h2>${e(p.problem.title)}</h2><dl class="problem-steps">${[['맥락',p.problem.context],['접근',p.problem.approach],['현재 결과',p.problem.result]].map(([k,v])=>`<div><dt>${k}</dt><dd>${lines(v)}</dd></div>`).join('')}</dl></section>
<section id="resources" class="detail-section reveal"><p class="eyebrow">06 / PROJECT RESOURCES</p><h2>프로젝트 자료</h2><div class="resource-list">${p.githubUrl?ext(p.githubUrl,`${icon('github')} GitHub Repository`,'resource-link'):'<p>공개 저장소 준비 중</p>'}</div></section></div></div>
<section class="other-projects section"><div class="container"><div class="section-heading"><div><p class="eyebrow">KEEP EXPLORING</p><h2>다른 게임도 살펴보세요<span class="period">.</span></h2></div><a class="small-link" href="../../#projects">전체 프로젝트 <span aria-hidden="true">↗</span></a></div>${other.map(x=>`<a class="next-project" href="../${x.slug}/"><span class="mono">${index===0?'NEXT':'PREVIOUS'} PROJECT / ${x.id}</span><strong>${e(x.title)}</strong><span aria-hidden="true">→</span></a>`).join('')}</div></section></main>`});
}

await mkdir(out, {recursive:true});
await writeFile(resolve(out,'index.html'),home());
for (const [i,p] of projects.entries()) {
  await mkdir(resolve(out,'projects',p.slug),{recursive:true});
  await writeFile(resolve(out,'projects',p.slug,'index.html'),detail(p,i));
}
// 404는 임의 깊이 URL에서도 배포 기본 경로로 돌아갈 수 있도록 절대 경로를 사용합니다.
const notFoundPrefix = new URL(site.url).pathname;
await writeFile(resolve(out,'404.html'),shell({title:'페이지를 찾을 수 없습니다 · 김명준',description:'요청한 페이지를 찾을 수 없습니다.',notFound:true,prefix:notFoundPrefix,detail:true,body:`<main id="main" class="not-found container"><p class="eyebrow">404 / LOST IN THE LEVEL</p><h1>잠시, 다른 길로<br>오셨네요<span class="period">.</span></h1><p>주소가 바뀌었거나 존재하지 않는 페이지입니다.</p><a class="button button-dark" href="${notFoundPrefix}#projects">프로젝트로 돌아가기 →</a></main>`}));
await writeFile(resolve(out,'.nojekyll'),'');
await writeFile(resolve(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${site.url}sitemap.xml\n`);
await writeFile(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['',...projects.map(p=>`projects/${p.slug}/`)].map(p=>`<url><loc>${new URL(p,site.url).href}</loc></url>`).join('')}</urlset>\n`);
console.log(`정적 HTML 생성 완료: 메인 + 프로젝트 ${projects.length}개 + 404`);
