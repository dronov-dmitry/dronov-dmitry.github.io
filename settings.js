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
      description: 'Считает энергетический паспорт здания',
      price: '1$/month',
      github: 'https://github.com/dronov-dmitry/energo_pasport',
      githubLabel: 'energo_pass',
      service: 'https://dronov-dmitry.github.io/energo_pasport/',
      video: 'https://www.youtube.com/watch?v=W-t38aRjG4E'
    },
    {
      name: '5D',
      description: 'Строит 5D схему здания',
      price: '3 Euro/month',
      github: 'https://github.com/dronov-dmitry/5D',
      githubLabel: '5D',
      service: 'https://dronov-dmitry.github.io/5D',
      video: 'https://www.youtube.com/watch?v=pL_BOoI8qFA'
    },
    {
      name: 'Calendar-logging',
      description: 'Собирает данные по метрикам в календаре',
      price: 'Free + 1$/month',
      github: 'https://github.com/dronov-dmitry/calendar-rate',
      githubLabel: 'calendar-rate',
      service: 'https://dronov-dmitry.github.io/calendar-rate/',
      video: 'https://www.youtube.com/watch?v=Tgjr4S5oZkc'
    },
    {
      name: 'Fertig-Lance',
      description: 'Бесплатная фриланс-биржа',
      price: 'Free',
      github: 'https://github.com/dronov-dmitry/fertig-lance',
      githubLabel: 'fertig-lance',
      service: 'https://dronov-dmitry.github.io/fertig-lance/',
      video: 'https://www.youtube.com/watch?v=lEO2ZJ0XY9Y'
    },
    {
      name: 'CRM',
      description: 'CRM-платформа',
      price: '1$/month',
      github: 'https://github.com/dronov-dmitry/crm',
      githubLabel: 'CRM',
      service: 'https://dronov-dmitry.github.io/crm/',
      video: 'https://www.youtube.com/watch?v=UgGDOl-gINQ'
    },
    {
      name: 'Translate Bot',
      description: 'телеграм бот переводчик',
      price: 'Free + 3$/month',
      github: 'https://github.com/dronov-dmitry/translate-bot',
      githubLabel: 'Translate-bot',
      service: 'https://dronov-dmitry.github.io/translate-bot/',
      video: 'https://youtu.be/BgiKFu3L4zw'
    },
    {
      name: 'Europe-estate Bot',
      description: 'телеграм бот поиск недвижимости',
      price: 'Free + 3$/month',
      github: 'https://github.com/dronov-dmitry/estate-bot',
      githubLabel: 'Europe-estate-bot',
      service: 'https://dronov-dmitry.github.io/estate-bot/',
      video: 'https://youtu.be/s9gjJU6v2rs'
    }
  ]
};
