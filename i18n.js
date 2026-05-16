const i18n = {
  supportedLanguages: ["ru", "de", "en", "fr", "es", "ua"],
  languageNames: { ru: "RU", de: "DE", en: "EN", fr: "FR", es: "ES", ua: "UA" },

  translations: {
    en: {
      nav: { work: "Work", process: "Process", price: "Price", faq: "FAQ", cta: "Estimate" },
      hero: {
        eyebrow: "Web products for measurable growth",
        title: "Launch a site that sells before it explains.",
        lead: "I design and build landing pages, service websites and custom web tools with a clear offer, crisp UX and a path from first click to paid request.",
        primary: "Calculate project",
        secondary: "View portfolio",
        proofProjects: "published products",
        proofDays: "days for landing",
        proofLangs: "site languages",
        visualKicker: "Typical start",
        visualTitle: "Landing page with strategy, design and responsive build"
      },
      trust: {
        kicker: "Why clients come here",
        title: "Small-team speed with product thinking.",
        text: "The page is treated as a sales system: offer, proof, friction, trust, contact flow and launch details are designed together.",
        items: [
          { title: "Conversion structure", text: "A first screen that makes the offer clear, then sections that remove doubts step by step." },
          { title: "Mobile first", text: "Layouts, forms and buttons are planned from phone screens before scaling up." },
          { title: "Transparent price", text: "Visitors can estimate scope immediately and send a structured request." },
          { title: "Launch-ready build", text: "Responsive HTML, basic SEO, contact flow and deployment support can be included." }
        ]
      },
      work: { kicker: "Selected products", title: "Proof that ships.", text: "A compact portfolio of real services, SaaS experiments and automation tools with public links.", open: "Open", code: "Code", video: "Video", tableName: "Name", tableDescription: "Description", tablePrice: "Price", tableGithub: "Github", tableService: "Service", tableVideo: "Video" },
      process: {
        kicker: "Process",
        title: "From vague idea to working page.",
        text: "The workflow keeps decisions visible, so the design can move fast without becoming random.",
        steps: [
          { title: "Strategy & Offer", text: "From competitor analysis to messaging and the main conversion action." },
          { title: "Architecture of Meaning", text: "We design the copy structure and interaction logic without distracting decor." },
          { title: "Visual Implementation", text: "We create an aesthetic, responsive interface that strengthens your message." },
          { title: "Technical Start", text: "Clean coding, analytics setup, and full preparation for traffic." }
        ]
      },
      calc: { kicker: "Project estimator", title: "Choose scope and send a clean brief.", text: "Move step by step: choose the base project, add options, leave contacts and check the result.", siteType: "Project type", siteTypeHint: "Choose the base format for the work.", options: "Options", optionsHint: "Add only what the project really needs.", contactsHint: "Leave contacts so I can reply with the next step.", review: "Review and send", reviewHint: "Check the estimate before opening the email draft." },
      form: { title: "Request estimate", name: "Name *", email: "Email *", phone: "WhatsApp / Telegram phone *", comment: "Comment", submit: "Send request", priceSourceText: "Price benchmark:", priceSourceLabel: "Gemini analysis", escrowText: "Safe escrow option:", assuranceData: "The form creates an email draft in your browser. No hidden data transfer." },
      summary: { type: "Project", options: "Options", total: "Total" },
      faq: {
        kicker: "Questions",
        title: "Before we start.",
        text: "A few practical details that usually decide whether the project moves quickly.",
        items: [
          { q: "How fast can a landing page launch?", a: "A focused landing page usually takes 5-7 days when content and feedback are available quickly." },
          { q: "Can the website be multilingual?", a: "Yes. This page already supports Russian, German, English, French, Spanish and Ukrainian with automatic browser-language detection." },
          { q: "What happens after I send the request?", a: "Your email client opens with a prepared brief. I review the scope and reply with the next steps." }
        ]
      },
      cta: { title: "Ready to turn the offer into a page?", text: "Pick the project type, add options and send the brief. I will reply with the next steps.", button: "Start estimate" },
      modal: { title: "Copy request text", text: "If the email app did not open, send this text manually to", copy: "Copy text", copied: "Copied" },
      errors: { name: "Enter your name", email: "Enter a valid email", phone: "Enter a phone number" },
      none: "None",
      emailSubject: "Website development request",
      emailLabels: { name: "Name", email: "Email", phone: "Phone", comment: "Comment", noComment: "Not specified", type: "PROJECT TYPE", options: "OPTIONS", total: "TOTAL" },
      siteTypes: {
        landing: { name: "Landing page", description: "Conversion-focused sales page" },
        multipage: { name: "Multi-page website", description: "Corporate website up to 5 pages" },
        shop: { name: "Online store", description: "E-commerce with catalog and payment" },
        complex: { name: "Custom product", description: "Service, portal or individual solution" }
      },
      optionsCopy: {
        payments: { name: "Payment integration", bonus: "Connect Stripe, PayPal or another payment flow." },
        responsive: { name: "Mobile-first layout", bonus: "Careful responsive behavior for phone-first traffic." },
        seo: { name: "Basic SEO", bonus: "Indexing-friendly structure and core metadata." },
        admin: { name: "CMS admin", bonus: "Edit content without touching code." },
        content: { name: "Content upload", bonus: "Texts, images and products placed before launch." },
        deployment: { name: "Server deployment", bonus: "Hosting, domain and launch configuration." }
      },
      projectDescriptions: {
        "Energo-pass": "Calculates an energy passport for a building",
        "5D": "Builds a 5D building scheme",
        "Calendar-logging": "Collects metric data in a calendar",
        "Fertig-Lance": "Free freelance marketplace",
        "CRM": "CRM platform",
        "Translate Bot": "Telegram translation bot",
        "Europe-estate Bot": "Telegram estate search bot"
      }
    },
    ru: {
      nav: { work: "Работы", process: "Процесс", price: "Цена", faq: "FAQ", cta: "Расчёт" },
      hero: {
        eyebrow: "Веб-продукты для измеримого роста",
        title: "Запустите сайт, который продаёт.",
        lead: "Я проектирую и разрабатываю лендинги, сервисные сайты и веб-инструменты с ясным оффером, аккуратным UX и прямым путём от первого клика до заявки.",
        primary: "Рассчитать проект",
        secondary: "Смотреть портфолио",
        proofProjects: "запущенных продуктов",
        proofDays: "дней на лендинг",
        proofLangs: "языков сайта",
        visualKicker: "Типичный старт",
        visualTitle: "Лендинг со стратегией, дизайном и адаптивной вёрсткой"
      },
      trust: {
        kicker: "Почему приходят сюда",
        title: "Скорость маленькой команды и продуктовая логика.",
        text: "Страница собирается как система продаж: оффер, доказательства, возражения, доверие, форма заявки и детали запуска проектируются вместе.",
        items: [
          { title: "Конверсионная структура", text: "Первый экран быстро объясняет ценность, а следующие блоки постепенно снимают сомнения." },
          { title: "Mobile First", text: "Макеты, формы и кнопки сначала продумываются для смартфона, затем масштабируются." },
          { title: "Прозрачная цена", text: "Посетитель сразу оценивает объём работ и отправляет структурированную заявку." },
          { title: "Готовность к запуску", text: "Адаптивная вёрстка, базовое SEO, контактный сценарий и помощь с деплоем." }
        ]
      },
      work: { kicker: "Избранные продукты", title: "Работы, которые уже запущены.", text: "Компактное портфолио реальных сервисов, SaaS-экспериментов и автоматизаций с открытыми ссылками.", open: "Открыть", code: "Код", video: "Видео", tableName: "Имя", tableDescription: "Описание", tablePrice: "Цена", tableGithub: "Github", tableService: "Сервис", tableVideo: "Видео" },
      process: {
        kicker: "Процесс",
        title: "От размытой идеи к рабочей странице.",
        text: "Решения остаются видимыми, поэтому дизайн движется быстро и не превращается в случайный набор красивостей.",
        steps: [
          { title: "Стратегия и Оффер", text: "От анализа конкурентов до упаковки смыслов и главного целевого действия." },
          { title: "Архитектура смыслов", text: "Проектируем структуру текста и логику взаимодействия без отвлекающего декора." },
          { title: "Визуальное воплощение", text: "Создаем эстетичный, адаптивный интерфейс, который усиливает ваше сообщение." },
          { title: "Технический старт", text: "Чистая вёрстка, настройка аналитики и полная подготовка к приему трафика." }
        ]
      },
      calc: { kicker: "Калькулятор", title: "Выберите объём и отправьте понятный бриф.", text: "Двигайтесь по шагам сверху вниз: тип проекта, опции, контакты и проверка итога.", siteType: "Тип проекта", siteTypeHint: "Выберите базовый формат работы.", options: "Опции", optionsHint: "Добавьте только то, что действительно нужно проекту.", contactsHint: "Оставьте контакты, чтобы я ответил со следующим шагом.", review: "Проверьте итог", reviewHint: "Проверьте расчёт перед открытием черновика письма." },
      form: { title: "Заявка на расчёт", name: "Имя *", email: "Email *", phone: "Телефон WhatsApp / Telegram *", comment: "Комментарий", submit: "Отправить заявку", priceSourceText: "Обоснование цен:", priceSourceLabel: "анализ Gemini", escrowText: "Безопасная сделка:", assuranceData: "Форма создаёт черновик письма в браузере. Скрытой отправки данных нет." },
      summary: { type: "Проект", options: "Опции", total: "Итого" },
      faq: {
        kicker: "Вопросы",
        title: "Перед стартом.",
        text: "Несколько практичных деталей, от которых обычно зависит скорость проекта.",
        items: [
          { q: "Как быстро можно запустить лендинг?", a: "Сфокусированный лендинг обычно занимает 5-7 дней, если контент и обратная связь приходят быстро." },
          { q: "Можно ли сделать сайт многоязычным?", a: "Да. Эта страница уже поддерживает русский, немецкий, английский, французский, испанский и украинский с автоопределением языка браузера." },
          { q: "Что будет после отправки заявки?", a: "Откроется почтовый клиент с готовым брифом. Я посмотрю объём и отвечу с дальнейшими шагами." }
        ]
      },
      cta: { title: "Готовы превратить оффер в страницу?", text: "Выберите тип проекта, добавьте опции и отправьте бриф. Я отвечу с дальнейшими шагами.", button: "Начать расчёт" },
      modal: { title: "Скопируйте текст заявки", text: "Если почтовый клиент не открылся, отправьте этот текст вручную на", copy: "Скопировать текст", copied: "Скопировано" },
      errors: { name: "Введите имя", email: "Введите корректный email", phone: "Введите телефон" },
      none: "Не выбраны",
      emailSubject: "Заявка на разработку сайта",
      emailLabels: { name: "Имя", email: "Email", phone: "Телефон", comment: "Комментарий", noComment: "Не указан", type: "ТИП ПРОЕКТА", options: "ОПЦИИ", total: "ИТОГО" },
      siteTypes: {
        landing: { name: "Лендинг", description: "Продающая страница" },
        multipage: { name: "Многостраничный сайт", description: "Корпоративный сайт до 5 страниц" },
        shop: { name: "Интернет-магазин", description: "Каталог, корзина и оплата" },
        complex: { name: "Сложный проект", description: "Сервис, портал или индивидуальное решение" }
      },
      optionsCopy: {
        payments: { name: "Интеграция с оплатой", bonus: "Подключение Stripe, PayPal или другого платёжного сценария." },
        responsive: { name: "Mobile First вёрстка", bonus: "Аккуратная адаптация под трафик со смартфонов." },
        seo: { name: "Базовое SEO", bonus: "Структура и метаданные для корректной индексации." },
        admin: { name: "Админ-панель CMS", bonus: "Редактирование контента без правки кода." },
        content: { name: "Наполнение контентом", bonus: "Тексты, изображения и товары размещаются до запуска." },
        deployment: { name: "Разворачивание на сервере", bonus: "Настройка хостинга, домена и публикации." }
      },
      projectDescriptions: {
        "Energo-pass": "Считает энергетический паспорт здания",
        "5D": "Строит 5D схему здания",
        "Calendar-logging": "Собирает данные по метрикам в календаре",
        "Fertig-Lance": "Бесплатная фриланс-биржа",
        "CRM": "CRM-платформа",
        "Translate Bot": "Telegram-бот переводчик",
        "Europe-estate Bot": "Telegram-бот поиск недвижимости"
      }
    },
    de: {
      nav: { work: "Projekte", process: "Prozess", price: "Preis", faq: "FAQ", cta: "Kalkulieren" },
      hero: {
        eyebrow: "Webprodukte für messbares Wachstum",
        title: "Starten Sie eine Website, die verkauft, bevor sie erklärt.",
        lead: "Ich gestalte und entwickle Landingpages, Service-Websites und Webtools mit klarem Angebot, sauberer UX und direktem Weg von Klick zu Anfrage.",
        primary: "Projekt berechnen",
        secondary: "Portfolio ansehen",
        proofProjects: "veröffentlichte Produkte",
        proofDays: "Tage für Landingpage",
        proofLangs: "Sprachen",
        visualKicker: "Typischer Start",
        visualTitle: "Landingpage with Strategie, Design und responsiver Umsetzung"
      },
      trust: {
        kicker: "Warum Kunden hier starten",
        title: "Tempo einer kleinen Einheit mit Produktdenken.",
        text: "Die Seite wird als Verkaufssystem geplant: Angebot, Beweise, Einwände, Vertrauen, Kontaktfluss und Launch-Details greifen zusammen.",
        items: [
          { title: "Conversion-Struktur", text: "Der erste Screen macht das Angebot klar, danach werden Zweifel Schritt für Schritt reduziert." },
          { title: "Mobile First", text: "Layouts, Formulare und Buttons entstehen zuerst für Smartphone-Screens." },
          { title: "Transparenter Preis", text: "Besucher können den Umfang sofort schätzen und strukturiert anfragen." },
          { title: "Bereit für Launch", text: "Responsive HTML, Basis-SEO, Kontaktfluss und Deployment-Support sind möglich." }
        ]
      },
      work: { kicker: "Ausgewählte Produkte", title: "Nachweis, der online ist.", text: "Ein kompaktes Portfolio echter Services, SaaS-Experimente und Automatisierungen mit öffentlichen Links.", open: "Öffnen", code: "Code", video: "Video", tableName: "Name", tableDescription: "Beschreibung", tablePrice: "Preis", tableGithub: "Github", tableService: "Service", tableVideo: "Video" },
      process: {
        kicker: "Prozess",
        title: "Von unklarer Idee zur funktionierenden Seite.",
        text: "Entscheidungen bleiben sichtbar, damit Design schnell vorankommt und trotzdem begründet bleibt.",
        steps: [
          { title: "Strategie & Angebot", text: "Von der Wettbewerbsanalyse bis zur Verpackung von Inhalten und der Hauptaktion." },
          { title: "Architektur der Sinne", text: "Wir entwerfen die Textstruktur und Interaktionslogik ohne ablenkende Dekoration." },
          { title: "Visuelle Verkörperung", text: "Wir schaffen ein ästhetisches, responsives Interface, das Ihre Botschaft verstärkt." },
          { title: "Technischer Start", text: "Sauberes Coding, Analytics-Setup und vollständige Vorbereitung auf den Traffic." }
        ]
      },
      calc: { kicker: "Projektkalkulator", title: "Umfang wählen und Briefing senden.", text: "Gehen Sie Schritt für Schritt: Projekttyp, Optionen, Kontakte und Ergebnis prüfen.", siteType: "Projekttyp", siteTypeHint: "Wählen Sie das Grundformat der Arbeit.", options: "Optionen", optionsHint: "Fügen Sie nur hinzu, was das Projekt wirklich braucht.", contactsHint: "Hinterlassen Sie Kontakte, damit ich mit dem nächsten Schritt antworten kann.", review: "Prüfen und senden", reviewHint: "Prüfen Sie die Schätzung vor dem Öffnen des E-Mail-Entwurfs." },
      form: { title: "Anfrage senden", name: "Name *", email: "E-Mail *", phone: "WhatsApp / Telegram Telefon *", comment: "Kommentar", submit: "Anfrage senden", priceSourceText: "Preisgrundlage:", priceSourceLabel: "Gemini-Analyse", escrowText: "Sichere Escrow-Option:", assuranceData: "Das Formular erstellt nur einen E-Mail-Entwurf im Browser. Keine versteckte Datenübertragung." },
      summary: { type: "Projekt", options: "Optionen", total: "Gesamt" },
      faq: {
        kicker: "Fragen",
        title: "Vor dem Start.",
        text: "Ein paar praktische Details, die meist über das Tempo entscheiden.",
        items: [
          { q: "Wie schnell kann eine Landingpage online gehen?", a: "Eine fokussierte Landingpage dauert meist 5-7 Tage, wenn Inhalte und Feedback schnell verfügbar sind." },
          { q: "Kann die Website mehrsprachig sein?", a: "Ja. Diese Seite unterstützt bereits Russisch, Deutsch, Englisch, Französisch, Spanisch und Ukrainisch mit Browser-Erkennung." },
          { q: "Was passiert nach der Anfrage?", a: "Ihr Mailprogramm öffnet sich mit einem vorbereiteten Briefing. Ich prüfe den Umfang und antworte mit den nächsten Schritten." }
        ]
      },
      cta: { title: "Bereit, das Angebot in eine Seite zu verwandeln?", text: "Wählen Sie Projekttyp und Optionen und senden Sie das Briefing. Ich antworte mit den nächsten Schritten.", button: "Kalkulation starten" },
      modal: { title: "Anfragetext kopieren", text: "Falls das Mailprogramm nicht geöffnet wurde, senden Sie diesen Text manuell an", copy: "Text kopieren", copied: "Kopiert" },
      errors: { name: "Bitte Namen eingeben", email: "Bitte gültige E-Mail eingeben", phone: "Bitte Telefonnummer eingeben" },
      none: "Keine",
      emailSubject: "Anfrage zur Website-Entwicklung",
      emailLabels: { name: "Name", email: "E-Mail", phone: "Telefon", comment: "Kommentar", noComment: "Nicht angegeben", type: "PROJEKTTYP", options: "OPTIONEN", total: "GESAMT" },
      siteTypes: {
        landing: { name: "Landingpage", description: "Verkaufsstarke Einzelseite" },
        multipage: { name: "Mehrseitige Website", description: "Corporate Website bis 5 Seiten" },
        shop: { name: "Online-Shop", description: "E-Commerce mit Katalog und Zahlung" },
        complex: { name: "Individuelles Produkt", description: "Service, Portal oder Speziallösung" }
      },
      optionsCopy: {
        payments: { name: "Zahlungsintegration", bonus: "Stripe, PayPal oder anderer Zahlungsablauf." },
        responsive: { name: "Mobile-First Layout", bonus: "Sorgfältige Darstellung für Smartphone-Traffic." },
        seo: { name: "Basis-SEO", bonus: "Indexierungsfreundliche Struktur und Metadaten." },
        admin: { name: "CMS-Admin", bonus: "Inhalte ohne Code bearbeiten." },
        content: { name: "Content-Einpflege", bonus: "Texte, Bilder und Produkte vor dem Launch einpflegen." },
        deployment: { name: "Server-Deployment", bonus: "Hosting, Domain und Veröffentlichung einrichten." }
      },
      projectDescriptions: {
        "Energo-pass": "Berechnet den Energiepass eines Gebäudes",
        "5D": "Erstellt ein 5D-Gebäudeschema",
        "Calendar-logging": "Sammelt Metrikdaten im Kalender",
        "Fertig-Lance": "Kostenlose Freelance-Börse",
        "CRM": "CRM-Plattform",
        "Translate Bot": "Telegram-Übersetzungsbot",
        "Europe-estate Bot": "Telegram-Immobilien-Suchbot"
      }
    },
    fr: {
      nav: { work: "Projets", process: "Processus", price: "Prix", faq: "FAQ", cta: "Estimer" },
      hero: {
        eyebrow: "Produits web pour une croissance mesurable",
        title: "Lancez un site qui vend avant d'expliquer.",
        lead: "Je conçois et développe des landing pages, sites de service et outils web avec une offre claire, une UX nette et un chemin direct du clic à la demande.",
        primary: "Calculer le projet",
        secondary: "Voir le portfolio",
        proofProjects: "produits publiés",
        proofDays: "jours pour un landing",
        proofLangs: "langues du site",
        visualKicker: "Départ typique",
        visualTitle: "Landing page avec stratégie, design et intégration responsive"
      },
      trust: {
        kicker: "Pourquoi commencer ici",
        title: "La vitesse d'une petite équipe avec une logique produit.",
        text: "La page est pensée comme un système de vente: offre, preuves, frictions, confiance, contact et lancement.",
        items: [
          { title: "Structure conversion", text: "Le premier écran clarifie l'offre, puis chaque section réduit les doutes." },
          { title: "Mobile first", text: "Layouts, formulaires et boutons sont pensés d'abord pour le mobile." },
          { title: "Prix transparent", text: "Le visiteur estime le périmètre immédiatement et envoie une demande structurée." },
          { title: "Prêt au lancement", text: "HTML responsive, SEO de base, contact et aide au déploiement." }
        ]
      },
      work: { kicker: "Produits sélectionnés", title: "Des preuves déjà en ligne.", text: "Un portfolio compact de services réels, expériences SaaS et automatisations avec liens publics.", open: "Ouvrir", code: "Code", video: "Vidéo", tableName: "Nom", tableDescription: "Description", tablePrice: "Prix", tableGithub: "Github", tableService: "Service", tableVideo: "Vidéo" },
      process: {
        kicker: "Processus",
        title: "D'une idée floue à une page active.",
        text: "Les décisions restent visibles, donc le design avance vite sans devenir arbitraire.",
        steps: [
          { title: "Stratégie et Offre", text: "De l'analyse de la concurrence à l'emballage des sens et à l'action principale." },
          { title: "Architecture des sens", text: "Nous concevons la structure du texte et la logique d'interaction sans décor distrayant." },
          { title: "Incarnation visuelle", text: "Nous créons une interface esthétique et responsive qui renforce votre message." },
          { title: "Démarrage technique", text: "Codage propre, configuration analytique et préparation complète au trafic." }
        ]
      },
      calc: { kicker: "Estimateur", title: "Choisissez le périmètre et envoyez un brief clair.", text: "Avancez étape par étape: type de projet, options, contacts puis vérification.", siteType: "Type de projet", siteTypeHint: "Choisissez le format de base du travail.", options: "Options", optionsHint: "Ajoutez uniquement ce dont le projet a vraiment besoin.", contactsHint: "Laissez vos contacts pour que je réponde avec la suite.", review: "Vérifier et envoyer", reviewHint: "Vérifiez l'estimation avant d'ouvrir le brouillon d'email." },
      form: { title: "Demande d'estimation", name: "Nom *", email: "Email *", phone: "Téléphone WhatsApp / Telegram *", comment: "Commentaire", submit: "Envoyer la demande", priceSourceText: "Base de prix:", priceSourceLabel: "analyse Gemini", escrowText: "Option escrow sécurisée:", assuranceData: "Le formulaire crée un brouillon d'email dans le navigateur. Aucun transfert caché." },
      summary: { type: "Projet", options: "Options", total: "Total" },
      faq: {
        kicker: "Questions",
        title: "Avant de commencer.",
        text: "Quelques détails pratiques qui décident souvent de la vitesse du projet.",
        items: [
          { q: "À quelle vitesse lancer une landing page?", a: "Une landing page ciblée prend généralement 5-7 jours si le contenu et les retours arrivent vite." },
          { q: "Le site peut-il être multilingue?", a: "Oui. Cette page prend déjà en charge le russe, l'allemand, l'anglais, le français, l'espagnol et l'ukrainien avec détection du navigateur." },
          { q: "Que se passe-t-il après l'envoi?", a: "Votre client mail s'ouvre avec un brief préparé. Je vérifie le périmètre et réponds avec les prochaines étapes." }
        ]
      },
      cta: { title: "Prêt à transformer l'offre en page?", text: "Choisissez le type de projet, ajoutez les options et envoyez le brief. Je répondrai avec les prochaines étapes.", button: "Commencer l'estimation" },
      modal: { title: "Copier le texte", text: "Si l'application mail ne s'est pas ouverte, envoyez ce texte manuellement à", copy: "Copier le texte", copied: "Copié" },
      errors: { name: "Indiquez votre nom", email: "Indiquez un email valide", phone: "Indiquez un téléphone" },
      none: "Aucune",
      emailSubject: "Demande de développement de site",
      emailLabels: { name: "Nom", email: "Email", phone: "Téléphone", comment: "Commentaire", noComment: "Non indiqué", type: "TYPE DE PROJET", options: "OPTIONS", total: "TOTAL" },
      siteTypes: {
        landing: { name: "Landing page", description: "Page de vente orientée conversion" },
        multipage: { name: "Site multi-pages", description: "Site corporate jusqu'à 5 pages" },
        shop: { name: "Boutique en ligne", description: "E-commerce with catalog and payment" },
        complex: { name: "Produit sur mesure", description: "Service, portail or solution individuelle" }
      },
      optionsCopy: {
        payments: { name: "Intéгration paiement", bonus: "Stripe, PayPal ou autre scénario de paiement." },
        responsive: { name: "Mise en page Mobile First", bonus: "Comportement responsive pour le trafic mobile." },
        seo: { name: "SEO de base", bonus: "Structure et métadonnées favorables à l'indexation." },
        admin: { name: "Admin CMS", bonus: "Modifier le contenu sans toucher au code." },
        content: { name: "Intégration contenu", bonus: "Textes, images et produits placés avant lancement." },
        deployment: { name: "Déploiement serveur", bonus: "Hébergement, domaine et publication configurés." }
      },
      projectDescriptions: {
        "Energo-pass": "Calcule le passeport énergétique d'un bâtiment",
        "5D": "Construit un schéma de bâtiment 5D",
        "Calendar-logging": "Collecte des données de métriques dans un calendrier",
        "Fertig-Lance": "Marketplace freelance gratuite",
        "CRM": "Plateforme CRM",
        "Translate Bot": "Bot Telegram de traduction",
        "Europe-estate Bot": "Bot Telegram de recherche immobilière"
      }
    },
    es: {
      nav: { work: "Proyectos", process: "Proceso", price: "Precio", faq: "FAQ", cta: "Estimar" },
      hero: {
        eyebrow: "Productos web para crecimiento medible",
        title: "Lanza un sitio que vende antes de explicar.",
        lead: "Diseño y desarrollo landing pages, sitios de servicio y herramientas web con una oferta clara, UX precisa y camino directo del clic a la solicitud.",
        primary: "Calcular proyecto",
        secondary: "Ver portfolio",
        proofProjects: "productos publicados",
        proofDays: "días para landing",
        proofLangs: "idiomas",
        visualKicker: "Inicio típico",
        visualTitle: "Landing page con estrategia, diseño y desarrollo responsive"
      },
      trust: {
        kicker: "Por qué empezar aquí",
        title: "Velocidad de equipo pequeño con pensamiento de producto.",
        text: "La página se diseña como un sistema de ventas: oferta, prueba, fricción, confianza, contacto y lanzamiento.",
        items: [
          { title: "Estructura de conversión", text: "El primer bloque aclara la oferta y las secciones siguientes reducen dudas." },
          { title: "Mobile first", text: "Layouts, formularios y botones se planifican primero para móviles." },
          { title: "Precio transparente", text: "El visitante estima el alcance al instante y envía una solicitud estructurada." },
          { title: "Listo para lanzar", text: "HTML responsive, SEO básico, flujo de contacto y soporte de despliegue." }
        ]
      },
      work: { kicker: "Productos seleccionados", title: "Pruebas que ya están online.", text: "Un portfolio compacto de servicios reales, experimentos SaaS y automatizaciones con enlaces públicos.", open: "Abrir", code: "Código", video: "Video", tableName: "Nombre", tableDescription: "Descripción", tablePrice: "Precio", tableGithub: "Github", tableService: "Servicio", tableVideo: "Video" },
      process: {
        kicker: "Proceso",
        title: "De idea difusa a página funcional.",
        text: "Las decisiones quedan visibles, así el diseño avanza rápido sin volverse aleatorio.",
        steps: [
          { title: "Estrategia y Oferta", text: "Del análisis de la competencia al empaque de significados y la acción principal." },
          { title: "Arquitectura de significados", text: "Diseñamos la estructura del texto y la lógica de interacción sin decorados que distraigan." },
          { title: "Encarnación visual", text: "Creamos una interfaz estética y adaptable que refuerza tu mensaje." },
          { title: "Inicio técnico", text: "Maquetación limpia, configuración de analítica y preparación completa para recibir tráfico." }
        ]
      },
      calc: { kicker: "Estimador", title: "Elige alcance и envía un brief claro.", text: "Avanza paso a paso: tipo de proyecto, opciones, contactos y revisión final.", siteType: "Tipo de proyecto", siteTypeHint: "Elige el formato base del trabajo.", options: "Opciones", optionsHint: "Añade solo lo que el proyecto realmente necesita.", contactsHint: "Deja tus contactos para que pueda responder con el siguiente paso.", review: "Revisar и enviar", reviewHint: "Revisa la estimación antes de abrir el borrador de email." },
      form: { title: "Solicitar estimación", name: "Nombre *", email: "Email *", phone: "Teléfono WhatsApp / Telegram *", comment: "Comentario", submit: "Enviar solicitud", priceSourceText: "Base de precios:", priceSourceLabel: "análisis Gemini", escrowText: "Opción escrow segura:", assuranceData: "El formulario crea un borrador de email en tu navegador. Sin transferencia oculta de datos." },
      summary: { type: "Proyecto", options: "Options", total: "Total" },
      faq: {
        kicker: "Preguntas",
        title: "Antes de empezar.",
        text: "Algunos detalles prácticos que normalmente deciden la velocidad del proyecto.",
        items: [
          { q: "¿Qué tan rápido puede lanzarse una landing?", a: "Una landing enfocada suele tomar 5-7 días si el contenido y el feedback llegan rápido." },
          { q: "¿El sitio puede ser multilingüe?", a: "Sí. Esta página ya soporta ruso, alemán, inglés, francés, español y ucraniano con detección del navegador." },
          { q: "¿Qué pasa después de enviar?", a: "Se abre tu cliente de correo con un brief preparado. Reviso el alcance y respondo con los próximos pasos." }
        ]
      },
      cta: { title: "¿Listo para convertir la oferta en página?", text: "Elige el tipo de proyecto, añade opciones и envía el brief. Responderé con los siguientes pasos.", button: "Iniciar estimación" },
      modal: { title: "Copiar texto de solicitud", text: "Si la app de correo no se abrió, envía este texto manualmente a", copy: "Copiar texto", copied: "Copiado" },
      errors: { name: "Introduce tu nombre", email: "Introduce un email válido", phone: "Introduce un teléfono" },
      none: "Ninguna",
      emailSubject: "Solicitud de desarrollo web",
      emailLabels: { name: "Nombre", email: "Email", phone: "Teléfono", comment: "Comentario", noComment: "No indicado", type: "TIPO DE PROYECTO", options: "OPCIONES", total: "TOTAL" },
      siteTypes: {
        landing: { name: "Landing page", description: "Página de venta enfocada en conversión" },
        multipage: { name: "Sitio multipágina", description: "Sitio corporativo hasta 5 páginas" },
        shop: { name: "Tienda online", description: "E-commerce with catalog and payment" },
        complex: { name: "Producto a medida", description: "Producto a medida" }
      },
      optionsCopy: {
        payments: { name: "Integración de pagos", bonus: "Stripe, PayPal u otro flujo de pago." },
        responsive: { name: "Diseño Mobile First", bonus: "Comportamiento responsive para tráfico móvil." },
        seo: { name: "SEO básico", bonus: "Estructura и metadatos amigables para indexación." },
        admin: { name: "Admin CMS", bonus: "Editar contenido sin tocar código." },
        content: { name: "Carga de contenido", bonus: "Textos, imágenes и productos colocados antes del lanzamiento." },
        deployment: { name: "Despliegue en servidor", bonus: "Hosting, dominio и publicación configurados." }
      },
      projectDescriptions: {
        "Energo-pass": "Calcula el pasaporte energético de un edificio",
        "5D": "Construye un esquema 5D de un edificio",
        "Calendar-logging": "Recopila datos de métricas en un calendario",
        "Fertig-Lance": "Marketplace freelance gratuito",
        "CRM": "Plataforma CRM",
        "Translate Bot": "Bot traductor de Telegram",
        "Europe-estate Bot": "Bot de búsqueda de inmuebles de Telegram"
      }
    },
    ua: {
      nav: { work: "Роботи", process: "Процес", price: "Ціна", faq: "FAQ", cta: "Розрахунок" },
      hero: {
        eyebrow: "Веб-продукти для вимірного зростання",
        title: "Запустіть сайт, який продає до пояснень.",
        lead: "Я проєктую та розробляю лендинги, сервісні сайти та веб-інструменти з ясним оффером, акуратним UX та прямим шляхом від першого кліку до заявки.",
        primary: "Розрахувати проєкт",
        secondary: "Дивитися портфоліо",
        proofProjects: "запущених продуктів",
        proofDays: "днів на лендинг",
        proofLangs: "мов сайту",
        visualKicker: "Типовий старт",
        visualTitle: "Лендинг зі стратегією, дизайном та адаптивною версткою"
      },
      trust: {
        kicker: "Чому приходять сюди",
        title: "Швидкість маленької команди та продуктова логіка.",
        text: "Сторінка збирається як система продажів: оффер, докази, заперечення, довіра, форма заявки та деталі запуску проєктуються разом.",
        items: [
          { title: "Конверсійна структура", text: "Перший екран швидко пояснює цінність, а наступні блоки поступово знімають сумніви." },
          { title: "Mobile First", text: "Макети, форми та кнопки спочатку продумуються для смартфона, потім масштабуються." },
          { title: "Прозора ціна", text: "Відвідувач відразу оцінює обсяг робіт і надсилає структуровану заявку." },
          { title: "Готовність до запуску", text: "Адаптивна верстка, базовое SEO, контактний сценарій та допомога з деплоєм." }
        ]
      },
      work: { kicker: "Обрані продукти", title: "Роботи, які вже запущені.", text: "Компактное портфоліо реальних сервісів, SaaS-експериментів та автоматизацій з відкритими посиланнями.", open: "Відкрити", code: "Код", video: "Відео", tableName: "Ім'я", tableDescription: "Опис", tablePrice: "Ціна", tableGithub: "Github", tableService: "Сервіс", tableVideo: "Відео" },
      process: {
        kicker: "Процес",
        title: "Від розмитої ідеї до робочої сторінки.",
        text: "Рішення залишаються видимими, тому дизайн рухається швидко і не перетворюється на випадковий набір прикрас.",
        steps: [
          { title: "Стратегія та Оффер", text: "Від аналізу конкурентів до упаковки сенсів та головної цільової дії." },
          { title: "Архітектура сенсів", text: "Проєктуємо структуру тексту та логіку взаємодії без відволікаючого декору." },
          { title: "Візуальне втілення", text: "Створюємо естетичний, адаптивний інтерфейс, який посилює ваше повідомлення." },
          { title: "Технічний старт", text: "Чиста верстка, налаштування аналітики та повна підготовка до прийому трафіку." }
        ]
      },
      calc: { kicker: "Калькулятор", title: "Виберіть обсяг та надішліть зрозумілий бриф.", text: "Рухайтеся за кроками зверху вниз: тип проєкту, опції, контакти та перевірка підсумку.", siteType: "Тип проєкту", siteTypeHint: "Виберіть базовий формат роботи.", options: "Опції", optionsHint: "Добавте тільки те, що дійсно потрібно проєкту.", contactsHint: "Залиште контакти, щоб я відповів з наступним кроком.", review: "Перевірте підсумок", reviewHint: "Перевірте розрахунок перед відкриттям чернетки листа." },
      form: { title: "Заявка на розрахунок", name: "Ім'я *", email: "Email *", phone: "Телефон WhatsApp / Telegram *", comment: "Коментар", submit: "Надіслати заявку", priceSourceText: "Обґрунтування цін:", priceSourceLabel: "аналіз Gemini", escrowText: "Безпечна угода:", assuranceData: "Форма створює чернетку листа в браузері. Прихованої відправки даних немає." },
      summary: { type: "Проєкт", options: "Опції", total: "Разом" },
      faq: {
        kicker: "Питання",
        title: "Перед стартом.",
        text: "Кілька практичних деталей, від яких зазвичай залежить швидкість проєкту.",
        items: [
          { q: "Як швидко можна запустити лендинг?", a: "Сфокусований лендинг зазвичай займає 5-7 днів, якщо контент та зворотний зв'язок приходять швидко." },
          { q: "Чи можна зробити сайт багатомовним?", a: "Так. Ця сторінка вже підтримує російську, німецьку, англійську, французьку, іспанську та українську з автовизначенням мови браузера." },
          { q: "Що буде після відправки заявки?", a: "Відкриється поштовий клієнт із готовим брифом. Я подивлюся обсяг і відповім з подальшими кроками." }
        ]
      },
      cta: { title: "Готові перетворити оффер на сторінку?", text: "Виберіть тип проєкту, додайте опції та надішліть бриф. Я відповім з подальшими кроками.", button: "Почати розрахунок" },
      modal: { title: "Скопіюйте текст заявки", text: "Якщо поштовий клієнт не відкрився, надішліть цей текст вручну на", copy: "Скопіювати текст", copied: "Скопійовано" },
      errors: { name: "Введіть ім'я", email: "Введіть коректний email", phone: "Введіть телефон" },
      none: "Не вибрано",
      emailSubject: "Заявка на розробку сайту",
      emailLabels: { name: "Ім'я", email: "Email", phone: "Телефон", comment: "Коментар", noComment: "Не вказано", type: "ТИП ПРОЄКТУ", options: "ОПЦІЇ", total: "РАЗОМ" },
      siteTypes: {
        landing: { name: "Лендинг", description: "Продаюча сторінка" },
        multipage: { name: "Багатосторінковий сайт", description: "Корпоративний сайт до 5 сторінок" },
        shop: { name: "Інтернет-магазин", description: "Каталог, кошик та оплата" },
        complex: { name: "Складний проєкт", description: "Сервіс, портал або індивідуальне рішення" }
      },
      optionsCopy: {
        payments: { name: "Інтеграція з оплатою", bonus: "Підключення Stripe, PayPal або іншого платіжного сценарію." },
        responsive: { name: "Mobile First верстка", bonus: "Акуратна адаптація під трафік зі смартфонів." },
        seo: { name: "Базове SEO", bonus: "Структура та метаданні для коректної індексації." },
        admin: { name: "Адмін-панель CMS", bonus: "Редагування контенту без правки кода." },
        content: { name: "Наповнення контентом", bonus: "Тексти, зображення та товари розміщуються до запуску." },
        deployment: { name: "Розгортання на сервері", bonus: "Налаштування хостингу, домену та публікації." }
      },
      projectDescriptions: {
        "Energo-pass": "Рахує енергетичний паспорт будівлі",
        "5D": "Будує 5D схему будівлі",
        "Calendar-logging": "Збирає дані за метриками в календарі",
        "Fertig-Lance": "Безкоштовна фріланс-біржа",
        "CRM": "CRM-платформа",
        "Translate Bot": "Telegram-бот перекладач",
        "Europe-estate Bot": "Telegram-бот пошуку нерухомості"
      }
    }
  },

  deepGet(source, path) {
    return path.split(".").reduce((value, key) => {
      if (Array.isArray(value)) return value[Number(key)];
      return value ? value[key] : undefined;
    }, source);
  },

  detectLanguage() {
    const browserLanguages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (const item of browserLanguages) {
      const short = String(item).slice(0, 2).toLowerCase();
      if (this.supportedLanguages.includes(short)) return short;
    }

    return "en";
  },

  t(path, lang = "en") {
    return this.deepGet(this.translations[lang], path) ?? this.deepGet(this.translations.en, path) ?? path;
  }
};
