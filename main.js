/**
 * main.js — Point d'entrée principal
 * Churrascaria Fazenda Do Brasil
 *
 * Responsabilités :
 *   - Init curseur personnalisé
 *   - Nav scroll + burger mobile
 *   - Génération des feuilles & particules (hero)
 *   - Tabs du menu carte
 *   - Scroll reveal (IntersectionObserver)
 */

import { initCarousels }  from './carousel.js';
import { initFormules }   from './formules.js';

/* ── Curseur ──────────────────────────────────────────────── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .plat-card, .foire-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      cursor.style.background = 'rgba(245,200,0,0.2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = 'transparent';
    });
  });
}

/* ── Navigation ───────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const drawer = document.getElementById('navDrawer');
  const burger = document.getElementById('burger');

  // Scroll → sticky style
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Burger mobile
  window.toggleDrawer = () => {
    drawer.classList.toggle('open');
    burger.classList.toggle('open');
  };
  window.closeDrawer = () => {
    drawer.classList.remove('open');
    burger.classList.remove('open');
  };
}

/* ── Particules Hero (feuilles + dots) ────────────────────── */
function initHeroParticles() {
  const leafEmojis = ['🌿', '🍃', '🌴', '🦜', '🌺', '🌸'];
  const lc = document.getElementById('leafContainer');
  if (lc) {
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');
      el.className = 'leaf';
      const r0 = (Math.random() * 30 - 15) + 'deg';
      const r1 = (Math.random() * 30 - 15) + 'deg';
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${Math.random() * 4 + 2}rem;
        animation-duration: ${Math.random() * 6 + 5}s;
        animation-delay: -${Math.random() * 6}s;
        --r0: ${r0};
        --r1: ${r1};
      `;
      el.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
      lc.appendChild(el);
    }
  }

  const colors = ['#F5C800', '#1A6B2A', '#009FD4', '#E85D04', '#E8A800'];
  const pc = document.getElementById('particleContainer');
  if (pc) {
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'particle';
      const size = Math.random() * 5 + 2;
      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        opacity: 0.7;
        animation-duration: ${Math.random() * 12 + 8}s;
        animation-delay: -${Math.random() * 12}s;
      `;
      pc.appendChild(el);
    }
  }
}

/* ── Menu Tabs ────────────────────────────────────────────── */
function initMenuTabs() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach((el) => obs.observe(el));
}

/* ── Bootstrap ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initHeroParticles();
  initMenuTabs();
  initScrollReveal();
  initCarousels();
  initFormules();
});
