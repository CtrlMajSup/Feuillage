/* ============================================
   FLORA — main.js
   - Recherche en temps réel
   - Filtres par tags
   - Menu mobile
   ============================================ */

(function () {
  'use strict';

  /* ── Menu mobile ── */
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  /* ── Recherche + filtres (page encyclopédie) ── */
  const searchInput = document.getElementById('search-input');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const cards       = document.querySelectorAll('.plant-card');
  const countEl     = document.getElementById('plants-count');

  if (!searchInput && !filterBtns.length) return;

  let activeTag = '';
  let query     = '';

  // Lire le tag depuis l'URL (?tag=xxx)
  const params = new URLSearchParams(window.location.search);
  if (params.has('tag')) {
    activeTag = params.get('tag').toLowerCase();
    filterBtns.forEach(btn => {
      if (btn.dataset.tag === activeTag) btn.classList.add('active');
    });
  }

  function slugify(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function updateCount(visible) {
    if (!countEl) return;
    const total = cards.length;
    countEl.innerHTML = visible === total
      ? `<strong>${total}</strong> plante${total > 1 ? 's' : ''}`
      : `<strong>${visible}</strong> / ${total} plante${total > 1 ? 's' : ''} affichée${visible > 1 ? 's' : ''}`;
  }

  // Recherche
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      query = e.target.value;
      filterCardsMulti();
    });
  }

  // Filtres - permettre plusieurs tags actifs
  const activeTags = new Set();

  // Init depuis URL
  if (activeTag) activeTags.add(activeTag);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      
      if (tag === '') {
        // Bouton "Toutes" = reset
        activeTags.clear();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        // Toggle le tag
        if (activeTags.has(tag)) {
          activeTags.delete(tag);
          btn.classList.remove('active');
        } else {
          activeTags.add(tag);
          btn.classList.add('active');
        }
        // Désactiver "Toutes"
        document.querySelector('.filter-btn[data-tag=""]')?.classList.remove('active');
      }
      
      // Si plus aucun tag, réactiver "Toutes"
      if (activeTags.size === 0) {
        document.querySelector('.filter-btn[data-tag=""]')?.classList.add('active');
      }
      
      filterCardsMulti();
    });
  });

  function filterCardsMulti() {
    let visible = 0;
    const q = query.trim().toLowerCase();

    cards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const tags = (card.dataset.tags || '').toLowerCase().split(',').map(t => slugify(t));

      const matchSearch = !q || name.includes(q);
      
      // Si aucun tag actif, tout passe
      const matchTag = activeTags.size === 0 || 
                       Array.from(activeTags).some(activeTag => tags.includes(activeTag));

      if (matchSearch && matchTag) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    // Message "aucun résultat"
    let noResult = document.querySelector('.no-results');
    if (visible === 0) {
      if (!noResult) {
        noResult = document.createElement('p');
        noResult.className = 'no-results';
        noResult.innerHTML = '<strong>Aucune plante trouvée</strong>Essayez un autre terme ou filtre.';
        document.querySelector('.plants-grid')?.appendChild(noResult);
      }
    } else {
      noResult?.remove();
    }

    updateCount(visible);
  }

  // Init count
  updateCount(cards.length);

})();
