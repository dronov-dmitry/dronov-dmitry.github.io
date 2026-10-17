/*
  Настройки калькулятора стоимости сайта.

  Как обновлять цены:
  1. Измените нужные значения price в этом файле.
  2. При необходимости измените recipientEmail.
  3. Запушьте этот файл на прод вместе с index.html.

  Все цены указаны в долларах США.
*/

window.CALCULATOR_SETTINGS = {
  // Замените на свой email: именно на этот адрес будет формироваться mailto-письмо.
  recipientEmail: 'dronov.dmitry.bim@gmail.com',

  siteTypes: [
    {
      id: 'landing',
      name: 'Лендинг',
      price: 300,
      icon: 'fa-solid fa-bullseye',
      description: 'Продающая страница',
      details: {
        process: ['Прототипирование', 'Дизайн', 'Вёрстка', 'Настройка форм'],
        edits: '2 итерации правок',
        terms: ['Срок: 5-7 дней'],
        notIncluded: ['Покупка домена', 'Платный хостинг', 'Платные шрифты/фото']
      }
    },
    {
      id: 'multipage',
      name: 'Многостраничный сайт (до 5 страниц)',
      price: 600,
      icon: 'fa-solid fa-sitemap',
      description: 'Корпоративный сайт с дизайном и структурой',
      details: {
        process: ['Структура сайта', 'Дизайн-макет', 'Адаптивная вёрстка', 'Базовое SEO', 'Наполнение'],
        edits: '3 итерации правок',
        terms: ['Срок: 10-14 дней', 'Подключение аналитики в подарок'],
        notIncluded: ['Продвижение (SEO-контент)', 'Сложные анимации', 'Абонентская плата за CRM']
      }
    },
    {
      id: 'shop',
      name: 'Интернет-магазин',
      price: 1200,
      icon: 'fa-solid fa-cart-shopping',
      description: 'E-commerce платформа с оплатой и каталогом',
      details: {
        process: ['Проектирование БД', 'Каталог товаров', 'Корзина и оплата', 'Личный кабинет', 'Тестирование'],
        edits: '5 итераций правок',
        terms: ['Срок: 20-30 дней', 'Техподдержка 1 месяц', 'Обучение работе с заказами'],
        notIncluded: ['Комиссии платежных систем', 'Лицензия 1С-Битрикс/др.', 'Загрузка более 100 товаров']
      }
    },
    {
      id: 'complex',
      name: 'Сложный проект',
      price: 5000,
      icon: 'fa-solid fa-microchip',
      description: 'Индивидуальное решение, сервис или портал',
      details: {
        process: ['Глубокая аналитика', 'Проектирование архитектуры', 'Индивидуальный дизайн', 'Разработка Backend/API', 'Сложные интеграции', 'Нагрузочное тестирование'],
        edits: 'Безлимитные правок на этапе проектирования',
        terms: ['Срок: от 45 дней', 'VIP-поддержка 3 месяца', 'NDA и официальный договор', 'Если сайт строительной тематики - продвижение в своём телеграм канале - в подарок'],
        notIncluded: ['Аренда выделенных серверов', 'Платные API-сервисы', 'Техподдержка после 3-х месяцев']
      }
    }
  ],

  options: [
    {
      id: 'payments',
      name: 'Интеграция с оплатой',
      price: 100,
      icon: 'fa-solid fa-credit-card',
      bonus: 'Автоматизация продаж: деньги будут поступать сразу на ваш счет Stripe или PayPal.'
    },
    {
      id: 'responsive',
      name: 'Адаптивная вёрстка (Mobile First)',
      price: 100,
      icon: 'fa-solid fa-mobile-screen-button',
      bonus: 'Сайт будет идеально работать на смартфонах, что поднимет его в поиске Google и Яндекс.'
    },
    {
      id: 'seo',
      name: 'SEO-оптимизация (Базовая)',
      price: 100,
      icon: 'fa-solid fa-chart-line',
      bonus: 'Техническая подготовка к продвижению: ваш сайт будет правильно индексироваться поисковиками.'
    },
    {
      id: 'admin',
      name: 'Админ-панель (CMS)',
      price: 100,
      icon: 'fa-solid fa-user-gear',
      bonus: 'Вы сможете сами менять тексты и картинки выставленных товаров на сайте без помощи программиста.'
    },
    {
      id: 'content',
      name: 'Наполнение контентом',
      price: 100,
      icon: 'fa-solid fa-pen-nib',
      bonus: 'Сайт будет готов к запуску сразу: мы сами разместим все ваши тексты, фото и товары.'
    },
    {
      id: 'deployment',
      name: 'Разворачивание сайта на серверах',
      price: 100,
      icon: 'fa-solid fa-server',
      bonus: 'Полная настройка "под ключ": покупка домена, настройка хостинга и запуск сайта в открытый доступ.'
    }
  ],

  marketSources: [
    { label: 'Обоснование цен (анализ Gemini)', url: 'https://gemini.google.com/share/ff24421e426f' }
  ],

  projects: [
    {
      name: 'Energo-pass',
      descriptionDe: 'Berechnet den Energiepass von Gebäuden',
      description: 'Считает энергетический паспорт здания',
      price: '$1/month',
      github: 'https://github.com/dronov-dmitry/energo_pasport',
      service: 'https://dronov-dmitry.github.io/energo_pasport/',
      video: 'https://www.youtube.com/watch?v=W-t38aRjG4E'
    },
    {
      name: '5D',
      descriptionDe: 'Erstellt 5D-Gebäudeschema',
      description: 'Строит 5D схему здания',
      price: '3 €/month',
      github: 'https://github.com/dronov-dmitry/5D',
      service: 'https://dronov-dmitry.github.io/5D',
      video: 'https://www.youtube.com/watch?v=pL_BOoI8qFA'
    },
    {
      name: 'Calendar-logging',
      descriptionDe: 'Sammelt Metriken im Kalender',
      description: 'Собирает данные по метрикам в календаре',
      price: 'Free + $1/month',
      github: 'https://github.com/dronov-dmitry/calendar-rate',
      service: 'https://dronov-dmitry.github.io/calendar-rate/',
      video: 'https://www.youtube.com/watch?v=Tgjr4S5oZkc'
    },
    {
      name: 'Fertig-Lance',
      descriptionDe: 'Kostenlose Freelance-Börse',
      description: 'Бесплатная фриланс-биржа',
      price: 'Free',
      github: 'https://github.com/dronov-dmitry/fertig-lance',
      service: 'https://dronov-dmitry.github.io/fertig-lance/',
      video: 'https://www.youtube.com/watch?v=lEO2ZJ0XY9Y'
    },
    {
      name: 'CRM',
      descriptionDe: 'CRM-Plattform',
      description: 'CRM-платформа',
      price: '$1/month',
      github: 'https://github.com/dronov-dmitry/crm',
      service: 'https://dronov-dmitry.github.io/crm/',
      video: 'https://www.youtube.com/watch?v=UgGDOl-gINQ'
    },
    {
      name: 'Translate Bot',
      descriptionDe: 'Telegram Übersetzungs-Bot',
      description: 'телеграм бот переводчик',
      price: 'Free + $3/month',
      github: 'https://github.com/dronov-dmitry/translate-bot',
      service: 'https://dronov-dmitry.github.io/translate-bot/',
      video: 'https://youtu.be/BgiKFu3L4zw'
    },
    {
      name: 'Europe-estate Bot',
      descriptionDe: 'Telegram Bot zur Immobiliensuche per Web-Scraping',
      description: 'телеграм бот поиск недвижимости',
      price: 'Free + $3/month',
      github: 'https://github.com/dronov-dmitry/estate-bot',
      service: 'https://dronov-dmitry.github.io/estate-bot/',
      video: 'https://www.youtube.com/shorts/imF0RioF7fM'
    },
    {
      name: 'Time-Organizer-Bot',
      descriptionDe: 'Telegram Bot zur Terminplanung und Zeitorganisation',
      description: 'телеграм бот планировщик встреч',
      price: 'Free + €5/month',
      github: 'https://github.com/dronov-dmitry/time-organisation-bot/',
      service: 'https://dronov-dmitry.github.io/time-organisation-bot/',
      video: 'https://youtu.be/d_tR6HH4YoA'
    },
    {
      name: 'AIStudyAssistant',
      descriptionDe: 'KI-Chatbot, Vorlesungszusammenfassung, Aufsatzschreiber und Fragengenerator für Android',
      description: 'ИИ-чатбот, суммаризатор лекций, генератор сочинений и вопросов для Android',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/AIStudyAssistant',
      service: 'https://github.com/dronov-dmitry/AIStudyAssistant/releases',
      video: 'https://youtu.be/ai4Hej-QYJQ'
    },
    {
      name: 'Deutsche-verb',
      descriptionDe: 'Kostenlose deutsche Verben',
      description: 'Бесплатные немецкие глаголы',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/deutsche-verb/',
      service: 'https://dronov-dmitry.github.io/deutsche-verb/',
      video: 'https://youtu.be/MbzCh3P16tI'
    },
    {
      name: 'Construction-manager',
      descriptionDe: 'Kostenlose construction manager',
      description: 'Бесплатный менеджер строительства',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/construct-manager/',
      service: 'https://dronov-dmitry.github.io/construct-manager/',
      video: 'https://youtu.be/oyeULknRJuU'
    },
    {
      name: 'Real-time-translator',
      descriptionDe: 'Telephone real-time translator',
      description: 'Переводчик в реальном времени',
      price: '5$/month',
      github: 'https://github.com/dronov-dmitry/real-time-translator/',
      service: 'https://dronov-dmitry.github.io/real-time-translator/',
      video: 'https://youtu.be/o7gV1MK87fc'
    },
    {
      name: 'LangBook-Reader',
      descriptionDe: 'Reader another language books (Android/Mac)',
      description: 'Читалка иностранных книг с локальным переводом',
      price: '5$/month',
      github: 'https://github.com/dronov-dmitry/lang-book-reader/',
      service: 'https://dronov-dmitry.github.io/lang-book-reader/',
      video: 'https://www.youtube.com/shorts/5IN8ODxeQOk'
    }
  ],

  projectsDe: [
    {
      name: 'AIStudyAssistant',
      description: 'KI-Chatbot, Vorlesungszusammenfassung, Aufsatzschreiber und Fragengenerator für Android',
      tech: 'Android (Kotlin)',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/AIStudyAssistant',
      service: 'https://github.com/dronov-dmitry/AIStudyAssistant/releases',
      video: 'https://youtu.be/ai4Hej-QYJQ'
    },
    {
      name: 'Open-Lance',
      description: 'Kostenlose Freelance-Börse',
      tech: 'Web (JavaScript)',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/open-lance',
      service: 'https://dronov-dmitry.github.io/open-lance/',
      video: 'https://www.youtube.com/watch?v=lEO2ZJ0XY9Y'
    }
    ,
    {
      name: 'Deutsche-verb',
      description: 'Kostenlose deutsche Verben',
      tech: 'Web (JavaScript)',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/deutsche-verb/',
      service: 'https://dronov-dmitry.github.io/deutsche-verb/',
      video: 'https://youtu.be/MbzCh3P16tI'
    }
    ,
    {
      name: 'Construction-manager',
      description: 'Kostenlose construction manager',
      tech: 'Flutter (Dart)',
      price: 'Open-Source',
      github: 'https://github.com/dronov-dmitry/construct-manager/',
      service: 'https://dronov-dmitry.github.io/construct-manager/',
      video: 'https://youtu.be/O78Gtu5xOIY'
    }
    ,
    {
      name: 'NOVA Video Player',
      description: 'Open-Source: Suchfunktion in den Einstellungen zum Android-Videoplayer NOVA hinzugefügt (Beitrag via Pull Request)',
      tech: 'Android (Java)',
      price: 'Open-Source',
      prs: [
        { label: 'PR #203', url: 'https://github.com/nova-video-player/aos-Video/pull/203' },
        { label: 'PR #1850', url: 'https://github.com/nova-video-player/aos-AVP/pull/1850' }
      ],
      service: 'https://play.google.com/store/apps/details?id=org.courville.nova',
      video: 'https://www.youtube.com/shorts/fwUNcZYiXb4?feature=share'
    }
    ,
    {
      name: 'MarkText',
      description: 'Open-Source: Dateibenennung im Markdown-Editor MarkText für Win/Mac/Linux behoben (Beitrag via Pull Request)',
      tech: 'Desktop (Electron / TypeScript)',
      price: 'Open-Source',
      github: 'https://github.com/marktext/marktext',
      prs: [
        { label: 'PR #5325', url: 'https://github.com/marktext/marktext/pull/5325' }
      ],
      service: 'https://www.marktext.me',
      video: 'https://www.youtube.com/shorts/OjGSpP9d76A?feature=share'
    }
    ,
    {
      name: 'TextPad',
      description: 'Open-Source: Text mit zwei Fingern verschieben und automatische Erkennung der Kodierung X-UTF-16LE-BOM im Android-Texteditor TextPad (Beitrag via Pull Request)',
      tech: 'Android (Java)',
      price: 'Open-Source',
      github: 'https://github.com/maxistar/TextPad',
      prs: [
        { label: 'PR #234', url: 'https://github.com/maxistar/TextPad/pull/234' },
        { label: 'PR #235', url: 'https://github.com/maxistar/TextPad/pull/235' }
      ],
      service: 'https://play.google.com/store/apps/details?id=com.maxistar.textpad',
      video: 'https://www.youtube.com/shorts/mreTjptc4fY?feature=share'
    }
  ]
};
