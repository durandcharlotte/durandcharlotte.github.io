// Small enhancement: reveal-on-scroll and smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  // Reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"], a[href*="/#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

// Hero parallax + subtle float (place inside DOMContentLoaded or at end of file)
(function heroEnhancements() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const bg = hero.querySelector('.hero__bg');
  let frame = null;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  // Mouse parallax (small)
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX = (e.clientX - cx) / rect.width;  // -0.5 .. 0.5
    mouseY = (e.clientY - cy) / rect.height;
    if (!frame) frame = requestAnimationFrame(update);
  });

  hero.addEventListener('mouseleave', () => {
    mouseX = 0; mouseY = 0;
    if (!frame) frame = requestAnimationFrame(update);
  });

  function update() {
    targetX += (mouseX - targetX) * 0.08;
    targetY += (mouseY - targetY) * 0.08;

    // background position shift and a tiny translate for parallax effect
    const offsetX = targetX * 8; // px
    const offsetY = targetY * 8;

    bg.style.transform = `scale(1.06) translate3d(${offsetX}px, ${offsetY}px, 0)`;

    // stop loop if close to zero and no mouse movement
    if (Math.abs(targetX) < 0.001 && Math.abs(targetY) < 0.001 && mouseX === 0 && mouseY === 0) {
      cancelAnimationFrame(frame);
      frame = null;
      return;
    }
    frame = requestAnimationFrame(update);
  }

  // Ensure hero content reveals when in view (if using IntersectionObserver earlier)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target.querySelector('.reveal');
        if (el) el.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  observer.observe(hero);
})();