// Custom Portfolio JavaScript Enhancements

// 1. Animated Metric Counters
function animateValue(element, start, end, duration, decimals = 0, prefix = '', suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    let current;
    if (decimals > 0) {
      current = (progress * (end - start) + start).toFixed(decimals);
    } else {
      current = Math.floor(progress * (end - start) + start);
    }

    element.innerHTML = prefix + current + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Initialize counters on page load
document.addEventListener('DOMContentLoaded', function() {
  // Animate GPA: 0 → 3.83
  const gpaElement = document.getElementById('metric-gpa');
  if (gpaElement) {
    animateValue(gpaElement, 0, 3.83, 2000, 2);
  }

  // Animate Cost Avoidance: 0 → 700
  const costElement = document.getElementById('metric-cost');
  if (costElement) {
    animateValue(costElement, 0, 700, 2000, 0, '$', 'K');
  }

  // Animate Papers: 0 → 1
  const paperElement = document.getElementById('metric-paper');
  if (paperElement) {
    animateValue(paperElement, 0, 1, 1500, 0);
  }
});

// 2. Smooth Scroll Fade-In Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Observe all sections with fade-in class
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => observer.observe(el));
});

// 3. Impact Chart Animation
document.addEventListener('DOMContentLoaded', function() {
  const impactBars = document.querySelectorAll('.impact-bar');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 200);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  impactBars.forEach(bar => {
    bar.style.width = '0%';
    barObserver.observe(bar);
  });
});

// 4. Add featured-card class to project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('[style*="border: 1px solid #ddd"]');
  projectCards.forEach(card => {
    card.classList.add('featured-card');
  });
});

// 5. Add skill-badge class to skill spans
document.addEventListener('DOMContentLoaded', function() {
  const skillBadges = document.querySelectorAll('[style*="background: #e8f5e9"]');
  skillBadges.forEach(badge => {
    badge.classList.add('skill-badge');
  });
});

// 6. Smooth scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
