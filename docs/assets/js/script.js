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
     2. REACCIÓN Y QUIEBRE DE JESSIE BUCKLEY
     ------------------------------------------------------------------------ */
  const REACTION_TABS = {
    anuncio: {
      quote:
        '«Y el Oscar a la Mejor Actriz es para... Jessie Buckley por Hamnet.»',
      note:
        'Killarney, Irlanda, celebra a su primera ganadora en la categoría principal femenina tras una ovación en el Dolby Theatre.',
    },
    discurso: {
      quote:
        '«Gracias por creer en una historia nacida en otro acento, pero contada frente al mundo.»',
      note:
        'El momento de mayor carga emotiva de la gala contrasta la narrativa oficial de diversidad con la estructura productiva detrás del filme.',
    },
    fisura: {
      quote:
        'La fisura: actriz irlandesa, historia ambientada en Inglaterra, lengua inglesa y respaldo estadounidense.',
      note:
        'Hamnet fue coproducida por Amblin Entertainment y distribuida por Focus Features (EE. UU.) junto a productoras británicas. Aquí comienza nuestra hipótesis.',
    },
  };

  const SWEEP_AWARDS = {
    globo: {
      title: 'Globo de Oro · Mejor Actriz en Drama (Enero 2026)',
      text: 'Primer gran eslabón de la temporada estadounidense: la prensa extranjera en Hollywood consolidó a Jessie Buckley como favorita indiscutida por su interpretación de Agnes Shakespeare.',
    },
    bafta: {
      title: 'BAFTA · Mejor Actriz Protagónica (Febrero 2026)',
      text: 'La Academia Británica validó el peso europeo de la coproducción Reino Unido–EE. UU., reforzando la campaña rumbo al Dolby Theatre.',
    },
    oscar: {
      title: 'Premio Oscar · Mejor Actriz (15 de marzo de 2026)',
      text: 'Al colocar la estatuilla junto al Globo de Oro y al BAFTA en la misma repisa, queda visible el circuito angloparlante que habilita el triunfo en Los Ángeles.',
    },
  };

  /* ------------------------------------------------------------------------
     3. CARRUSEL DE HISTORIAS: CÓMO LLEGAR A LOS OSCAR
     ------------------------------------------------------------------------ */
  const ACTOR_STORIES = [
    {
      kicker: 'Caso 01 ,
      title: ' Emil Jannings: El pionero',
      body: El actor suizo Emil Jannings, consagrado en el cine alemán, llegó a Hollywood en 1926 contratado por Paramount, sin trayectoria previa en EE. UU. En 1929, en la primera ceremonia de los Oscar, fue el primer ganador de Mejor actor, premiado por dos películas: The Last Command (1928) y The Way of All Flesh (1927). Ambas fueron producciones estadounidenses y, al ser cine mudo, su actuación no dependía del idioma. Su carrera en Hollywood terminó con la llegada del cine sonoro, cuando su fuerte acento alemán limitó sus papeles, y regresó a Europa.',

    },
    {
      kicker: 'Caso 02 · Décadas de 1930–1940 · Emigración',
      title: 'Greta Garbo e Ingrid Bergman (Suecia → Hollywood)',
      body: 'Aunque consagradas en Europa, sus nominaciones y premios en la Academia llegaron tras firmar con grandes estudios estadounidenses y actuar en inglés.',
      fact: '4 nominaciones para Garbo; 7 nominaciones y 3 premios para Bergman en cintas de EE. UU.',
    },
    {
      kicker: 'Caso 03 · Era moderna · Adaptación lingüística',
      title: 'Nicole Kidman y Charlize Theron (Australia / Sudáfrica)',
      body: 'Formadas fuera de Estados Unidos, alcanzaron las nominaciones a Mejor Actriz mediante entrenamiento de acento estadounidense y papeles protagónicos financiados por Hollywood.',
      fact: 'Ganadoras del Oscar con producciones estadounidenses (The Hours, Monster).',
    },
    {
      kicker: 'Caso 04 · Siglo XXI · Validación en EE. UU.',
      title: 'Penélope Cruz y Antonio Banderas (España → Circuito EE. UU.)',
      body: 'Figuras centrales del cine en español cuya presencia en las categorías actorales principales de la Academia se consolidó al alternar coproducciones europeas con estudios estadounidenses.',
      fact: 'El idioma inglés y los distribuidores de EE. UU. multiplican la visibilidad en campaña.',
    },
  ];

  /* ------------------------------------------------------------------------
     4. DATOS HISTÓRICOS PARA VISUALIZACIONES (1929–2026)
     ------------------------------------------------------------------------ */
  // vis_01: Porcentaje de nominaciones por década y tipo de debut
  const VIS01_DATA = {
    all: [
      { decade: '1930s', usDebut: 73, foreignUsDebut: 21, foreignHomeDebut: 6 },
      { decade: '1940s', usDebut: 71, foreignUsDebut: 22, foreignHomeDebut: 7 },
      { decade: '1950s', usDebut: 74, foreignUsDebut: 18, foreignHomeDebut: 8 },
      { decade: '1960s', usDebut: 61, foreignUsDebut: 22, foreignHomeDebut: 17 },
      { decade: '1970s', usDebut: 65, foreignUsDebut: 20, foreignHomeDebut: 15 },
      { decade: '1980s', usDebut: 63, foreignUsDebut: 21, foreignHomeDebut: 16 },
      { decade: '1990s', usDebut: 58, foreignUsDebut: 24, foreignHomeDebut: 18 },
      { decade: '2000s', usDebut: 52, foreignUsDebut: 27, foreignHomeDebut: 21 },
      { decade: '2010s', usDebut: 49, foreignUsDebut: 29, foreignHomeDebut: 22 },
      { decade: '2020–26', usDebut: 46, foreignUsDebut: 28, foreignHomeDebut: 26 },
    ],
    actor: [
      { decade: '1930s', usDebut: 70, foreignUsDebut: 23, foreignHomeDebut: 7 },
      { decade: '1940s', usDebut: 72, foreignUsDebut: 21, foreignHomeDebut: 7 },
      { decade: '1950s', usDebut: 75, foreignUsDebut: 18, foreignHomeDebut: 7 },
      { decade: '1960s', usDebut: 59, foreignUsDebut: 24, foreignHomeDebut: 17 },
      { decade: '1970s', usDebut: 67, foreignUsDebut: 19, foreignHomeDebut: 14 },
      { decade: '1980s', usDebut: 60, foreignUsDebut: 22, foreignHomeDebut: 18 },
      { decade: '1990s', usDebut: 56, foreignUsDebut: 25, foreignHomeDebut: 19 },
      { decade: '2000s', usDebut: 53, foreignUsDebut: 26, foreignHomeDebut: 21 },
      { decade: '2010s', usDebut: 48, foreignUsDebut: 29, foreignHomeDebut: 23 },
      { decade: '2020–26', usDebut: 50, foreignUsDebut: 27, foreignHomeDebut: 23 },
    ],
    actress: [
      { decade: '1930s', usDebut: 76, foreignUsDebut: 19, foreignHomeDebut: 5 },
      { decade: '1940s', usDebut: 70, foreignUsDebut: 23, foreignHomeDebut: 7 },
      { decade: '1950s', usDebut: 73, foreignUsDebut: 18, foreignHomeDebut: 9 },
      { decade: '1960s', usDebut: 63, foreignUsDebut: 20, foreignHomeDebut: 17 },
      { decade: '1970s', usDebut: 63, foreignUsDebut: 21, foreignHomeDebut: 16 },
      { decade: '1980s', usDebut: 66, foreignUsDebut: 20, foreignHomeDebut: 14 },
      { decade: '1990s', usDebut: 60, foreignUsDebut: 23, foreignHomeDebut: 17 },
      { decade: '2000s', usDebut: 51, foreignUsDebut: 28, foreignHomeDebut: 21 },
      { decade: '2010s', usDebut: 50, foreignUsDebut: 29, foreignHomeDebut: 21 },
      { decade: '2020–26', usDebut: 42, foreignUsDebut: 29, foreignHomeDebut: 29 },
    ],
  };

  // Visualización 3: Validación previa en festivales europeos para cine no anglófono
  const VIS03_DATA = [
    { label: 'Estreno o premio en Cannes', pct: 46, detail: '46% de las nominaciones no anglófonas' },
    { label: 'Paso por Venecia o Berlín', pct: 34, detail: '34% de las nominaciones no anglófonas' },
    { label: 'Sin paso previo por estos 3 festivales', pct: 20, detail: '20% restante (campañas directas)' },
  ];

  // Podio de 5 lugares (Top 5 países productores en Mejor Actor y Mejor Actriz)
  const PODIUM_DATA = {
    all: [
      { rank: 1, country: 'Estados Unidos', count: 782, unit: 'producciones', share: '79,8%' },
      { rank: 2, country: 'Reino Unido', count: 148, unit: 'producciones', share: '15,1%' },
      { rank: 3, country: 'Francia', count: 38, unit: 'producciones', share: '3,9%' },
      { rank: 4, country: 'Italia', count: 24, unit: 'producciones', share: '2,4%' },
      { rank: 5, country: 'Canadá', count: 18, unit: 'producciones', share: '1,8%' },
    ],
    recent: [
      { rank: 1, country: 'Estados Unidos', count: 236, unit: 'producciones', share: '76,1%' },
      { rank: 2, country: 'Reino Unido', count: 64, unit: 'producciones', share: '20,6%' },
      { rank: 3, country: 'Francia', count: 22, unit: 'producciones', share: '7,1%' },
      { rank: 4, country: 'Canadá', count: 12, unit: 'producciones', share: '3,9%' },
      { rank: 5, country: 'Alemania', count: 9, unit: 'producciones', share: '2,9%' },
    ],
  };

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
     10. GRÁFICO 1 (vis_01): BARRAS APILADAS POR DÉCADA (SVG)
     ------------------------------------------------------------------------ */
  function initVis01() {
    const container = document.getElementById('vis01-chart');
    const tooltip = document.getElementById('vis01-tooltip');
    const filterBtns = document.querySelectorAll('[data-vis1-filter]');
    if (!container) return;

    function render(filterKey) {
      const rows = VIS01_DATA[filterKey] || VIS01_DATA.all;
      const W = 880;
      const H = 340;
      const padL = 52;
      const padR = 24;
      const padT = 20;
      const padB = 48;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const step = plotW / rows.length;
      const barW = Math.min(44, step * 0.56);

      let svg =
        '<svg class="viz-svg" viewBox="0 0 ' +
        W +
        ' ' +
        H +
        '" role="img" aria-label="Gráfico vis_01 de origen y debut de nominados">';

      // Líneas guía horizontales (0%, 25%, 50%, 75%, 100%)
      [0, 25, 50, 75, 100].forEach((pct) => {
        const y = padT + plotH - (pct / 100) * plotH;
        svg +=
          '<line x1="' +
          padL +
          '" y1="' +
          y +
          '" x2="' +
          (W - padR) +
          '" y2="' +
          y +
          '" stroke="rgba(248,239,216,0.14)" stroke-dasharray="3 4"/>';
        svg +=
          '<text x="' +
          (padL - 10) +
          '" y="' +
          (y + 4) +
          '" fill="#F8EFD8" font-size="12" text-anchor="end" opacity="0.75">' +
          pct +
          '%</text>';
      });

      rows.forEach((d, i) => {
        const x = padL + i * step + (step - barW) / 2;
        const hUS = (d.usDebut / 100) * plotH;
        const hForUS = (d.foreignUsDebut / 100) * plotH;
        const hForHome = (d.foreignHomeDebut / 100) * plotH;

        const yUS = padT + plotH - hUS;
        const yForUS = yUS - hForUS;
        const yForHome = yForUS - hForHome;

        svg += '<g class="vis1-bar-group" data-idx="' + i + '" style="cursor:pointer">';
        svg +=
          '<rect x="' +
          x +
          '" y="' +
          yUS +
          '" width="' +
          barW +
          '" height="' +
          hUS +
          '" fill="#F8EFD8"/>';
        svg +=
          '<rect x="' +
          x +
          '" y="' +
          yForUS +
          '" width="' +
          barW +
          '" height="' +
          hForUS +
          '" fill="#C69D22"/>';
        svg +=
          '<rect x="' +
          x +
          '" y="' +
          yForHome +
          '" width="' +
          barW +
          '" height="' +
          hForHome +
          '" fill="#670010" stroke="rgba(248,239,216,0.35)" stroke-width="1"/>';
        svg +=
          '<text x="' +
          (x + barW / 2) +
          '" y="' +
          (H - 18) +
          '" fill="#F8EFD8" font-size="12.5" text-anchor="middle">' +
          escapeHtml(d.decade) +
          '</text>';
        svg += '</g>';
      });

      svg += '</svg>';
      container.innerHTML = svg;

      container.querySelectorAll('.vis1-bar-group').forEach((g) => {
        const idx = Number(g.getAttribute('data-idx'));
        const row = rows[idx];
        const showTip = () => {
          if (!tooltip) return;
          tooltip.hidden = false;
          tooltip.innerHTML =
            '<strong>' +
            escapeHtml(row.decade) +
            '</strong> · EE. UU. (debut local): <strong>' +
            row.usDebut +
            '%</strong> · Extranjero/a con debut en EE. UU.: <strong>' +
            row.foreignUsDebut +
            '%</strong> · Extranjero/a con debut en su país: <strong>' +
            row.foreignHomeDebut +
            '%</strong>';
        };
        g.addEventListener('mouseenter', showTip);
        g.addEventListener('click', showTip);
      });

      if (tooltip && rows.length) {
        const last = rows[rows.length - 1];
        tooltip.hidden = false;
        tooltip.innerHTML =
          'Década reciente (<strong>' +
          escapeHtml(last.decade) +
          '</strong>): ' +
          last.usDebut +
          '% EE. UU. (debut local) · ' +
          last.foreignUsDebut +
          '% extranjero/a con debut en EE. UU. · ' +
          last.foreignHomeDebut +
          '% extranjero/a con debut en su país.';
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const key = btn.getAttribute('data-vis1-filter');
        filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        render(key);
      });
    });

    render('all');
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
     13. GRÁFICO 2 (gráfico 2 gráfico): PRODUCTORAS Y RESPALDO DE EE. UU.
     ------------------------------------------------------------------------ */
  function initVis02() {
    const container = document.getElementById('vis02-chart');
    const legend = document.getElementById('vis02-legend');
    const tooltip = document.getElementById('vis02-tooltip');
    const modeBtns = document.querySelectorAll('[data-vis2-mode]');
    if (!container || !legend) return;

    function renderTimeline() {
      legend.innerHTML =
        '<span class="legend-item"><i class="swatch swatch--gold"></i> Productoras de Estados Unidos (%)</span>' +
        '<span class="legend-item"><i class="swatch swatch--cream"></i> Productoras del Reino Unido (%)</span>' +
        '<span class="legend-item"><i class="swatch swatch--cherry"></i> Otros países productores (%)</span>';

      const W = 880;
      const H = 330;
      const padL = 52;
      const padR = 24;
      const padT = 22;
      const padB = 46;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const step = plotW / (VIS02_TIMELINE.length - 1);

      let svg =
        '<svg class="viz-svg" viewBox="0 0 ' +
        W +
        ' ' +
        H +
        '" role="img" aria-label="Gráfico 2: origen de productoras por década">';

      [0, 25, 50, 75, 100].forEach((pct) => {
        const y = padT + plotH - (pct / 100) * plotH;
        svg +=
          '<line x1="' +
          padL +
          '" y1="' +
          y +
          '" x2="' +
          (W - padR) +
          '" y2="' +
          y +
          '" stroke="rgba(248,239,216,0.14)" stroke-dasharray="3 4"/>';
        svg +=
          '<text x="' +
          (padL - 10) +
          '" y="' +
          (y + 4) +
          '" fill="#F8EFD8" font-size="12" text-anchor="end" opacity="0.75">' +
          pct +
          '%</text>';
      });

      function buildPolyline(field, color) {
        const pts = VIS02_TIMELINE.map((d, i) => {
          const x = padL + i * step;
          const y = padT + plotH - (d[field] / 100) * plotH;
          return x.toFixed(1) + ',' + y.toFixed(1);
        }).join(' ');
        return (
          '<polyline fill="none" stroke="' +
          color +
          '" stroke-width="3" stroke-linejoin="round" points="' +
          pts +
          '"/>'
        );
      }

      svg += buildPolyline('usProd', '#C69D22');
      svg += buildPolyline('ukProd', '#F8EFD8');
      svg += buildPolyline('otherProd', '#9E1B2F');

      VIS02_TIMELINE.forEach((d, i) => {
        const x = padL + i * step;
        const yUS = padT + plotH - (d.usProd / 100) * plotH;
        const yUK = padT + plotH - (d.ukProd / 100) * plotH;
        const yOther = padT + plotH - (d.otherProd / 100) * plotH;

        svg += '<g class="vis2-pt-group" data-idx="' + i + '" style="cursor:pointer">';
        svg += '<circle cx="' + x + '" cy="' + yUS + '" r="5" fill="#C69D22"/>';
        svg += '<circle cx="' + x + '" cy="' + yUK + '" r="4.5" fill="#F8EFD8"/>';
        svg += '<circle cx="' + x + '" cy="' + yOther + '" r="4.5" fill="#9E1B2F" stroke="#F8EFD8" stroke-width="1"/>';
        svg +=
          '<text x="' +
          x +
          '" y="' +
          (H - 16) +
          '" fill="#F8EFD8" font-size="12" text-anchor="middle">' +
          escapeHtml(d.decade) +
          '</text>';
        svg += '</g>';
      });

      svg += '</svg>';
      container.innerHTML = svg;

      container.querySelectorAll('.vis2-pt-group').forEach((g) => {
        const idx = Number(g.getAttribute('data-idx'));
        const row = VIS02_TIMELINE[idx];
        const show = () => {
          if (!tooltip) return;
          tooltip.hidden = false;
          tooltip.innerHTML =
            '<strong>' +
            escapeHtml(row.decade) +
            '</strong> · EE. UU.: <strong>' +
            row.usProd +
            '%</strong> · Reino Unido: <strong>' +
            row.ukProd +
            '%</strong> · Otros países: <strong>' +
            row.otherProd +
            '%</strong>';
        };
        g.addEventListener('mouseenter', show);
        g.addEventListener('click', show);
      });

      if (tooltip) {
        const last = VIS02_TIMELINE[VIS02_TIMELINE.length - 1];
        tooltip.hidden = false;
        tooltip.innerHTML =
          'Década <strong>' +
          escapeHtml(last.decade) +
          '</strong>: las productoras estadounidenses aún concentran el <strong>' +
          last.usProd +
          '%</strong> de las nominaciones actorales (frente a ' +
          last.ukProd +
          '% de Reino Unido y ' +
          last.otherProd +
          '% del resto del mundo).';
      }
    }

    function renderForeignBacking() {
      legend.innerHTML =
        '<span class="legend-item"><i class="swatch swatch--gold"></i> Nominados extranjeros en películas con productora estadounidense (%)</span>' +
        '<span class="legend-item"><i class="swatch swatch--cherry"></i> Nominados extranjeros sin respaldo estadounidense (%)</span>';

      const W = 880;
      const H = 330;
      const padL = 52;
      const padR = 24;
      const padT = 22;
      const padB = 46;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const step = plotW / VIS02_FOREIGN_BACKING.length;
      const barW = 46;

      let svg =
        '<svg class="viz-svg" viewBox="0 0 ' +
        W +
        ' ' +
        H +
        '" role="img" aria-label="Nominados extranjeros según respaldo de productora estadounidense">';

      [0, 25, 50, 75, 100].forEach((pct) => {
        const y = padT + plotH - (pct / 100) * plotH;
        svg +=
          '<line x1="' +
          padL +
          '" y1="' +
          y +
          '" x2="' +
          (W - padR) +
          '" y2="' +
          y +
          '" stroke="rgba(248,239,216,0.14)" stroke-dasharray="3 4"/>';
        svg +=
          '<text x="' +
          (padL - 10) +
          '" y="' +
          (y + 4) +
          '" fill="#F8EFD8" font-size="12" text-anchor="end" opacity="0.75">' +
          pct +
          '%</text>';
      });

      VIS02_FOREIGN_BACKING.forEach((d, i) => {
        const centerX = padL + i * step + step / 2;
        const hWith = (d.withUS / 100) * plotH;
        const hWithout = (d.withoutUS / 100) * plotH;
        const yWith = padT + plotH - hWith;
        const yWithout = padT + plotH - hWithout;

        svg += '<g class="vis2-bar-group" data-idx="' + i + '" style="cursor:pointer">';
        svg +=
          '<rect x="' +
          (centerX - barW - 4) +
          '" y="' +
          yWith +
          '" width="' +
          barW +
          '" height="' +
          hWith +
          '" fill="#C69D22"/>';
        svg +=
          '<text x="' +
          (centerX - barW / 2 - 4) +
          '" y="' +
          (yWith - 8) +
          '" fill="#C69D22" font-size="12" text-anchor="middle">' +
          d.withUS +
          '%</text>';

        svg +=
          '<rect x="' +
          (centerX + 4) +
          '" y="' +
          yWithout +
          '" width="' +
          barW +
          '" height="' +
          hWithout +
          '" fill="#670010" stroke="rgba(248,239,216,0.45)" stroke-width="1"/>';
        svg +=
          '<text x="' +
          (centerX + barW / 2 + 4) +
          '" y="' +
          (yWithout - 8) +
          '" fill="#F8EFD8" font-size="12" text-anchor="middle">' +
          d.withoutUS +
          '%</text>';

        svg +=
          '<text x="' +
          centerX +
          '" y="' +
          (H - 16) +
          '" fill="#F8EFD8" font-size="12.5" text-anchor="middle">' +
          escapeHtml(d.decade) +
          '</text>';
        svg += '</g>';
      });

      svg += '</svg>';
      container.innerHTML = svg;

      if (tooltip) {
        tooltip.hidden = false;
        tooltip.innerHTML =
          'En promedio, cerca de <strong>7 de cada 10</strong> actores y actrices extranjeros nominados lo logran en películas financiadas o coproducidas por Estados Unidos.';
      }
    }

    modeBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const mode = btn.getAttribute('data-vis2-mode');
        modeBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (mode === 'foreign') {
          renderForeignBacking();
        } else {
          renderTimeline();
        }
      });
    });

    renderTimeline();
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