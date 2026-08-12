/* ===================================
   NexaPro - Main JavaScript
   Version: 1.0.0
   =================================== */

(function () {
  'use strict';

  /* ===== Preloader ===== */
  window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 500);
    }
  });

  /* ===== Navbar Scroll Effect ===== */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar?.classList.add('scrolled');
      backToTop?.classList.add('show');
    } else {
      navbar?.classList.remove('scrolled');
      backToTop?.classList.remove('show');
    }
  });

  /* ===== Mobile Menu Toggle ===== */
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ===== Smooth Scroll for Anchor Links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ===== Scroll Reveal Animation ===== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* ===== Counter Animation ===== */
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.ceil(current) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => counterObserver.observe(counter));

  /* ===== Testimonial Slider ===== */
  const testimonials = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;

  function showSlide(index) {
    testimonials.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (testimonials[index]) testimonials[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  // Auto-rotate testimonials
  if (testimonials.length > 1) {
    setInterval(() => {
      const next = (currentSlide + 1) % testimonials.length;
      showSlide(next);
    }, 5000);
  }

  /* ===== Contact Form Validation ===== */
  const contactForm = document.querySelector('#contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('#name').value.trim();
      const email = this.querySelector('#email').value.trim();
      const subject = this.querySelector('#subject').value.trim();
      const message = this.querySelector('#message').value.trim();
      const formMessage = this.querySelector('.form-message');

      // Reset message
      formMessage.className = 'form-message';
      formMessage.style.display = 'none';

      // Validation
      if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.classList.add('error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
      }

      // Success (simulated - connect to your backend)
      formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
      formMessage.classList.add('success');
      this.reset();

      setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.style.display = 'none';
      }, 5000);
    });
  }

  /* ===== Newsletter Form ===== */
  const newsletterForms = document.querySelectorAll('.footer-newsletter form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      if (input && input.value.trim()) {
        input.value = '';
        // You can add a success message here
        const originalPlaceholder = input.placeholder;
        input.placeholder = 'Subscribed!';
        setTimeout(() => {
          input.placeholder = originalPlaceholder;
        }, 3000);
      }
    });
  });

  /* ===== Dark Mode Toggle ===== */
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  /* ===== Active Nav Link Based on Page ===== */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ===== Hero Chart Animation ===== */
  const chartBars = document.querySelectorAll('.hero-chart-bar');
  chartBars.forEach((bar, index) => {
    const targetHeight = bar.getAttribute('data-height') || '60';
    bar.style.height = '0px';
    setTimeout(() => {
      bar.style.transition = 'height 1s ease';
      bar.style.height = targetHeight + '%';
    }, 300 + index * 100);
  });
})();
