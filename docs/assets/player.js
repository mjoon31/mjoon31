// 전체 플레이 영상 전용: 짧은 자동 반복 영상과 독립적으로 동작합니다.
for (const player of document.querySelectorAll('[data-film-player]')) {
  const video=player.querySelector('video');
  const controls=player.querySelector('.film-controls');
  const center=player.querySelector('.film-center');
  const trigger=player.querySelector('.film-controls-trigger');
  const seek=player.querySelector('.film-seek');
  const play=player.querySelector('[data-play]');
  const mute=player.querySelector('[data-mute]');
  const full=player.querySelector('[data-fullscreen]');
  const time=player.querySelector('.film-time');
  const badge=player.querySelector('.film-speed');
  const error=player.querySelector('.film-error');
  let hideTimer,holdTimer,press,holding=false,seeking=false;
  const fmt=seconds=>{seconds=Math.max(0,Math.floor(seconds||0));return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;};
  function show(){
    player.classList.add('controls-visible');clearTimeout(hideTimer);
    if(!video.paused&&!seeking)hideTimer=setTimeout(()=>{if(!controls.contains(document.activeElement))player.classList.remove('controls-visible');},2600);
  }
  async function toggle(){
    if(video.paused){try{await video.play();}catch{error.hidden=false;}}
    else video.pause();
    show();
  }
  function sync(){
    player.classList.toggle('is-playing',!video.paused);
    play.textContent=video.paused?'▶':'Ⅱ';
    play.setAttribute('aria-label',video.paused?'재생':'일시정지');
    time.textContent=`${fmt(video.currentTime)} / ${fmt(video.duration)}`;
    if(!seeking)seek.value=Number.isFinite(video.duration)&&video.duration>0?100*video.currentTime/video.duration:0;
    seek.disabled=!Number.isFinite(video.duration)||video.duration<=0;
    seek.setAttribute('aria-valuetext',`${fmt(video.currentTime)} / ${fmt(video.duration)}`);
    mute.textContent=video.muted?'음소거 해제':'음소거';
    mute.setAttribute('aria-label',mute.textContent);
    mute.setAttribute('aria-pressed',String(video.muted));
  }
  function release(){
    clearTimeout(holdTimer);
    if(holding){video.playbackRate=1;holding=false;badge.hidden=true;}
  }
  video.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    press={id:event.pointerId,x:event.clientX,y:event.clientY,long:false};
    video.setPointerCapture(event.pointerId);
    const rect=video.getBoundingClientRect();
    if(event.clientX>=rect.left+rect.width/2&&!video.paused){
      holdTimer=setTimeout(()=>{if(!press)return;video.playbackRate=2;press.long=true;holding=true;badge.hidden=false;},350);
    }
  });
  video.addEventListener('pointermove',event=>{if(press&&Math.hypot(event.clientX-press.x,event.clientY-press.y)>12){press.long=true;release();}});
  video.addEventListener('pointerup',event=>{
    if(!press||press.id!==event.pointerId)return;
    const short=!press.long;release();press=null;
    if(short)toggle();else show();
  });
  video.addEventListener('pointercancel',()=>{release();press=null;});
  video.addEventListener('lostpointercapture',()=>{release();press=null;});
  video.addEventListener('contextmenu',event=>event.preventDefault());
  video.addEventListener('click',event=>event.preventDefault());
  play.addEventListener('click',toggle);center.addEventListener('click',toggle);
  trigger.addEventListener('click',show);
  mute.addEventListener('click',()=>{video.muted=!video.muted;sync();show();});
  full.addEventListener('click',async()=>{
    try{
      if(document.fullscreenElement===player)await document.exitFullscreen();
      else if(player.requestFullscreen)await player.requestFullscreen();
      else if(video.webkitEnterFullscreen)video.webkitEnterFullscreen();
    }catch{if(video.webkitEnterFullscreen)video.webkitEnterFullscreen();}
    show();
  });
  document.addEventListener('fullscreenchange',()=>{
    const active=document.fullscreenElement===player;full.textContent=active?'화면 축소':'전체화면';full.setAttribute('aria-label',full.textContent);
  });
  seek.addEventListener('input',()=>{seeking=true;if(Number.isFinite(video.duration))video.currentTime=video.duration*Number(seek.value)/100;sync();show();});
  seek.addEventListener('change',()=>{seeking=false;show();});
  player.addEventListener('pointermove',event=>{if(event.pointerType==='mouse')show();});
  player.addEventListener('pointerleave',()=>{if(!video.paused&&!controls.contains(document.activeElement))player.classList.remove('controls-visible');});
  player.addEventListener('focusin',show);
  player.addEventListener('keydown',event=>{
    if(event.target.closest('button,input'))return;
    if(event.key===' '||event.key==='Enter'){event.preventDefault();toggle();}
    else if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();if(Number.isFinite(video.duration))video.currentTime=Math.max(0,Math.min(video.duration,video.currentTime+(event.key==='ArrowRight'?5:-5)));show();}
    else if(event.key.toLowerCase()==='m')mute.click();
    else if(event.key.toLowerCase()==='f')full.click();
  });
  for(const type of ['loadedmetadata','durationchange','timeupdate','volumechange'])video.addEventListener(type,sync);
  for(const type of ['play','pause','ended'])video.addEventListener(type,()=>{sync();show();if(video.paused)release();});
  video.addEventListener('error',()=>{error.hidden=false;});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){release();press=null;video.pause();}});
  window.addEventListener('blur',()=>{release();press=null;});
  video.controls=false;video.tabIndex=0;
  controls.hidden=false;center.hidden=false;trigger.hidden=false;
  player.classList.add('film-enhanced','controls-visible');
  sync();
}
