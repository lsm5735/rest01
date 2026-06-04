/* ============================================================
   hero-effects.js
   1. 캔버스 파티클 배경 (hero 영역)
   2. 히어로 요소 순차 페이드인
   3. 직함 타이핑 효과
   ============================================================ */
(function () {

  /* ==========================================================
     1. 파티클 캔버스
     ========================================================== */
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const PARTICLE_COUNT = 55;
  const MAX_DIST = 130;
  let particles = [];
  let W, H, raf;

  function resize() {
    const hero = canvas.parentElement;
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  rand(0, W),
      y:  rand(0, H),
      vx: rand(-.4, .4),
      vy: rand(-.4, .4),
      r:  rand(1.5, 3.5),
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* 연결선 */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,255,${1 - dist / MAX_DIST})`;
          ctx.lineWidth = .6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    /* 파티클 */
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,.75)';
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
  resize();
  createParticles();
  draw();

  /* ==========================================================
     2. 히어로 요소 순차 페이드인
     ========================================================== */
  const FADE_TARGETS = [
    '.hero-photo',
    '.hero-greeting',
    '.hero-name',
    '.hero-title',
    '.hero-bio',
    '.hero-contacts',
  ];

  FADE_TARGETS.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), 100 + i * 150);
  });

  /* ==========================================================
     3. 직함 타이핑 효과
     타이핑은 페이드인 후 실행 (히어로-타이틀 .visible 이후)
     ========================================================== */
  const titleEl = document.getElementById('job-title');
  if (!titleEl) return;

  const TITLE_DELAY = 100 + 3 * 150 + 200;   /* hero-title 페이드인 시작 이후 */

  setTimeout(() => {
    const fullText = titleEl.textContent.trim();
    titleEl.textContent = '';

    /* 커서 스팬 */
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    titleEl.appendChild(cursor);

    let idx = 0;
    const interval = setInterval(() => {
      if (idx >= fullText.length) {
        clearInterval(interval);
        /* 타이핑 완료 후 2초 뒤 커서 제거 */
        setTimeout(() => cursor.remove(), 2000);
        return;
      }
      titleEl.insertBefore(document.createTextNode(fullText[idx]), cursor);
      idx++;
    }, 55);
  }, TITLE_DELAY);

})();
