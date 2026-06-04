/* ============================================================
   palette-switcher.js
   우하단 팔레트 스위처 위젯 — 테마 교체 + 다크모드 토글
   ============================================================ */
(function () {
  const PALETTES = [
    { id: 'blue',   name: '블루',   a: '#1e3a5f', b: '#3b82f6' },
    { id: 'green',  name: '그린',   a: '#14532d', b: '#84cc16' },
    { id: 'purple', name: '퍼플',   a: '#3b0764', b: '#a855f7' },
    { id: 'teal',   name: '틸',     a: '#134e4a', b: '#14b8a6' },
    { id: 'rose',   name: '로즈',   a: '#881337', b: '#fb7185' },
  ];

  const STORAGE_PALETTE = 'mia-palette';
  const STORAGE_THEME   = 'mia-theme';

  /* ---- palette <link> 태그 생성 ---- */
  const paletteLink = document.createElement('link');
  paletteLink.rel  = 'stylesheet';
  paletteLink.id   = 'palette-link';
  document.head.appendChild(paletteLink);

  /* ---- 저장된 설정 불러오기 ---- */
  const savedPalette = localStorage.getItem(STORAGE_PALETTE) || 'blue';
  const savedTheme   = localStorage.getItem(STORAGE_THEME);
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  applyPalette(savedPalette);

  /* ---- 위젯 DOM 생성 ---- */
  const widget = document.createElement('div');
  widget.className = 'palette-switcher';
  widget.innerHTML = `
    <div class="palette-panel" id="palette-panel">
      <div class="palette-label">테마 팔레트</div>
      <div class="palette-swatches" id="palette-swatches"></div>
      <div class="palette-label" style="margin-top:4px">다크 모드</div>
      <div class="dark-toggle" id="dark-toggle">
        <span id="dark-label">OFF</span>
        <button class="dark-toggle-btn" id="dark-btn" aria-label="다크 모드 토글"></button>
      </div>
    </div>
    <button class="palette-toggle" id="palette-toggle-btn" aria-label="팔레트 열기">🎨</button>
  `;
  document.body.appendChild(widget);

  const panel        = widget.querySelector('#palette-panel');
  const toggleBtn    = widget.querySelector('#palette-toggle-btn');
  const swatchesEl   = widget.querySelector('#palette-swatches');
  const darkBtn      = widget.querySelector('#dark-btn');
  const darkLabel    = widget.querySelector('#dark-label');

  /* ---- 스와치 생성 ---- */
  PALETTES.forEach(p => {
    const sw = document.createElement('button');
    sw.className = 'swatch' + (p.id === savedPalette ? ' active' : '');
    sw.title     = p.name;
    sw.setAttribute('aria-label', p.name + ' 팔레트');
    sw.style.setProperty('--sw-a', p.a);
    sw.style.setProperty('--sw-b', p.b);
    sw.addEventListener('click', () => {
      applyPalette(p.id);
      swatchesEl.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      localStorage.setItem(STORAGE_PALETTE, p.id);
    });
    swatchesEl.appendChild(sw);
  });

  /* ---- 다크 모드 토글 ---- */
  function syncDarkUI() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    darkLabel.textContent = isDark ? 'ON' : 'OFF';
    darkBtn.parentElement.classList.toggle('dark-active', isDark);
  }
  syncDarkUI();

  darkBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_THEME, next);
    syncDarkUI();
  });

  /* ---- 패널 열기/닫기 ---- */
  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!widget.contains(e.target)) panel.classList.remove('open');
  });

  /* ---- 팔레트 적용 ---- */
  function applyPalette(id) {
    paletteLink.href = `css/themes/palette-${id}.css`;
  }
})();
