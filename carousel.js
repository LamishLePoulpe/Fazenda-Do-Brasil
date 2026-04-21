/**
 * carousel.js — Carousels & Marquee
 * Churrascaria Fazenda Do Brasil
 *
 * Responsabilités :
 *   - Marquee double rangée (section Plats)
 *   - Carousel horizontal (section Foires) + ruban texte
 */

import { PLATS, FOIRES } from '../data/content.js';

/* ── Helpers HTML ─────────────────────────────────────────── */

function platCardHTML(plat) {
  return `
    <div class="plat-card">
      <div class="plat-img">
        <div class="plat-img-bg" style="background:${plat.bg}"></div>
        <span class="plat-badge">${plat.badge}</span>
      </div>
      <div class="plat-body">
        <div class="plat-name">${plat.name}</div>
        <div class="plat-desc">${plat.desc}</div>
        <div class="plat-footer">
          <span class="plat-price">${plat.price}</span>
          <span class="plat-flag">🇧🇷</span>
        </div>
      </div>
    </div>
  `;
}

function foireCardHTML(foire) {
  return `
    <div class="foire-card">
      <div class="foire-ville">${foire.ville}</div>
      <div class="foire-event">${foire.event}</div>
      <div class="foire-dates">📅 ${foire.dates}</div>
      <div class="foire-lieu">📍 ${foire.lieu}</div>
      <span class="foire-status ${foire.status}">${foire.label}</span>
    </div>
  `;
}

/* ── Marquee Plats ────────────────────────────────────────── */

function initMarquee() {
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');
  if (!row1 || !row2) return;

  // Double les cartes pour un défilement sans fin
  const doubled         = [...PLATS, ...PLATS];
  const reversedDoubled = [...[...PLATS].reverse(), ...[...PLATS].reverse()];

  row1.innerHTML = doubled.map(platCardHTML).join('');
  row2.innerHTML = reversedDoubled.map(platCardHTML).join('');
}

/* ── Carousel Foires ──────────────────────────────────────── */

function initFoiresCarousel() {
  const track = document.getElementById('foiresTrack');
  if (!track) return;

  // Injecter les cartes depuis les données
  track.innerHTML = FOIRES.map(foireCardHTML).join('');

  let current = 0;

  function getVisible() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }

  function go(dir) {
    const cards = track.querySelectorAll('.foire-card');
    const max   = Math.max(0, cards.length - getVisible());
    current     = Math.max(0, Math.min(current + dir, max));
    const cardW = cards[0].getBoundingClientRect().width + 24; // gap = 1.5rem ≈ 24px
    track.style.transform = `translateX(-${current * cardW}px)`;
  }

  document.getElementById('foiresPrev')?.addEventListener('click', () => go(-1));
  document.getElementById('foiresNext')?.addEventListener('click', () => go(1));

  // Reset sur resize
  window.addEventListener('resize', () => { current = 0; track.style.transform = 'translateX(0)'; });
}

/* ── Ruban Foires ─────────────────────────────────────────── */

function initFoiresRibbon() {
  const ribbon = document.getElementById('ribbon');
  if (!ribbon) return;

  const villes = FOIRES.map((f) => f.ville);
  // Quadruple pour le scroll infini
  const items  = [...villes, ...villes, ...villes, ...villes];

  ribbon.innerHTML = items
    .map((v) => `<span class="ribbon-item"><span class="ribbon-dot"></span>${v}</span>`)
    .join('');
}

/* ── Export ───────────────────────────────────────────────── */

export function initCarousels() {
  initMarquee();
  initFoiresCarousel();
  initFoiresRibbon();
}
