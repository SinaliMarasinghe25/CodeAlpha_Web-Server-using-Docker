document.addEventListener('DOMContentLoaded', function () {

  //  SKILL BARS ANIMATION 
  // Find all skill fill bars and animate them when visible
  const skillFills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Get the target width from the data attribute and apply it
        const targetWidth = entry.target.getAttribute('data-width');
        entry.target.style.width = targetWidth;
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(function (bar) {
    observer.observe(bar);
  });

  //  SMOOTH SCROLL for nav links 
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  //  FADE IN on scroll 
  const cards = document.querySelectorAll('.about-card, .project-card');

  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(card);
  });

});
// ── DOCKER STATUS PAGE FUNCTIONS ──────────────────

// Uptime counter (used on status.html)
function updateUptime() {
    const el = document.getElementById('uptime');
    if (!el) return; // Stops if element doesn't exist on current page
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now());
    }
    const secs = Math.floor((Date.now() - parseInt(sessionStorage.getItem('startTime'))) / 1000);
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    el.textContent = `${h}h ${m}m ${s}s`;
}

// Timestamp updater (used on status.html)
function updateTimestamp() {
    const el = document.getElementById('last-updated');
    if (!el) return; // Stops if element doesn't exist on current page
    el.textContent = 'Last updated: ' + new Date().toLocaleTimeString();
}

// Start the timers if we're on status page
if (document.getElementById('uptime') || document.getElementById('last-updated')) {
    updateUptime();
    updateTimestamp();
    setInterval(function () {
        updateUptime();
        updateTimestamp();
    }, 1000);
}