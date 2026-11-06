// 본문과 링크는 HTML에 존재합니다. JavaScript는 내비게이션과 모션만 보완합니다.
(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const mobile = matchMedia('(max-width: 900px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const emailButton = document.querySelector('.email-copy');
  const copyStatus = document.querySelector('#email-copy-status');
  if (emailButton && copyStatus) {
    let statusTimer;
    const fallbackCopy = value => {
      const previousFocus = document.activeElement;
      const field = document.createElement('textarea');
      field.value = value;
      field.readOnly = true;
      field.setAttribute('aria-hidden', 'true');
      field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
      document.body.append(field);
      try {
        field.select();
        return document.execCommand('copy');
      } finally {
        field.remove();
        previousFocus?.focus({preventScroll:true});
      }
    };
    emailButton.addEventListener('click', async () => {
      emailButton.disabled = true;
      clearTimeout(statusTimer);
      let copied = false;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(emailButton.dataset.email);
          copied = true;
        }
      } catch { /* 로컬 파일·권한 제한 환경에서는 기존 복사 방식으로 재시도합니다. */ }
      try {
        if (!copied) copied = fallbackCopy(emailButton.dataset.email);
      } catch { copied = false; }
      emailButton.disabled = false;
      copyStatus.textContent = copied ? '이메일을 복사했습니다.' : '복사하지 못했습니다. 이메일을 선택해 복사해 주세요.';
      if (copied) statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 3500);
    });
  }

  const profileToggle = document.querySelector('.profile-toggle');
  if (profileToggle) {
    profileToggle.addEventListener('click', () => {
      const expanded = profileToggle.getAttribute('aria-expanded') === 'true';
      profileToggle.setAttribute('aria-expanded', String(!expanded));
    });
    profileToggle.addEventListener('blur', () => profileToggle.setAttribute('aria-expanded','false'));
    profileToggle.addEventListener('keydown', event => {
      if (event.key === 'Escape') profileToggle.setAttribute('aria-expanded','false');
    });
  }

  if (menu && nav) {
    menu.hidden = false;
    document.body.classList.add('has-js');
    const close = (restoreFocus = false) => {
      const wasOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', '메뉴 열기');
      nav.classList.remove('is-open');
      if (restoreFocus && wasOpen) menu.focus();
    };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(true); });
    document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
    document.addEventListener('focusin', event => { if (!event.target.closest('.site-header')) close(); });
    mobile.addEventListener('change', () => close());
  }

  if (!('IntersectionObserver' in window)) return;

  // 모션 감소에서는 숨기지 않습니다. Observer 등록 뒤에만 대기 클래스를 적용합니다.
  const revealTargets = [...document.querySelectorAll('.reveal')];
  let revealObserver;
  const clearMotion = () => {
    revealObserver?.disconnect();
    revealTargets.forEach(el => el.classList.remove('reveal-pending'));
  };
  if (!reduced.matches) {
    try {
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          revealObserver.unobserve(entry.target);
        }
      }), {threshold: 0.07, rootMargin: '0px 0px -24px 0px'});
      revealTargets.forEach((el, i) => {
        if (el.getBoundingClientRect().top > innerHeight) {
          el.style.setProperty('--reveal-delay', `${Math.min(i % 2, 1) * 70}ms`);
          revealObserver.observe(el);
          el.classList.add('reveal-pending');
        }
      });
      // 키보드·앵커로 이동한 콘텐츠는 대기 없이 보이게 합니다.
      document.addEventListener('focusin', event => event.target.closest('.reveal')?.classList.remove('reveal-pending'));
      window.addEventListener('hashchange', () => {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        target?.classList.remove('reveal-pending');
        target?.querySelectorAll('.reveal-pending').forEach(el=>el.classList.remove('reveal-pending'));
      });
    } catch { clearMotion(); }
  }
  reduced.addEventListener('change', event => { if (event.matches) clearMotion(); });

  const sections = [...document.querySelectorAll('main section[id]')];
  const localLinks = [...document.querySelectorAll('nav a[href*="#"]')].filter(a=> {
    const url = new URL(a.href);
    return url.pathname === location.pathname && document.getElementById(url.hash.slice(1));
  });
  const visible = new Map();
  const updateCurrent = () => {
    const ordered = sections.filter(s=>visible.get(s.id)).sort((a,b)=>Math.abs(a.getBoundingClientRect().top - 110)-Math.abs(b.getBoundingClientRect().top - 110));
    const current = ordered[0];
    if (!current) return;
    localLinks.forEach(link=> {
      if (new URL(link.href).hash === `#${current.id}`) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  };
  const sectionObserver = new IntersectionObserver(entries=> {
    entries.forEach(entry=>visible.set(entry.target.id, entry.isIntersecting));
    updateCurrent();
  }, {rootMargin:'-100px 0px -40% 0px',threshold:0});
  sections.forEach(s=>sectionObserver.observe(s));
})();
// 영상 주소는 HTML에 직접 두어 지연 로딩 코드 없이도 재생할 수 있습니다.
const clips=[...document.querySelectorAll('video[data-gameplay]')];
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const onScreen=new Set();
const manuallyPaused=new WeakSet();
function playClip(video,manual=false){
  video.muted=true;
  video.defaultPlaybackRate=1.5;
  video.playbackRate=1.5;
  if(!document.hidden&&(manual||(!motionPreference.matches&&!manuallyPaused.has(video)))){
    const attempt=video.play();
    if(attempt)attempt.catch(()=>{video.controls=true;});
  }
}
for(const video of clips){
  video.muted=true;
  video.defaultPlaybackRate=1.5;
  video.playbackRate=1.5;
  if(motionPreference.matches){video.autoplay=false;video.pause();}
  video.addEventListener('loadedmetadata',()=>{video.defaultPlaybackRate=1.5;video.playbackRate=1.5;});
  video.addEventListener('canplay',()=>{if(onScreen.has(video))playClip(video);});
  const toggle=()=>{if(video.paused){manuallyPaused.delete(video);playClip(video,true);}else{manuallyPaused.add(video);video.pause();}};
  video.addEventListener('click',()=>{if(!video.controls)toggle();});
  video.addEventListener('keydown',event=>{if(event.key===' '||event.key==='Enter'){event.preventDefault();toggle();}});
}
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){onScreen.add(entry.target);playClip(entry.target);}else{onScreen.delete(entry.target);entry.target.pause();}}},{threshold:0.05});
  clips.forEach(video=>observer.observe(video));
}else{clips.forEach(video=>{onScreen.add(video);playClip(video);});}
document.addEventListener('visibilitychange',()=>{for(const video of clips){if(document.hidden)video.pause();else if(onScreen.has(video))playClip(video);}});
motionPreference.addEventListener('change',()=>{for(const video of clips){if(motionPreference.matches)video.pause();else if(onScreen.has(video))playClip(video);}});

