/* ==========================================================================
   Oscar sin fronteras — Lógica interactiva y visualizaciones (Vanilla JS)
   Sin dependencias externas, sin React, sin servidor ni claves de API.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. DATOS DE NOMINADOS 2026 (98.ª EDICIÓN DE LOS PREMIOS OSCAR)
     ------------------------------------------------------------------------ */
  const NOMINEES_2026 = {
    actor: [
      {
        name: 'Michael B. Jordan',
        film: 'Sinners',
        nationality: 'Estadounidense',
        winner: true,
      },
      {
        name: 'Timothée Chalamet',
        film: 'Marty Supreme',
        nationality: 'Estadounidense / Francés',
        winner: false,
      },
      {
        name: 'Leonardo DiCaprio',
        film: 'One Battle After Another',
        nationality: 'Estadounidense',
        winner: false,
      },
      {
        name: 'Ethan Hawke',
        film: 'Blue Moon',
        nationality: 'Estadounidense',
        winner: false,
      },
      {
        name: 'Wagner Moura',
        film: 'The Secret Agent',
        nationality: 'Brasileño',
        winner: false,
      },
    ],
    actress: [
      {
        name: 'Jessie Buckley',
        film: 'Hamnet',
        nationality: 'Irlandesa',
        winner: true,
      },
      {
        name: 'Rose Byrne',
        film: "If I Had Legs I'd Kick You",
        nationality: 'Australiana',
        winner: false,
      },
      {
        name: 'Kate Hudson',
        film: 'Song Sung Blue',
        nationality: 'Estadounidense',
        winner: false,
      },
      {
        name: 'Renate Reinsve',
        film: 'Sentimental Value',
        nationality: 'Noruega',
        winner: false,
      },
      {
        name: 'Emma Stone',
        film: 'Bugonia',
        nationality: 'Estadounidense',
        winner: false,
      },
    ],
  };

  /* ------------------------------------------------------------------------
     3. CARRUSEL DE HISTORIAS: CÓMO LLEGAR A LOS OSCAR
     ------------------------------------------------------------------------ */
  const ACTOR_STORIES = [
  {
    kicker: 'Caso 01 · Años 20 · Primer Oscar',
    title: 'Emil Jannings (Suiza/Alemania → Hollywood)',
    body: 'Los premios comenzaron abriendo sus puertas a extranjeros que ya trabajaban dentro del sistema de estudios. El actor suizo Emil Jannings, consagrado en el cine alemán, llegó a Hollywood en 1926 sin trayectoria previa en EE. UU. En 1929, en la primera ceremonia, ganó el Oscar a Mejor actor por dos películas mudas de producción estadounidense: The Last Command y The Way of All Flesh. Al ser cine mudo, el idioma no fue una barrera.',
  },
  {
    kicker: 'Caso 02 · Años 20–30 · Estrella consolidada',
    title: 'Mary Pickford (Canadá → Hollywood)',
    body: 'La actriz canadiense Mary Pickford ya era una de las mayores estrellas del cine estadounidense, donde trabajaba desde 1909. En 1930 ganó el Oscar a Mejor actriz por Coquette, su primer filme sonoro y una producción de EE. UU. Fue la primera ganadora de la categoría nacida en el extranjero y actuó en inglés, su lengua materna.',
  },
  {
    kicker: 'Caso 03 · Años 30 · Identidad oculta',
    title: 'Merle Oberon (Bombay → Tasmania)',
    body: 'A pesar de que ambos ganaron el Oscar en las primeras ediciones, el camino para llegar a los premios no siempre fue fácil. Muchas veces era necesario participar de producciones estadounidenses para “asegurar” el éxito. Como el caso de Merle Oberon, en 1936, se volvió la primera mujer asiática en ser nominada a Mejor actriz por The Dark Angel. Sin embargo, para actuar, Oberon decidió ocultar su nacionalidad y hacerse pasar por una actriz blanca.',
  },
  {
    kicker: 'Caso 04 · Siglo XXI · Aprender inglés para entrar',
    title: 'Ana de Armas (Cuba → España → Hollywood)',
    body: 'Las películas estadounidenses suelen ser el camino más viable para los extranjeros. Ana de Armas, nacida en Cuba, se hizo conocida en España y hacia 2014 se instaló en Los Ángeles tras estudiar inglés. En 2023 fue nominada a Mejor actriz por Blonde, producción estadounidense. Ese año ganó Michelle Yeoh, actriz malasia, también por una película de EE. UU.',
  },
  {
    kicker: 'Caso 05 · Siglo XXI · Un camino diferente',
    title: 'Antonio Banderas (España → Hollywood → España)',
    body: 'Antonio Banderas ya era conocido en España por las películas de Almodóvar cuando dio el salto a Hollywood en los años 90, donde se consolidó trabajando en inglés. Sin embargo, su primera y única nominación al Oscar llegó en 2020, a Mejor actor, por Dolor y gloria, una producción española filmada en español.',
  },
];

  // Gráfico 2: Origen de las productoras por década y respaldo de EE. UU. a extranjeros
  const VIS02_TIMELINE = [
    { decade: '1930s', usProd: 89, ukProd: 9, otherProd: 2 },
    { decade: '1940s', usProd: 88, ukProd: 10, otherProd: 2 },
    { decade: '1950s', usProd: 84, ukProd: 12, otherProd: 4 },
    { decade: '1960s', usProd: 75, ukProd: 17, otherProd: 8 },
    { decade: '1970s', usProd: 81, ukProd: 13, otherProd: 6 },
    { decade: '1980s', usProd: 79, ukProd: 14, otherProd: 7 },
    { decade: '1990s', usProd: 77, ukProd: 16, otherProd: 7 },
    { decade: '2000s', usProd: 75, ukProd: 17, otherProd: 8 },
    { decade: '2010s', usProd: 74, ukProd: 18, otherProd: 8 },
    { decade: '2020–26', usProd: 71, ukProd: 17, otherProd: 12 },
  ];

  const VIS02_FOREIGN_BACKING = [
    { decade: '1980s', withUS: 72, withoutUS: 28 },
    { decade: '1990s', withUS: 74, withoutUS: 26 },
    { decade: '2000s', withUS: 71, withoutUS: 29 },
    { decade: '2010s', withUS: 76, withoutUS: 24 },
    { decade: '2020–26', withUS: 68, withoutUS: 32 },
  ];

  /* ------------------------------------------------------------------------
     5. INICIALIZACIÓN DEL TELÓN CONTROLADO POR SCROLL
     ------------------------------------------------------------------------ */
  function initCurtains() {
    const track = document.getElementById('telon');
    const stage = document.getElementById('curtain-stage');
    if (!track || !stage) return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      stage.style.setProperty('--curtain-progress', '1');
      return;
    }

    let rafId = null;

    function updateCurtainProgress() {
      rafId = null;
      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(1, track.offsetHeight - window.innerHeight);
      const traveled = Math.max(0, -rect.top);
      const progress = Math.min(1, traveled / scrollable);
      stage.style.setProperty('--curtain-progress', progress.toFixed(4));
    }

    function onScroll() {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateCurtainProgress);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateCurtainProgress();
  }

  /* ------------------------------------------------------------------------
     6. BARRA DE BÚSQUEDA Y MENÚ SUPERIOR
     ------------------------------------------------------------------------ */
  function initHeaderDrawers() {
    const searchBtn = document.getElementById('search-toggle-btn');
    const searchPanel = document.getElementById('search-panel');
    const searchClose = document.getElementById('search-close-btn');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const menuBtn = document.getElementById('menu-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (!searchBtn || !searchPanel || !menuBtn || !mobileDrawer) return;

    const searchableItems = [
      ...NOMINEES_2026.actor.map((n) => ({
        label: n.name + ' (' + n.film + ') — ' + n.nationality,
        tag: 'Mejor Actor 2026',
        href: '#nominados-2026',
      })),
      ...NOMINEES_2026.actress.map((n) => ({
        label: n.name + ' (' + n.film + ') — ' + n.nationality,
        tag: 'Mejor Actriz 2026',
        href: '#nominados-2026',
      })),
      { label: 'Gráfico 1 (vis_01) — Origen y debut de nominados', tag: 'Gráfico 1', href: '#grafico-1' },
      { label: 'Festivales internacionales — Cannes, Venecia y Berlín', tag: 'Capítulo 3', href: '#festivales' },
      { label: 'Podio de 5 lugares — Países productores', tag: 'Podio', href: '#podio' },
      { label: 'Gráfico 2 (gráfico 2 gráfico) — Productoras detrás de los Oscar', tag: 'Gráfico 2', href: '#grafico-2' },
    ];

    function renderSearch(query) {
      const q = (query || '').trim().toLowerCase();
      const matches = q
        ? searchableItems.filter(
            (item) =>
              item.label.toLowerCase().includes(q) ||
              item.tag.toLowerCase().includes(q)
          )
        : searchableItems.slice(0, 5);

      searchResults.innerHTML = '';
      if (matches.length === 0) {
        const li = document.createElement('li');
        li.className = 'search-result-link';
        li.textContent = 'No se encontraron coincidencias para «' + query + '».';
        searchResults.appendChild(li);
        return;
      }

      matches.slice(0, 6).forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'search-result-link';
        a.href = item.href;
        a.innerHTML =
          '<span>' +
          escapeHtml(item.label) +
          '</span><span class="search-result-tag">' +
          escapeHtml(item.tag) +
          '</span>';
        a.addEventListener('click', function () {
          searchPanel.hidden = true;
          searchBtn.setAttribute('aria-expanded', 'false');
        });
        li.appendChild(a);
        searchResults.appendChild(li);
      });
    }

    searchBtn.addEventListener('click', function () {
      const willOpen = searchPanel.hidden;
      searchPanel.hidden = !willOpen;
      mobileDrawer.hidden = true;
      searchBtn.setAttribute('aria-expanded', String(willOpen));
      menuBtn.setAttribute('aria-expanded', 'false');
      if (willOpen) {
        renderSearch('');
        searchInput.focus();
      }
    });

    if (searchClose) {
      searchClose.addEventListener('click', function () {
        searchPanel.hidden = true;
        searchBtn.setAttribute('aria-expanded', 'false');
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        renderSearch(searchInput.value);
      });
    }

    menuBtn.addEventListener('click', function () {
      const willOpen = mobileDrawer.hidden;
      mobileDrawer.hidden = !willOpen;
      searchPanel.hidden = true;
      menuBtn.setAttribute('aria-expanded', String(willOpen));
      searchBtn.setAttribute('aria-expanded', 'false');
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        mobileDrawer.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. RENDERIZADO DE NOMINADOS 2026
     ------------------------------------------------------------------------ */
  function renderNominees2026() {
    function buildList(containerId, list) {
      const el = document.getElementById(containerId);
      if (!el) return;
      el.innerHTML = '';

      list.forEach((nom) => {
        const li = document.createElement('li');
        li.className = 'nominee-item' + (nom.winner ? ' is-winner' : '');
        li.innerHTML =
          '<div class="nominee-name-row">' +
          '<span class="nominee-name">' +
          escapeHtml(nom.name) +
          '</span>' +
          '<span class="nominee-film">' +
          escapeHtml(nom.film) +
          '</span>' +
          (nom.winner ? '<span class="nominee-winner-mark">· Ganador/a</span>' : '') +
          '</div>' +
          '<span class="nominee-nationality">' +
          escapeHtml(nom.nationality) +
          '</span>';
        el.appendChild(li);
      });
    }

    buildList('list-best-actor', NOMINEES_2026.actor);
    buildList('list-best-actress', NOMINEES_2026.actress);
  }

  /* ------------------------------------------------------------------------
     8. TABS DE REACCIÓN Y GALARDONES DE JESSIE BUCKLEY
     ------------------------------------------------------------------------ */
  function initReactionAndAwardsTabs() {
    const reactionBox = document.getElementById('reaction-viewport');
    const reactionBtns = document.querySelectorAll('[data-reaction]');

    function showReaction(key) {
      const data = REACTION_TABS[key];
      if (!data || !reactionBox) return;
      reactionBox.innerHTML =
        '<p class="reaction-quote">' +
        escapeHtml(data.quote) +
        '</p><p class="reaction-note">' +
        escapeHtml(data.note) +
        '</p>';
      reactionBtns.forEach((b) => {
        const active = b.getAttribute('data-reaction') === key;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
    }

    reactionBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        showReaction(btn.getAttribute('data-reaction'));
      });
    });
    showReaction('anuncio');

    const sweepBox = document.getElementById('sweep-detail');
    const awardBtns = document.querySelectorAll('[data-award]');

    function showAward(key) {
      const data = SWEEP_AWARDS[key];
      if (!data || !sweepBox) return;
      sweepBox.innerHTML =
        '<p><strong>' +
        escapeHtml(data.title) +
        '</strong></p><p>' +
        escapeHtml(data.text) +
        '</p>';
      awardBtns.forEach((b) => {
        const active = b.getAttribute('data-award') === key;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
    }

    awardBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        showAward(btn.getAttribute('data-award'));
      });
    });
    showAward('globo');
  }

  /* ------------------------------------------------------------------------
     9. CARRUSEL DE HISTORIAS
     ------------------------------------------------------------------------ */
  function initCarousel() {
    const track = document.getElementById('actors-carousel-track');
    const counter = document.getElementById('carousel-counter');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    if (!track || !prevBtn || !nextBtn) return;

    let index = 0;

    function render() {
      const total = ACTOR_STORIES.length;
      const indices = [
        (index - 1 + total) % total,
        index,
        (index + 1) % total,
      ];

      track.innerHTML = '';
      indices.forEach((storyIdx, slot) => {
        const story = ACTOR_STORIES[storyIdx];
        const card = document.createElement('article');
        card.className = 'story-card' + (slot === 1 ? ' is-focal' : '');
        card.innerHTML =
          '<span class="story-card-kicker">' +
          escapeHtml(story.kicker) +
          '</span>' +
          '<h3 class="story-card-title">' +
          escapeHtml(story.title) +
          '</h3>' +
          '<p class="story-card-body">' +
          escapeHtml(story.body) +
          '</p>' +
          '<div class="story-card-fact">' +
          escapeHtml(story.fact) +
          '</div>';
        track.appendChild(card);
      });

      if (counter) {
        counter.textContent = index + 1 + ' / ' + total;
      }
    }

    prevBtn.addEventListener('click', function () {
      index = (index - 1 + ACTOR_STORIES.length) % ACTOR_STORIES.length;
      render();
    });

    nextBtn.addEventListener('click', function () {
      index = (index + 1) % ACTOR_STORIES.length;
      render();
    });

    render();
  }

  /* ------------------------------------------------------------------------
     11. VISUALIZACIÓN 3: FESTIVALES INTERNACIONALES
     ------------------------------------------------------------------------ */
  function initVis03() {
    const container = document.getElementById('vis03-chart');
    if (!container) return;
    container.innerHTML = '';

    VIS03_DATA.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'fest-bar-row';
      row.innerHTML =
        '<span class="fest-bar-label">' +
        escapeHtml(item.label) +
        '</span>' +
        '<div class="fest-bar-track"><div class="fest-bar-fill" style="width:' +
        item.pct +
        '%"></div></div>' +
        '<span class="fest-bar-value">' +
        item.pct +
        '%</span>';
      container.appendChild(row);
    });
  }

  /* ------------------------------------------------------------------------
     12. PODIO DE 5 LUGARES (ARRIBA DEL GRÁFICO 2)
     ------------------------------------------------------------------------ */
  function initPodium() {
    const stage = document.getElementById('podium-stage');
    const periodBtns = document.querySelectorAll('[data-podium-period]');
    if (!stage) return;

    // Disposición visual clásica de podio en escritorio: 4.° | 2.° | 1.° | 3.° | 5.°
    const visualOrderByRank = {
      4: 1,
      2: 2,
      1: 3,
      3: 4,
      5: 5,
    };

    const pedestalHeights = {
      1: 230,
      2: 180,
      3: 145,
      4: 115,
      5: 90,
    };

    function render(periodKey) {
      const items = PODIUM_DATA[periodKey] || PODIUM_DATA.all;
      stage.innerHTML = '';

      items.forEach((item) => {
        const col = document.createElement('div');
        col.className = 'podium-column is-rank-' + item.rank;
        col.style.order = String(visualOrderByRank[item.rank] || item.rank);

        col.innerHTML =
          '<div class="podium-country-meta">' +
          '<span class="podium-country-name">' +
          escapeHtml(item.country) +
          '</span>' +
          '<span class="podium-country-count">' +
          item.count +
          ' ' +
          escapeHtml(item.unit) +
          '</span>' +
          '<span class="podium-country-share">' +
          escapeHtml(item.share) +
          ' de nominaciones</span>' +
          '</div>' +
          '<div class="podium-pedestal" style="height:' +
          pedestalHeights[item.rank] +
          'px">' +
          '<span class="podium-rank">' +
          item.rank +
          '.°</span>' +
          '</div>';

        stage.appendChild(col);
      });
    }

    periodBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const key = btn.getAttribute('data-podium-period');
        periodBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        render(key);
      });
    });

    render('all');
  }

  /* ------------------------------------------------------------------------
     UTILIDADES
     ------------------------------------------------------------------------ */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ------------------------------------------------------------------------
     ARRANQUE
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initCurtains();
    initHeaderDrawers();
    renderNominees2026();
    initReactionAndAwardsTabs();
    initCarousel();
    initVis01();
    initVis03();
    initPodium();
    initVis02();
  });
})();