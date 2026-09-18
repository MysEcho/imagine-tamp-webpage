/* Imagine-TAMP project page.
 *
 * Hero: a full-viewport 3x3 grid of looping videos behind the wordmark. Each tile shows a dark
 * placeholder until its clip has decoded a frame, so the layout looks right even before the
 * videos are added. Clips are cropped to fill their tile (object-fit: cover).
 */
(function () {
  const grid = document.getElementById('heroGrid');
  if (!grid) return;

  // TODO: point these at the nine hero clips. Order is row-major, top-left to bottom-right.
  const HERO_CLIPS = [
    './static/videos/hero/01.mp4', './static/videos/hero/02.mp4', './static/videos/hero/03.mp4',
    './static/videos/hero/04.mp4', './static/videos/hero/05.mp4', './static/videos/hero/06.mp4',
    './static/videos/hero/07.mp4', './static/videos/hero/08.mp4', './static/videos/hero/09.mp4',
  ];
  const hues = [215, 30, 200, 260, 20, 230, 190, 210, 40];

  // Load tiles lazily so nine videos don't all start downloading before the hero is on screen.
  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting && v.dataset.src && !v.src) {
        v.src = v.dataset.src;
        v.load();
        v.play().catch(() => {});
        observer.unobserve(v);
      }
    });
  }, { rootMargin: '200px 0px' }) : null;

  HERO_CLIPS.forEach((src, i) => {
    const tile = document.createElement('div');
    tile.className = 'hero-tile';
    tile.style.setProperty('--h', hues[i % hues.length]);

    const label = document.createElement('span');
    label.textContent = 'clip ' + String(i + 1).padStart(2, '0');
    tile.appendChild(label);

    const v = document.createElement('video');
    v.autoplay = true; v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.preload = 'none';
    v.dataset.src = src;
    v.addEventListener('loadeddata', () => { tile.classList.add('loaded'); v.play().catch(() => {}); }, { once: true });
    v.addEventListener('error', () => { v.remove(); }, { once: true });
    tile.appendChild(v);

    grid.appendChild(tile);
    if (observer) observer.observe(v); else { v.src = src; }
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) document.querySelectorAll('video').forEach(v => v.play().catch(() => {}));
  });
})();
