/* ==========================================================================
   Oscar sin fronteras — Lógica interactiva y visualizaciones (Vanilla JS)
   Sin dependencias externas, sin React, sin servidor ni claves de API.
   Compatible con apertura directa (file://), Vite dev y GitHub Pages.
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
     2. GALARDONES DE TEMPORADA 2026 DE JESSIE BUCKLEY
     ------------------------------------------------------------------------ */
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
     3. CARRUSEL DE 5 HISTORIAS: LOS CAMINOS A LOS OSCAR
     ------------------------------------------------------------------------ */
  const ACTOR_STORIES = [
    {
      kicker: 'Caso 01 · Suiza → Hollywood (1929)',
      title: '1. El actor suizo Emil Jannings',
      body: 'Consagrado en el cine alemán, llegó a Hollywood en 1926 contratado por Paramount sin trayectoria previa en EE. UU. En 1929 ganó el primer Oscar a Mejor Actor por dos cintas mudas estadounidenses: The Last Command y The Way of All Flesh. Al llegar el cine sonoro, su fuerte acento alemán limitó sus papeles y regresó a Europa.',
      fact: 'Primer ganador de Mejor Actor (1929) en cine mudo estadounidense.',
    },
    {
      kicker: 'Caso 02 · Canadá → Hollywood (1930)',
      title: '2. La actriz canadiense Mary Pickford',
      body: 'Nacida en Toronto, trabajaba en el cine estadounidense desde 1909 y cofundó United Artists y la propia Academia. En 1930 se convirtió en la primera extranjera en ganar Mejor Actriz por Coquette (1929), su primer filme sonoro y producción de EE. UU. Al ser anglófona, el idioma nunca fue una barrera.',
      fact: 'Única nominación y triunfo en 1930 con producción estadounidense en inglés.',
    },
    {
      kicker: 'Caso 03 · India británica → Hollywood (1936)',
      title: '3. El caso de Merle Oberon',
      body: 'Nacida en Bombay con ascendencia anglo-india, ocultó su origen y construyó una biografía falsa afirmando haber nacido en Tasmania como actriz blanca para esquivar prejuicios raciales. En 1936 fue nominada a Mejor Actriz por The Dark Angel (EE. UU.). Suele citarse con cautela como la primera nominada de origen asiático.',
      fact: 'Nominada en 1936 por The Dark Angel tras ocultar su identidad.',
    },
    {
      kicker: 'Caso 04 · Cuba → España → Hollywood (2023)',
      title: '4. La vía estadounidense: Ana de Armas',
      body: 'Nacida en La Habana, se mudó a España a los 18 años y saltó a la fama en El internado. Hacia 2014 emigró a Los Ángeles tras estudiar inglés, debutando con Knock Knock (2015). En 2023 logró su primera nominación al Oscar a Mejor Actriz por Blonde (2022), producción estadounidense de Netflix en inglés.',
      fact: 'Nominada en 2023 por Blonde (EE. UU.); no obtuvo la estatuilla.',
    },
    {
      kicker: 'Caso 05 · España → Hollywood → España (2020)',
      title: '5. La excepción: Antonio Banderas',
      body: 'Tras consolidarse en España con Pedro Almodóvar, dio el salto a Hollywood en los años 90 (Philadelphia, La máscara del Zorro) aprendiendo inglés para trabajar en la industria. Sin embargo, su única nominación al Oscar a Mejor Actor llegó en 2020 por Dolor y gloria (2019), producción española filmada en español.',
      fact: 'Nominado en 2020 en idioma español por Dolor y gloria; no ganó.',
    },
  ];

  /* ------------------------------------------------------------------------
     4. DATOS PARA VISUALIZACIÓN 3 Y GRÁFICO 2
     (Nota: El Podio Top 5 ahora es 100% editable directamente en el HTML)
     ------------------------------------------------------------------------ */
  const VIS03_DATA = [
    { label: 'Estreno o premio en Cannes', pct: 46 },
    { label: 'Paso por Venecia o Berlín', pct: 34 },
    { label: 'Sin paso previo por estos 3 festivales', pct: 20 },
  ];

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
    const header = document.querySelector('.site-header');
    const carpetSection = document.getElementById('nominados-2026');
    if (!track || !stage) return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      stage.style.setProperty('--curtain-progress', '1');
      if (header) header.classList.add('is-visible');
      return;
    }

    let rafId = null;

    function updateCurtainProgress() {
      rafId = null;
      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(1, track.offsetHeight - stage.offsetHeight);
      const traveled = Math.max(0, -rect.top);
      const progress = Math.min(1, traveled / scrollable);
      stage.style.setProperty('--curtain-progress', progress.toFixed(4));

      if (header) {
        const shouldShow = traveled > 10 && (progress >= 0.42 || rect.bottom <= window.innerHeight);
        header.classList.toggle('is-visible', shouldShow);
        if (carpetSection) {
          const pastCarpet = carpetSection.getBoundingClientRect().bottom <= header.offsetHeight + 48;
          header.classList.toggle('is-past-carpet', pastCarpet);
        }
      }
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
     8. TABS DE GALARDONES DE JESSIE BUCKLEY
     ------------------------------------------------------------------------ */
  function initAwardsTabs() {
    const sweepBox = document.getElementById('sweep-detail');
    const awardBtns = document.querySelectorAll('[data-award]');
    if (!sweepBox || !awardBtns.length) return;

    function showAward(key) {
      const data = SWEEP_AWARDS[key];
      if (!data) return;
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
     9. CARRUSEL DE 5 HISTORIAS (LOS CAMINOS A LOS OSCAR)
     ------------------------------------------------------------------------ */
  function initCarousel() {
    const track = document.getElementById('actors-carousel-track');
    const counter = document.getElementById('carousel-counter');
    const dotsWrap = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    if (!track || !prevBtn || !nextBtn) return;

    let index = 0;

    function renderDots(total) {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total; i += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === index ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Ir al caso ' + (i + 1) + ' de ' + total);
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
        dot.addEventListener('click', function () {
          index = i;
          render();
        });
        dotsWrap.appendChild(dot);
      }
    }

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

        if (slot !== 1) {
          card.addEventListener('click', function () {
            index = storyIdx;
            render();
          });
        }

        track.appendChild(card);
      });

      if (counter) {
        counter.textContent = index + 1 + ' / ' + total;
      }

      renderDots(total);
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
     10. VISUALIZACIÓN 3: FESTIVALES INTERNACIONALES
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
     11. GRÁFICO 2: PRODUCTORAS Y RESPALDO DE EE. UU.
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
    renderNominees2026();
    initAwardsTabs();
    initCarousel();
    initVis03();
    initVis02();
  });
})();
