export default defineI18nLocale(async () => {
  return {
    title: "Лог распрацоўніка",
    header: { article: "Артыкулы", author: "Пра аўтара", project: "Праекты" },
    dialog: { accept: "Прыняць", decline: "Адхіліць" },
    cookie: {
      title: "Мы выкарыстоўваем кукі. Гэта дазваляе нам аналізаваць узаемадзеянне наведвальнікаў з сайтам і рабіць яго лепш.",
      description: "Працягваючы карыстанне сайтам, вы згаджаецеся з выкарыстаннем файлаў cookie."
    },
    error: {
      title: "Адбылася памылка!",
      description: "Каманда катоў-распрацоўшчыкаў ужо працуе над тым, каб устараніць дадзеную памылку.",
      retry: "Паспрабуйце перайсці пазней або перайсці на галоўную старонку",
      go: "На галоўную старонку"
    },
    time: {
      year: {
        less: "Менш {n} гады | Менш {n} гадоў",
        fact: "{n} год | {n} года | {n} гадоў",
        more: "Больш за {n} года | Больш за {n} гадоў"
      }
    },
    projects: {
      developerLog: {
        short: "Адзін з маіх самых вялікіх праектаў",
        long: {
          1: "Developer Log - Адзін з маіх найбуйнейшых праектаў. Я рабіў яго больш для сябе, чым для іншых людзей, бо не знайшоў нармальнай платформы, дзе мог бы дзяліцца ведамі.",
          2: "На распрацоўку дадзенага блога я выдаткаваў крыху больш за год (дадзеная версія - ужо 3я ітэрацыя), асноўная аўдыторыя прыходзіць на дадзены блог з іншых парталаў. Гэты праект з'яўляецца назапашваннем маіх ведаў з розных галін."
        }
      },
      capybara: {
        short: "Крос-платформеннае прыкладанне для код-рэўю",
        long: {
          1: "Capybara - кросплатформавы дадатак для код-рэўю, якое створана для таго каб палегчыць сам працэс код-рэўю.",
          2: "Прыкладанне мае інтэграцыю з Github і Gitlab, а таксама можа працаваць аўтаномна з лакальным рэпазітаром."
        }
      }
    },
    hardware: {
      browser: "Браўзэр",
      cliEditor: "Кансольны рэдактар",
      editor: "Рэдактар",
      headphone: "Навушнікі",
      keyboard: "Клавіятура",
      pc: "Асноўны ПК",
      search: "Пошук",
      terminal: "Тэрмінал"
    },
    stack: {
      purpose: {
        first: "Першая мова праграмавання",
        main: "Асноўная мова праграмавання",
        backend: "Мова праграмавання, які я выкарыстоўваю для бэкенда",
        fun: "Мова праграмавання, які я вывучаю проста так 🌝"
      }
    },
    page: {
      license: {
        tabTitle: "Ліцэнзія",
        title: "Ліцэнзіі",
        source: "Крыніца",
        license: "Ліцэнзія",
        phrase: {
          test: "Тэсты на",
          host: "Хосціцца на",
          store: "Захоўваецца на",
          made: "Зроблена з дапамогай",
          work: "Працуе дзякуючы",
          thanks: "Асобны дзякуй"
        }
      },
      projects: {
        tabTitle: "Праекты",
        stack: "Стэк",
        links: "Спасылкі",
        chooseTitle: "Абярыце адзін з праектаў",
        chooseDescription: "Для таго каб працягнуць, вам трэба выбраць адзін з праектаў са спісу."
      },
      home: {
        tabTitle: "Хатняя",
        title: "Лог распрацоўніка",
        description: "Лог распрацоўкі вачыма распрацоўніка",
        hero: "\"Лог распрацоўшчыка\" - блог, які піша распрацоўшчык для іншых распрацоўшчыкаў. Тут знаходзяцца артыкулы і нататкі аб сучасных вэб-тэхналогіях і метадах распрацоўкі. Я дзялюся сваім вопытам, ведамі і падаю даступныя кіраўніцтва па апусканні ў свет распрацоўкі ад асноў да прасунутых тэхнік. Асаблівасць блога - зразумелы выклад складаных тэм для шырокай аўдыторыі. Будзьце ў курсе найноўшых тэндэнцый і паляпшайце свае навыкі разам з \"Логам распрацоўшчыка\".",
        telegramButton: "Перайсці ў тэлеграм",
        subtitle: "Перайсці да чытання"
      },
      posts: {
        tabTitle: "Артыкулы",
        searchPlaceholder: "Знайсці запіс па назве, апісанні ці тэгу...",
        showNotes: "Паказаць нататкі",
        stubTitle: "Нічога не знойдзена",
        stubInfo: "Па вашым запыце нічога не знойдзена.",
        stubTryAgain: "Праверце поле пошуку на памылкі друку або напішыце іншы запыт."
      },
      author: {
        tabTitle: "Аўтар",
        hello: "Прывітанне!",
        me: "Я - вопытны фронтэнд-распрацоўшчык з больш чым чатырма гадамі паспяховага вопыту ў стварэнні і паляпшэнні прыкладанняў. Мае навыкі і веды ахопліваюць шырокі спектр сучасных вэб-тэхналогій, што дазваляе мне распрацоўваць высакаякасныя і інтуітыўна зразумелыя дадатку.",
        pursuit: "Я імкнуся працягваць расці як фронтэнд-распрацоўшчык, уносячы свой уклад у развіццё сучасных і інавацыйных вэб-прыкладанняў. Я актыўна вяду блог, а таксама пішу на VC, Habr і ў Telegram.",
        role: "Мая роля ўключала распрацоўку і падтрымку вэб-прыкладанняў, забеспячэнне іх адаптыўнасці і крос-браўзэрнай сумяшчальнасці, а таксама інтэграцыю з бэкэнд-сэрвісамі. Я актыўна ўдзельнічаў у архітэктурных рашэннях і заўсёды імкнуся да паляпшэння працэсаў распрацоўкі."
      }
    }
  };
});
