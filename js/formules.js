/**
 * formules.js — Carousel 3D des formules
 * Churrascaria Fazenda Do Brasil
 *
 * Responsabilités :
 *   - Rendu des cartes formules depuis les données
 *   - Navigation clavier / boutons / dots / clic carte
 */

import { FORMULES } from '../data/content.js';

/* ── Template HTML d'une carte ────────────────────────────── */

function formuleCardHTML(formule, index) {
  const countLine = formule.count
    ? `<div class="formule-line">${formule.count}</div>`
    : '';

  const linesHTML = formule.lines
    .map((line) => `<div class="formule-line">${line}</div>`)
    .join('');

  return `
    <div class="formule-card" data-index="${index}">
      <div class="formule-card-inner">
        <div class="formule-card-shine"></div>
        <div class="formule-eyebrow">${formule.eyebrow}</div>
        <div class="formule-name">${formule.name}</div>
        <div class="formule-price">${formule.price}</div>
        ${countLine}
        <div class="formule-divider"></div>
        <div class="formule-includes">${linesHTML}</div>
        <div class="formule-tag">${formule.tag}</div>
      </div>
    </div>
  `;
}

/* ── Positionnement 3D ────────────────────────────────────── */

const POSITIONS = ['pos-active', 'pos-next', 'pos-prev', 'pos-far'];

function applyPositions(cards, activeIndex) {
  const total = cards.length;

  cards.forEach((card, i) => {
    // Retirer toutes les classes de position
    card.classList.remove(...POSITIONS);

    const diff = ((i - activeIndex) % total + total) % total;

    if (diff === 0) {
      card.style.zIndex = '10';
      card.classList.add('pos-active');
    } else if (diff === 1) {
      card.style.zIndex = '4';
      card.classList.add('pos-next');
    } else if (diff === total - 1) {
      card.style.zIndex = '4';
      card.classList.add('pos-prev');
    } else {
      card.style.zIndex = '1';
      card.classList.add('pos-far');
    }
  });
}

/* ── Init ─────────────────────────────────────────────────── */

export function initFormules() {
  const stage = document.getElementById('formulesStage');
  const dotsContainer = document.getElementById('formulesDots');
  if (!stage || !dotsContainer) return;

  // Injecter les cartes
  stage.innerHTML = FORMULES.map(formuleCardHTML).join('');

  const cards = stage.querySelectorAll('.formule-card');
  const total = cards.length;
  let active  = 0;

  // Créer les dots
  dotsContainer.innerHTML = '';
  FORMULES.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'fml-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    dotsContainer.querySelectorAll('.fml-dot').forEach((d, i) => {
      d.classList.toggle('active', i === active);
    });
  }

  function goTo(index) {
    active = ((index % total) + total) % total;
    applyPositions(cards, active);
    updateDots();
  }

  // Boutons flèches
  document.getElementById('fmlPrev')?.addEventListener('click', () => goTo(active - 1));
  document.getElementById('fmlNext')?.addEventListener('click', () => goTo(active + 1));

  // Clic sur une carte non-active → la sélectionner
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (i !== active) goTo(i);
    });
  });

  // Navigation clavier (bonus accessibilité)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  goTo(active - 1);
    if (e.key === 'ArrowRight') goTo(active + 1);
  });

  // Init
  goTo(0);
}
