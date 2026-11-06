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
