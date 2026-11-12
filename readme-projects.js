/*
  readme-projects.js
  ------------------------------------------------------------------
  Показывает на странице README.md с GitHub вместо статической таблицы
  проектов:  https://github.com/dronov-dmitry/dronov-dmitry/blob/main/README.md

  Как это работает:
  1. README забирается с raw.githubusercontent.com (CORS там разрешён).
  2. Текст кэшируется в localStorage на CONFIG.cacheTtlMs, поэтому
     повторные заходы отрисовываются мгновенно, а GitHub не дёргается зря.
  3. Если интернета нет или GitHub недоступен — показывается снимок README,
     вшитый в этот файл (CONFIG.snapshot), чтобы блок никогда не был пустым.
  4. Markdown превращается в HTML небольшим рендерером (GFM-subset):
     заголовки, списки, таблицы, ссылки, картинки, цитаты, код, hr.
  5. Весь HTML перед вставкой экранируется, ссылки открываются в новой
     вкладке с rel="noopener noreferrer".

  Подключение:
      <div id="projectReadme"></div>
      <script src="readme-projects.js"></script>
      <script>
        ReadmeProjects.mount("projectReadme", {
          sourceLabel: "Live von GitHub",      // подпись под блоком
          onRender: function (info) {}         // info.rows — строк в таблице README
        });
      </script>
*/

