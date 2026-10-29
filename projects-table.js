/*
  projects-table.js
  ------------------------------------------------------------------
  Renders the portfolio table from settings.js
  (window.CALCULATOR_SETTINGS.projects), so every page shows exactly
  the same rows and prices from a single source of truth.

  How it works:
  1. Reads the project list from settings.js (or from options.projects).
  2. Optionally filters the rows (see ProjectsTable.isPaid).
  3. Builds a plain HTML table with escaped text and safe links only
     (http/https/mailto), opened in a new tab with rel="noopener noreferrer".
  4. Injects its own stylesheet once per page, so the table looks the same
     on every page.

  Usage:
      <div id="someTable"></div>
      <script src="settings.js"></script>
      <script src="projects-table.js"></script>
      <script>
        ProjectsTable.render("someTable", {
          // Column headers (defaults are English).
          labels: {
            name: "Name", price: "Price", description: "Description",
            service: "Service", github: "Github", video: "Video"
          },
          // Link captions inside the cells.
          linkLabels: { open: "Open", code: "Code", video: "Video" },
          // Optional row filter, e.g. paid products only.
          filter: ProjectsTable.isPaid,
          // Optional project list, defaults to CALCULATOR_SETTINGS.projects.
          projects: window.CALCULATOR_SETTINGS.projects,
          // Optional per-project description override (i18n support).
          describe: function (project) { return project.description; },
          onRender: function (info) {}   // info.rows — number of rendered rows
        });
      </script>
*/

(function (global) {
  'use strict';

  var STYLES = `
    .projects-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--line, rgba(226, 232, 240, 0.12));
      border-radius: var(--radius, 8px);
      background: var(--surface-strong, #131d2a);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    .projects-table {
      width: 100%;
      min-width: 760px;
      border-collapse: collapse;
      text-align: left;
    }
    .projects-table th {
      background: #0d1520;
      color: #fff;
      font-size: 12.5px;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      padding: 12px 14px;
      white-space: nowrap;
      vertical-align: top;
    }
    .projects-table td {
      border-top: 1px solid var(--line, rgba(226, 232, 240, 0.12));
      padding: 11px 14px;
      font-size: 13.5px;
      line-height: 1.5;
      color: var(--ink, #f7fafc);
      vertical-align: top;
    }
    .projects-table tbody tr:hover { background: rgba(91, 140, 255, 0.07); }
    .projects-table tbody td:first-child {
      color: var(--ink, #f7fafc);
      font-weight: 750;
      white-space: nowrap;
    }
    .projects-table .projects-price {
      color: var(--green, #45d483);
      font-weight: 900;
      white-space: nowrap;
    }
    .projects-table td a {
      color: var(--blue, #5b8cff);
      font-weight: 700;
      text-decoration: none;
      word-break: break-all;
    }
    .projects-table td a:hover { text-decoration: underline; }
  `;

  var DEFAULT_LABELS = {
    name: 'Name',
    price: 'Price',
    description: 'Description',
    service: 'Service',
    github: 'Github',
    video: 'Video'
  };

  var DEFAULT_LINK_LABELS = {
    open: 'Open',
    code: 'Code',
    video: 'Video'
  };

  // ── Small helpers ──────────────────────────────────────────────

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function safeUrl(url) {
    var value = String(url || '').trim();
    if (!value) return '';
    if (/^(https?:\/\/|mailto:)/i.test(value)) return value;
    if (/^\/\//.test(value)) return 'https:' + value;
    return '';
  }

  function assign(target, source) {
    var key;
    if (source) {
      for (key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key]) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }

  function injectStyles() {
    if (document.getElementById('projects-table-css')) return;
    var style = document.createElement('style');
    style.id = 'projects-table-css';
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  // ── Row helpers ────────────────────────────────────────────────

  function linkCell(url, label) {
    var href = safeUrl(url);
    if (!href) return '<td>&mdash;</td>';
    return '<td><a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(label) + '</a></td>';
  }

  // A product counts as paid when its price contains a currency sign.
  function isPaid(project) {
    return /[$€]/.test(String(project && project.price ? project.price : ''));
  }

  // ── Public API ─────────────────────────────────────────────────

  function render(target, options) {
    var container = typeof target === 'string' ? document.getElementById(target) : target;
    if (!container) return null;

    options = options || {};
    injectStyles();

    var settings = global.CALCULATOR_SETTINGS || {};
    var projects = Array.isArray(options.projects)
      ? options.projects.slice()
      : (Array.isArray(settings.projects) ? settings.projects.slice() : []);

    if (typeof options.filter === 'function') {
      projects = projects.filter(options.filter);
    }

    var labels = assign({}, DEFAULT_LABELS);
    assign(labels, options.labels);

    var linkLabels = assign({}, DEFAULT_LINK_LABELS);
    assign(linkLabels, options.linkLabels);

    var head = '<tr>' + [
      labels.name,
      labels.price,
      labels.description,
      labels.service,
      labels.github,
      labels.video
    ].map(function (label) {
      return '<th>' + escapeHtml(label) + '</th>';
    }).join('') + '</tr>';

    var body = projects.map(function (project) {
      var description = typeof options.describe === 'function'
        ? options.describe(project)
        : (project.description || '');

      return '<tr>' +
        '<td>' + escapeHtml(project.name || '') + '</td>' +
        '<td class="projects-price">' + escapeHtml(project.price || '') + '</td>' +
        '<td>' + escapeHtml(description || '') + '</td>' +
        linkCell(project.service, linkLabels.open) +
        linkCell(project.github, linkLabels.code) +
        linkCell(project.video, linkLabels.video) +
        '</tr>';
    }).join('');

    container.innerHTML = '<div class="projects-table-wrap">' +
      '<table class="projects-table">' +
      '<thead>' + head + '</thead>' +
      '<tbody>' + body + '</tbody>' +
      '</table></div>';

    if (typeof options.onRender === 'function') {
      options.onRender({ rows: projects.length });
    }

    return container;
  }

  global.ProjectsTable = {
    render: render,
    isPaid: isPaid
  };
}(window));