// 메인 화면의 휠 이동은 1초 동안 다음 섹션으로 이어집니다.
if(document.body.classList.contains('home-page')){
  const panels=[...document.querySelectorAll('main>section')];
  let moving=false;
  let wheelTotal=0;
  let lastWheel=0;
  window.addEventListener('wheel',event=>{
    if(event.ctrlKey||motionPreference.matches||Math.abs(event.deltaX)>Math.abs(event.deltaY)||event.target.closest('#primary-nav'))return;
    if(moving){event.preventDefault();return;}
    const current=panels.reduce((best,panel)=>Math.abs(panel.getBoundingClientRect().top)<Math.abs(best.getBoundingClientRect().top)?panel:best,panels[0]);
    // 작은 화면의 긴 섹션은 일반 스크롤로 끝까지 읽을 수 있습니다.
    if(current.offsetHeight>innerHeight+2)return;
    if(performance.now()-lastWheel>180)wheelTotal=0;
    lastWheel=performance.now();
    wheelTotal+=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
    event.preventDefault();
    if(Math.abs(wheelTotal)<8)return;
    const next=panels[panels.indexOf(current)+(wheelTotal>0?1:-1)];
    wheelTotal=0;
    if(!next)return;
    moving=true;
    const root=document.documentElement;
    const start=scrollY;
    const end=next.getBoundingClientRect().top+start;
    const began=performance.now();
    root.style.scrollSnapType='none';
    root.style.scrollBehavior='auto';
    function frame(now){
      const t=Math.min((now-began)/1000,1);
      const eased=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
      window.scrollTo(0,start+(end-start)*eased);
      if(t<1)requestAnimationFrame(frame);
      else{root.style.removeProperty('scroll-snap-type');root.style.removeProperty('scroll-behavior');moving=false;}
    }
    requestAnimationFrame(frame);
  },{passive:false});
}