(function (global) {
  'use strict';

  var CONFIG = {
    rawUrl: 'https://raw.githubusercontent.com/dronov-dmitry/dronov-dmitry/main/README.md',
    pageUrl: 'https://github.com/dronov-dmitry/dronov-dmitry/blob/main/README.md',
    repoUrl: 'https://github.com/dronov-dmitry/dronov-dmitry',
    cacheKey: 'readmeProjects:content',
    cacheStampKey: 'readmeProjects:stamp',
    cacheTtlMs: 6 * 60 * 60 * 1000,   // 6 часов
    fetchTimeoutMs: 10000,
    snapshot: "- 👋 Hi, I’m @dronov-dmitry\n- 👀 I’m interested in BIM / Automatisation\n\nEMAIL: dronov.dmitry.bim@gmail.com\n\nI write working MVPs, monetized, and open-source apps using AI.\n\nOpen-source projects\n| Name | Technology / Stack | Description | Github | Download | Video |\n| --- | --- | --- | --- | --- | --- |\n| AIStudyAssistant | Kotlin, Jetpack Compose, Clean Architecture, MVVM, Kotlin Coroutines/Flows, Preferences DataStore, Material 3; Android/Mac | AI Study Assistant | [Link](https://github.com/dronov-dmitry/AIStudyAssistant) | [Download](https://github.com/dronov-dmitry/AIStudyAssistant/releases) | [Video](https://youtu.be/ai4Hej-QYJQ) |\n| Deutsche-Verb | Flutter/Dart, sqflite (SQLite), provider, sqflite_common_ffi, path_provider, url_launcher, http; Android/Mac | Deutsche verb lernen | [Link](https://github.com/dronov-dmitry/deutsche-verb) | [Download](https://github.com/dronov-dmitry/deutsche-verb/releases) | [Video](https://youtu.be/MbzCh3P16tI) |\n| Construct-Manager | Flutter (Dart), Supabase (PostgreSQL, Auth, Storage, RLS), cross-platform build for Android/iOS/Windows/macOS/Linux/Web | Manager of building | [Link](https://github.com/dronov-dmitry/construct-manager) | [Download](https://github.com/dronov-dmitry/construct-manager/releases) | [Video](https://www.youtube.com/watch?v=oyeULknRJuU) |\n| Nemo | C, GTK-based (Cinnamon file manager); Linux | Fixed keyboard layout switching when renaming files/folders | [Link](https://github.com/linuxmint/nemo/pull/3837) | — | [Video](https://youtu.be/pSitfxwCchM) |\n| Nova Video Player | Android (Java/Kotlin + native components), fork of Archos Video Player | Added settings search feature in Android video player | [PR 1](https://github.com/nova-video-player/aos-Video/pull/203) / [PR 2](https://github.com/nova-video-player/aos-AVP/pull/1850) | [Google Play](https://play.google.com/store/apps/details?id=org.courville.nova) | [Video](https://www.youtube.com/shorts/fwUNcZYiXb4) |\n| MarkText | Electron, Vue 3, Pinia, Vue Router, Element Plus, electron-vite, pnpm, TypeScript/JavaScript; Win/Mac/Linux | Fixed file naming issue in Markdown editor | [Link](https://github.com/marktext/marktext/pull/5325) | [Link](https://github.com/marktext/marktext/pull/5325) | [Video](https://www.youtube.com/shorts/OjGSpP9d76A) |\n| TextPad | Java (Android), PHP/Ruby minor traces; Android | Added two-finger touch scrolling and auto-detection of X-UTF-16LE-BOM encoding | [PR 1](https://github.com/maxistar/TextPad/pull/234) / [PR 2](https://github.com/maxistar/TextPad/pull/235) | [Google Play](https://play.google.com/store/apps/details?id=com.maxistar.textpad) | [Video](https://www.youtube.com/shorts/mreTjptc4fY) |\n| Zorin Taskbar | GNOME Shell extension (JavaScript/GJS), based on Dash to Panel; Linux | Added window tiling feature in Zorin OS | [Link](https://github.com/ZorinOS/zorin-taskbar/pull/37) | — | [Video](https://youtu.be/7nrpvbiXs6Y) |\n| IFC Viewer (That Open) | TypeScript/JavaScript, Three.js, web-ifc, @thatopen/fragments (BIM/IFC web stack); web | Added multi-model support to an open-source IFC viewer for viewing and working with multiple BIM models simultaneously. | [Pull Request](https://github.com/ThatOpen/engine_components/pull/811) | — | [Video](https://youtu.be/a8Wp80GinH8) |\n| Cinnamon Tile Windows | JavaScript/GJS (Cinnamon applet), adapted from Zorin Taskbar tiling algorithm (GPL-2.0-or-later); Linux | Added \"Tile windows\" submenu to the right-click menu of the Grouped window list applet in Cinnamon, with grid, halves, columns and quarters layouts (upstream issue closed as not planned, shipped as a standalone user applet) | [Link](https://github.com/dronov-dmitry/cinnamon-tile-windows) | [Link](https://github.com/dronov-dmitry/cinnamon-tile-windows) | [Video](https://youtu.be/u3yS7SXK9NI) |\n\n\n\n\n"
  };

  var STYLES = `
    .readme { color: var(--text, #e5e7eb); font-size: 14px; line-height: 1.62; min-width: 0; }
    .readme p { margin: 0 0 12px; }
    .readme p:last-child { margin-bottom: 0; }
    .readme h1, .readme h2, .readme h3,
    .readme h4, .readme h5, .readme h6 {
      color: var(--ink, #f7fafc);
      line-height: 1.25;
      margin: 4px 0 12px;
      font-weight: 800;
    }
    .readme h1 { font-size: 22px; }
    .readme h2 { font-size: 19px; padding-bottom: 6px; border-bottom: 1px solid var(--line, rgba(148,163,184,0.18)); }
    .readme h3 { font-size: 17px; }
    .readme h4 { font-size: 15px; }
    .readme h5, .readme h6 { font-size: 14px; color: var(--muted, #94a3b8); }
    .readme ul, .readme ol { margin: 0 0 12px; padding-left: 22px; }
    .readme li { margin: 4px 0; }
    .readme li::marker { color: var(--muted, #94a3b8); }
    .readme a { color: var(--accent-2, #22d3ee); font-weight: 700; text-decoration: none; }
    .readme a:hover { text-decoration: underline; }
    .readme strong { color: var(--ink, #f7fafc); font-weight: 800; }
    .readme code {
      background: rgba(148,163,184,0.16);
      border-radius: 6px;
      padding: 2px 6px;
      font-size: 12.5px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }
    .readme pre {
      background: #0b1220;
      border: 1px solid var(--line, rgba(148,163,184,0.18));
      border-radius: 12px;
      padding: 14px;
      overflow-x: auto;
      margin: 0 0 12px;
    }
    .readme pre code { background: none; padding: 0; font-size: 12.5px; }
    .readme blockquote {
      margin: 0 0 12px;
      padding: 8px 14px;
      border-left: 3px solid var(--accent, #5b8cff);
      color: var(--muted, #94a3b8);
    }
    .readme blockquote p:last-child { margin-bottom: 0; }
    .readme hr { border: 0; border-top: 1px solid var(--line, rgba(148,163,184,0.18)); margin: 16px 0; }
    .readme img { max-width: 100%; height: auto; border-radius: 8px; }
    .readme-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--line, rgba(148,163,184,0.2));
      border-radius: 12px;
      background: var(--surface-strong, #111827);
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      margin: 0 0 12px;
    }
    .readme table {
      width: 100%;
      min-width: 720px;
      border-collapse: collapse;
      text-align: left;
    }
    .readme th {
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
    .readme td {
      border-top: 1px solid var(--line, rgba(148,163,184,0.14));
      padding: 11px 14px;
      font-size: 13.5px;
      line-height: 1.5;
      color: var(--text, #e5e7eb);
      vertical-align: top;
    }
    .readme tbody tr:hover { background: rgba(91,140,255,0.07); }
    .readme tbody td:first-child { color: var(--ink, #f7fafc); font-weight: 750; white-space: nowrap; }
    .readme-loading { color: var(--muted, #94a3b8); font-size: 13px; margin: 0; }
    .readme-source { margin: 12px 0 0; font-size: 12px; color: var(--muted, #94a3b8); }
  `;

  // ── Мелкие утилиты ─────────────────────────────────────────────

  var TOKEN_MARK = '\u0000';

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function stripAngles(url) {
    var value = String(url || '').trim();
    if (value.charAt(0) === '<') value = value.slice(1);
    if (value.charAt(value.length - 1) === '>') value = value.slice(0, -1);
    return value.trim();
  }

  function safeUrl(url) {
    var value = stripAngles(url);
    if (!value) return '';
    if (/^(https?:|mailto:)/i.test(value)) return value;
    if (/^\/\//.test(value)) return 'https:' + value;
    if (value.charAt(0) === '#') return value;
    if (/^(data|javascript|vbscript):/i.test(value)) return '';
    // относительная ссылка → файл внутри репозитория профиля
    return CONFIG.repoUrl + '/blob/main/' + value.replace(/^\.?\//, '');
  }

  // ── Инлайн-разметка: `код`, картинки, ссылки, жирный, курсив ──

  function inline(text, store) {
    var own = !store;
    if (own) store = [];

    function token(html) {
      store.push(html);
      return TOKEN_MARK + (store.length - 1) + TOKEN_MARK;
    }

    var out = String(text);

    // 1) инлайн-код вырезаем первым, чтобы форматирование его не трогало
    out = out.replace(/`([^`]+)`/g, function (_, code) {
      return token('<code>' + escapeHtml(code) + '</code>');
    });

    // 2) картинки ![alt](url)
    out = out.replace(/!\[([^\]]*)\]\(\s*(?:<([^>]+)>|([^)\s]+))(?:\s+["'][^"']*["'])?\s*\)/g,
      function (_, alt, angled, plain) {
        var src = safeUrl(angled || plain);
        if (!src) return '';
        return token('<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(alt) + '" loading="lazy" />');
      });

    // 3) ссылки [text](url) — форматирование внутри подписи сохраняем
    out = out.replace(/\[([^\]]+)\]\(\s*(?:<([^>]+)>|([^)\s]+))(?:\s+["'][^"']*["'])?\s*\)/g,
      function (_, label, angled, plain) {
        var href = safeUrl(angled || plain);
        if (!href) return inline(label, store);
        return token(
          '<a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' +
          inline(label, store) +
          '</a>'
        );
      });

    // 4) экранируем всё, что осталось текстом
    out = escapeHtml(out);

    // 5) жирный / курсив / зачёркнутый
    out = out
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^\w])__([^_]+)__(?!\w)/g, '$1<strong>$2</strong>')
      .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
      .replace(/(^|[\s(])_([^_\n]+)_(?=$|[\s).,;:!?])/g, '$1<em>$2</em>')
      .replace(/~~([^~]+)~~/g, '<del>$1</del>');

    if (!own) return out;

    return out.replace(new RegExp(TOKEN_MARK + '(\\d+)' + TOKEN_MARK, 'g'), function (_, index) {
      return store[Number(index)];
    });
  }

  // ── Блочная разметка ───────────────────────────────────────────

  var ITEM_RE = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;

  function isBlank(line) {
    return !line || !String(line).trim();
  }

  function isTableLine(line) {
    return /\|/.test(line);
  }

  function splitRow(line) {
    var text = String(line).trim().replace(/^\|/, '').replace(/\|$/, '');
    var cells = [];
    var current = '';
    var escaped = false;

    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      if (escaped) { current += char; escaped = false; continue; }
      if (char === '\\') { current += char; escaped = true; continue; }
      if (char === '|') { cells.push(current.trim()); current = ''; continue; }
      current += char;
    }
    cells.push(current.trim());
    return cells;
  }

  function isTableDivider(line) {
    if (!isTableLine(line)) return false;
    var cells = splitRow(line);
    if (!cells.length) return false;
    for (var i = 0; i < cells.length; i++) {
      if (!/^:?-{3,}:?$/.test(cells[i])) return false;
    }
    return true;
  }

  function headingId(text) {
    var id = String(text)
      .replace(/[`*_~]/g, '')
      .toLowerCase()
      .replace(/[^\w\u00C0-\uFFFF]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return id || 'section';
  }

  function isBlockStart(lines, index) {
    var line = lines[index];
    if (/^\s{0,3}(#{1,6})\s+/.test(line)) return true;
    if (/^\s*(```+|~~~+)/.test(line)) return true;
    if (/^\s{0,3}([-*_])\s*(\1\s*){2,}$/.test(line)) return true;
    if (/^\s{0,3}>/.test(line)) return true;
    if (ITEM_RE.test(line)) return true;
    if (isTableLine(line) && index + 1 < lines.length && isTableDivider(lines[index + 1])) return true;
    return false;
  }

  function renderTable(header, aligns, rows) {
    var head = '<tr>' + header.map(function (cell, index) {
      var style = aligns[index] ? ' style="text-align:' + aligns[index] + '"' : '';
      return '<th' + style + '>' + inline(cell.replace(/\\\|/g, '|')) + '</th>';
    }).join('') + '</tr>';

    var body = rows.map(function (row) {
      return '<tr>' + header.map(function (_, index) {
        var cell = row[index] === undefined ? '' : row[index];
        var style = aligns[index] ? ' style="text-align:' + aligns[index] + '"' : '';
        return '<td' + style + '>' + inline(cell.replace(/\\\|/g, '|')) + '</td>';
      }).join('') + '</tr>';
    }).join('');

    return '<div class="readme-table-wrap"><table><thead>' + head +
      '</thead><tbody>' + body + '</tbody></table></div>';
  }

  function parseList(lines, start) {
    var first = lines[start].match(ITEM_RE);
    var indent = first[1].length;
    var ordered = /^\d/.test(first[2]);
    var items = [];
    var i = start;

    while (i < lines.length) {
      var line = lines[i];

      if (isBlank(line)) {
        var lookahead = i + 1;
        while (lookahead < lines.length && isBlank(lines[lookahead])) lookahead++;
        if (lookahead < lines.length) {
          var next = lines[lookahead].match(ITEM_RE);
          if (next && next[1].length === indent) { i = lookahead; continue; }
        }
        break;
      }

      var match = line.match(ITEM_RE);
      if (match) {
        var currentIndent = match[1].length;
        if (currentIndent < indent) break;
        if (currentIndent > indent) {
          // вложенный пункт — приклеиваем к предыдущему элементу
          if (items.length) { items[items.length - 1].push(line); i++; continue; }
          break;
        }
        items.push([match[3]]);
        i++;
        continue;
      }

      // продолжение текста текущего элемента (в т.ч. многострочная ссылка)
      if (items.length) { items[items.length - 1].push(line); i++; continue; }
      break;
    }

    var dedent = new RegExp('^\\s{0,' + (indent + 2) + '}');
    var tag = ordered ? 'ol' : 'ul';

    var rendered = items.map(function (content) {
      var body = content.map(function (itemLine) {
        return itemLine.replace(dedent, '');
      });
      var inner = parseBlocks(body).replace(/^\s*<p>/, '').replace(/<\/p>\s*$/, '');
      return '<li>' + inner + '</li>';
    }).join('');

    return { html: '<' + tag + '>' + rendered + '</' + tag + '>', next: i };
  }

  function parseBlocks(lines) {
    var html = [];
    var i = 0;

    while (i < lines.length) {
      var line = lines[i];

      if (isBlank(line)) { i++; continue; }

      // код под забором
      var fence = line.match(/^\s*(`{3,}|~{3,})\s*([\w+-]*)\s*$/);
      if (fence) {
        var marker = fence[1].charAt(0);
        var language = fence[2];
        var codeLines = [];
        var closeRe = new RegExp('^\\s*' + marker + '{3,}\\s*$');
        i++;
        while (i < lines.length && !closeRe.test(lines[i])) {
          codeLines.push(lines[i]);
          i++;
        }
        i++;
        html.push('<pre><code' + (language ? ' class="language-' + escapeHtml(language) + '"' : '') + '>' +
          escapeHtml(codeLines.join('\n')) + '\n</code></pre>');
        continue;
      }

      // заголовок
      var heading = line.match(/^\s{0,3}(#{1,6})\s+(.*)$/);
      if (heading) {
        var level = heading[1].length;
        var headingText = heading[2].replace(/\s+#+\s*$/, '');
        html.push('<h' + level + ' id="' + escapeHtml(headingId(headingText)) + '">' +
          inline(headingText) + '</h' + level + '>');
        i++;
        continue;
      }

      // горизонтальная линия
      if (/^\s{0,3}([-*_])\s*(\1\s*){2,}$/.test(line)) {
        html.push('<hr />');
        i++;
        continue;
      }

      // цитата
      if (/^\s{0,3}>/.test(line)) {
        var quote = [];
        while (i < lines.length && (/^\s{0,3}>/.test(lines[i]) ||
          (!isBlank(lines[i]) && quote.length && !isBlockStart(lines, i)))) {
          quote.push(lines[i].replace(/^\s{0,3}>\s?/, ''));
          i++;
        }
        html.push('<blockquote>' + parseBlocks(quote) + '</blockquote>');
        continue;
      }

      // таблица GitHub
      if (isTableLine(line) && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
        var header = splitRow(line);
        var aligns = splitRow(lines[i + 1]).map(function (cell) {
          var left = cell.charAt(0) === ':';
          var right = cell.charAt(cell.length - 1) === ':';
          return left && right ? 'center' : (right ? 'right' : (left ? 'left' : ''));
        });
        i += 2;
        var rows = [];
        while (i < lines.length && !isBlank(lines[i]) && isTableLine(lines[i])) {
          rows.push(splitRow(lines[i]));
          i++;
        }
        html.push(renderTable(header, aligns, rows));
        continue;
      }

      // список
      if (ITEM_RE.test(line)) {
        var list = parseList(lines, i);
        html.push(list.html);
        i = list.next;
        continue;
      }

      // абзац
      var paragraph = [];
      while (i < lines.length && !isBlank(lines[i]) && !isBlockStart(lines, i)) {
        paragraph.push(lines[i]);
        i++;
      }
      if (!paragraph.length) {
        paragraph.push(lines[i]);
        i++;
      }
      html.push('<p>' + inline(paragraph.join('\n')) + '</p>');
    }

    return html.join('\n');
  }

  function renderMarkdown(markdown) {
    var lines = String(markdown).replace(/\r\n?/g, '\n').split('\n');
    return parseBlocks(lines);
  }

  // ── Загрузка, кэш и отрисовка ──────────────────────────────────

  function injectStyles() {
    if (document.getElementById('readme-projects-css')) return;
    var style = document.createElement('style');
    style.id = 'readme-projects-css';
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function readCache() {
    try {
      var content = global.localStorage.getItem(CONFIG.cacheKey);
      var stamp = Number(global.localStorage.getItem(CONFIG.cacheStampKey) || 0);
      if (!content || !stamp) return null;
      if (Date.now() - stamp > CONFIG.cacheTtlMs) return null;
      return content;
    } catch (error) {
      return null;
    }
  }

  function writeCache(content) {
    try {
      global.localStorage.setItem(CONFIG.cacheKey, content);
      global.localStorage.setItem(CONFIG.cacheStampKey, String(Date.now()));
    } catch (error) {
      /* приватный режим или переполненное хранилище — работаем без кэша */
    }
  }

  function fetchReadme() {
    var controller = global.AbortController ? new global.AbortController() : null;
    var timer = null;

    if (controller) {
      timer = global.setTimeout(function () { controller.abort(); }, CONFIG.fetchTimeoutMs);
    }

    return global.fetch(CONFIG.rawUrl, {
      cache: 'no-cache',
      signal: controller ? controller.signal : undefined
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.text();
    }).then(function (text) {
      if (timer) global.clearTimeout(timer);
      if (!text || text.trim().length < 20) throw new Error('README пустой');
      return text;
    }, function (error) {
      if (timer) global.clearTimeout(timer);
      throw error;
    });
  }

  function sourceCaption(options, meta) {
    var label = options.sourceLabel || 'Live from GitHub';
    var note = meta.offline
      ? (options.offlineLabel || 'saved copy, GitHub is unreachable')
      : '';
    return '<p class="readme-source">' +
      '<a href="' + CONFIG.pageUrl + '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(label) + '</a>' +
      (note ? ' · ' + escapeHtml(note) : '') +
      '</p>';
  }

  function mount(target, options) {
    var container = typeof target === 'string' ? document.getElementById(target) : target;
    if (!container) return null;

    options = options || {};
    injectStyles();
    container.classList.add('readme');

    // повторный mount (например, при смене языка) не должен дёргать GitHub снова
    if (container.getAttribute('data-readme-mounted') === '1') return container;
    container.setAttribute('data-readme-mounted', '1');

    function done(markdown, meta) {
      container.innerHTML = renderMarkdown(markdown) + sourceCaption(options, meta);
      container.setAttribute('data-readme-source', meta.offline ? 'snapshot' : 'github');
      if (typeof options.onRender === 'function') {
        options.onRender({
          rows: container.querySelectorAll('tbody tr').length,
          source: meta.offline ? 'snapshot' : 'github'
        });
      }
    }

    var cached = readCache();
    if (cached) {
      done(cached, { offline: false });
      // фоновая сверка: если README на GitHub обновился — перерисуем
      fetchReadme().then(function (remote) {
        if (remote !== cached) {
          writeCache(remote);
          done(remote, { offline: false });
        }
      }).catch(function () { /* офлайн — оставляем кэш */ });
      return container;
    }

    container.innerHTML = '<p class="readme-loading">' +
      escapeHtml(options.loadingLabel || 'Loading README from GitHub…') + '</p>';

    fetchReadme().then(function (remote) {
      writeCache(remote);
      done(remote, { offline: false });
    }).catch(function () {
      done(CONFIG.snapshot, { offline: true });
    });

    return container;
  }

  global.ReadmeProjects = {
    mount: mount,
    config: CONFIG,
    renderMarkdown: renderMarkdown
  };
}(window));
