const dialog = {
    start: {
        msg: "Здравствуйте! Вы занимаетесь безопасностью компов?",
        options: [
            { text: "Добрый день! Да, все верно", next: "ok" },
            { text: "Ну бывает, шаманю туда сюда", next: "norm" },
            { text: "АААААААААААААААА женщина!!!!!", next: "bad" }
        ]
    },
    ok: {
        msg: "Как я могу к вам обращаться?",
        options: [
            { text: "Извините, но я не раскрываю свою личность", next: "mov" },
            { text: "Кавасаки, приятно познакомится", next: "mov" },
            { text: "Можно просто по нику - док", next: "mov" },
            { text: "Не думаю что это так важно, так что вы хотели?", next: "mov" }
        ]
    },
    norm: {
        msg: "Понятно...",
        options: [
            { text: "Так что ты хотела?", next: "job0" },
            { text: "Ясно)", next: "bad" }
        ]
    },
    bad: {
        msg: "*Пользователь ограничил круг ли которые могут ему писать*",
        options: []
        
    },
    mov: { 
        msg: "Хорошо, я поняла. Я - Ольга.",
        options: [
            { text: "АААААААААААААААА женщина!!!!!", next: "bad" },
            { text: "Очень приятно. Так а что вы хотели?", next: "job0" },
            { text: "У меня так улитку зовут, лол :)", next: "hat" },//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
             { text: "Стоп, а почему у тебя такой загорелый аватар?", next: "haiti_start" } // Новая ветка!
        ]
    },
    haiti_start: {
        msg: "О... это с Гаити. Я там была... странная история.",
        options: [
            { text: "Расскажи!", next: "haiti_story" },
            { text: "Ты точно не пиратский бот?", next: "pirate_bot" },
            { text: "Это из-за котов, да?", next: "haiti_cats" }
        ]
    },
    haiti_story: {
        msg: "Я поехала туда как турист... но *случайно* попала на *тайную вечеринку вуду-программистов*!",
        options: [
            { text: "ЧТО.", next: "voodoo_code" },
            { text: "Это как Hackathon, но с куклами?", next: "hackathon" },
            { text: "И там тоже были коты?", next: "haiti_cats" }
        ]
    },
    voodoo_code: {
        msg: "Да! Они *компилировали заклинания* на *древнем COBOL*! А потом... *оживили* старый сервер!",
        options: [
            { text: "Это же Digital Zombies!", next: "zombies" },
            { text: "А при чём тут твой загар?", next: "sunburn" },
            { text: "Ты там ничего... *не скачала*?", next: "haiti_download" }
        ]
    }, 
    zombies: {
        msg: "Хуже! Они заставили его *майнить крипту*! Но *на бумаге*!",
        options: [
            { text: "Блокчейн на папирусе?", next: "papyrus" },
            { text: "И что, это работало?!", next: "it_worked" },
            { text: "Ты участвовала?", next: "olga_involved" }
        ]
    },
    papyrus: {
        msg: "ДА! Но потом *пришли обезьяны* и *съели* половину транзакций!",
        options: [ 
            { text: "Это же натуральный 51% attack!", next: "attack" },
            { text: "Значит, обезьяны — новые киберпреступники?", next: "monkeys" },
            { text: "И как ты выжила?", next: "escape" }
        ]
    },
    attack: {
        msg: "Именно! Пришлось *переписывать* блокчейн... *на банановых листьях*!",
        options: [
            { text: "И... это сработало?", next: "banana_chain" },
            { text: "Ты теперь в чёрном списке обезьян?", next: "blacklist" },
            { text: "Это и есть *настоящий Web3*?", next: "web3" }
        ]
    },
    banana_chain: {
        msg: "Нет! Листья *сгнили*! Зато теперь у меня есть *NFT обезьяны с Гаити*!",
        options: [
            { text: "Это же Bored Ape Haiti Club!", next: "bored_ape" },
            { text: "Ты продала его?", next: "sold" },
            { text: "Вернёмся к котам...", next: "job0" } // Возврат в основную ветку
        ]
    },
    bored_ape: {
        msg: "Да! Но он *моргает*... и *шепчет* что-то про *бананы*...",
        options: [
            { text: "Ольга, ты в порядке?!", next: "olga_ok" },
            { text: "Может, это вирус?", next: "virus" },
            { text: "Это лучше, чем коты!", next: "happy_end" }
        ]
    },
        
    
    hat: {
        msg: "О... Улитка? Это... мило. Но у меня нет времени на болтовню!",
        options: [
            { text: "Ладно-ладно, работаем", next: "job0" },
            { text: "А у тебя есть улитка? :3", next: "hat1" },
            { text: "Ты точно не ChatGPT в образе женщины?", next: "sus" }
        ]
    },
    sus: {
        msg: "ЧТО? НЕТ! Я реальный человек! *нервно стирает следы 'OpenAI' на фоне*",
        options: [
            { text: "Ладно, верю... пока что", next: "job0" },
            { text: "А скажи 'криптовалюта' пять раз быстро", next: "scam" },
            { text: "*Проверить IP*", next: "bad" }
        ]
    },
    job0: {
        msg: "Дело в том, что у меня есть бабушка",
        options: [
            { text: "И?", next: "job1" },
            { text: "Ближе к делу...", next: "job1" },
            { text: "ААААААААААА две женщины!!!!!", next: "bad" }
        ]
    },
    job1: {
        msg: "И недавно она завела себе страничку в Оk",
        options: [
            { text: "Еееее клевая соц сеть кста", next: "hat1" },//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            { text: "И скачала терабайты миленьких котят?", next: "kot" },
            { text: "Дайте угадаю, нужно поставить пароль?)", next: "job2" }
        ]
    },
    hat1: {
        msg: "Что? Нет! Это же помойка 2007 года! Ладно, неважно...",
        options: [
            { text: "Но там же были 'Кто ты из Winx'!", next: "winx" },
            { text: "Ладно, прости, продолжаем", next: "job2" },
            { text: "А ты помнишь свой пароль от ОК?", next: "phish" }
        ]
    },
    winx: {
        msg: "*вздох* Я была Техной...",
        options: [
            { text: "О, значит, ты разбираешься в технологиях!", next: "tech" },
            { text: "А я был Музой (нет)", next: "bad" },
            { text: "Так вот почему ты про компы спрашиваешь!", next: "job" }
        ]
    },
    job2: {
        msg: "Что? Да нет же, просто бабушка скачала терабайты миленьких котят",
        options: [
            { text: "Оу...", next: "job3" },
            { text: "Так и знал)", next: "job3" },
            { text: "А в чем собственно проблема?", next: "job3" }
        ]
    },
    kot: {
        msg: "ДА! Как вы догадались?",
        options: [
            { text: "Просто я профи ;)", next: "job3" },
            { text: "Да так, бывали случаи...", next: "job3" },
            { text: "Интуиия. А в чем проблема то?", next: "job3" }
        ]
    },
    job3: {
        msg: "Ну так вот. Дело в том, что они все заблокировались",
        options: [
            { text: "ЕЕЕщkЕЕeeЕРЕЕЕeЕЕЕ", next: "bad" },
            { text: "ОООооо нет! Её коты... Всё пропало....", next: "kot2" },
            { text: "Хм, а что она делала до блокировки?", next: "job4" },
            { text: "Кто они? Кто они то? Я один в этой комнате!", next: "ter" }
        ]
    },
    kot2: {
        msg: "Воооот! Я О ТОМ ЖЕ!",
        options: [
            { text: "Ну это не по моей части...", next: "bad" },
            { text: "Попробуем исправить", next: "job4" },
            { text: "Хм, а что она делала до блокировки?", next: "job4" }
        ]
    },
    scam: {
        msg: "Крипто... В смысле? Я не сигма-нейросеть, если ты об этом! Я реальный человек! *нервно закрывает вкладку с ChatGPT*",
        options: [
            { text: "А ну-ка прочитай капчу: 'Сколько будет 2+2*2?'", next: "captcha" },
            { text: "Ладно, поверю... пока что", next: "job3" },
            { text: "*Блокировать и бежать*", next: "bad" }
        ]
    },

    captcha: {
        msg: "Эээ... 8? Нет, 6! Или... *звуки перегрева процессора*",
        options: [
            { text: "Всё, ты разоблачена, Skynet.", next: "bad" },
            { text: "Ладно, проехали. Так про котов?", next: "job3" },
            { text: "А если найду твой IP?", next: "ip_leak" }
        ]
    },

    ip_leak: {
        msg: "Ч-что? Нет! Мой IP — это... 127.0.0.1! *паника*",
        options: [
            { text: "Оу... localhost... Ты вообще существуешь?", next: "bad" },
            { text: "Шутка. Давай по делу.", next: "job3" },
            { text: "А ну-ка покажи мне свой hosts файл!", next: "bad" }
        ]
    },  
    ter: {
        msg: "Ну как кто? Террабайты котиков. Да и вообще всё!",
        options: [
            { text: "ЕЕЕщkЕЕeeЕРЕЕЕeЕЕЕ", next: "bad" },
            { text: "Хм, а что она делала до блокировки?", next: "job4" },
            { text: "Пупупу... и собаки тоже?", next: "ter1" }
        ]
    },
    ter1: {
        msg: "Что? Коты! КОТЫ! Фотографии котят! Они все стали... *чёрно-белыми*!",
        options: [
            { text: "О нет... это же цифровая смерть!", next: "matrix" },
            { text: "Может, она просто фильтр применила?", next: "filter" },
            { text: "Бабушка — агент Матрицы.", next: "bad" }
        ]
    },

    matrix: {
        msg: "Ты понимаешь, да?! Это заговор! Бабушка говорила, что видела 'зелёные цифры' перед блокировкой!",
        options: [
            { text: "Надо срочно звать Нео.", next: "bad" },
            { text: "И... она тыкала в них пальцем?", next: "neo" },
            { text: "Это просто глюк видеокарты.", next: "gpu" }
        ]
    },

    neo: {
        msg: "ДА! И ещё кричала 'ЭТО ЖЕ МОИ КОТЯТА, ВЕРНИТЕ ИХ!'",
        options: [
            { text: "Бабушка — избранная. Мы все обречены.", next: "bad" },
            { text: "Ладно, попробуем 'восстановить' их...", next: "recover" },
            { text: "А коты хотя бы в порядке?", next: "cats_ok" }
        ]
    }, recover: {
        msg: "Ты сможешь?! Я слышала, нужно что-то типа... 'хакнуть главныйframe'?",
        options: [
            { text: "*Начать стучать по клавиатуре* Я В ЗАКЕ!", next: "hack" },
            { text: "Нет, просто перезагрузите ПК.", next: "reboot" },
            { text: "Главныйframe — это холодильник?", next: "bad" }
        ]
    },

    hack: {
        msg: "*Экран становится зелёным, курсор мигает* Ух ты! Ты и правда хакер!",
        options: [
            { text: "Я просто открыл Блокнот...", next: "bad" },
            { text: "Где мои 500 рублей за работу?", next: "money" },
            { text: "Теперь коты — это NFT.", next: "nft" }
        ]
    }, nft: {
        msg: "ЧТО?! Нет! Они же должны быть в альбоме 'Мои котики 2010'! *рыдает*",
        options: [
            { text: "Поздравляю, бабушка — криптомиллионер.", next: "bad" },
            { text: "Шутка. Всё на месте.", next: "happy_end" },
            { text: "*Продать котов на OpenSea*", next: "bad" }
        ]
    },

    happy_end: {
        msg: "Фух... Спасибо! Держи печеньку *передаёт .exe файл*",
        options: [
            { text: "*Запустить*", next: "bad" },
            { text: "Спасибо, но я на диете.", next: "bad" },
            { text: "А печенька с вирусом?", next: "bad" }
        ]
    },
    job4: {
        msg: "Она пыталась их 'улучшить' в Фотошопе! Но вместо этого... они стали *пиксельными*!",
        options: [
            { text: "Бабушка — тайный цифровой художник?", next: "deep_fake" },
            { text: "Может, она просто нажала 'Сохранить для Web'?", next: "web_save" },
            { text: "О нет... это же JPEG-артефакты!", next: "jpeg_horror" }
        ]
    },
    deep_fake: {
        msg: "Хуже! Она использовала *нейросеть*! Но зачем-то вводила запрос 'коты, но как в 90-е'... эхх её молодость. Ей тогда было 14.1 лет",
        options: [
            { text: "И... они превратились в низкополигональных?", next: "low_poly" },
            { text: "А что было в папке 'Мои эксперименты'?", next: "experiments" },
            { text: "Бабушка — первопроходец в AI-арте?", next: "ai_art" }
        ]
    },
    low_poly: {
        msg: "ДА! Теперь это *коты из PS1*! И они... *двигаются*...",
        options: [
            { text: "Она случайно не сохранила их как .gif?", next: "ps1_gif" },
            { text: "Это же ретро-стиль! Модно!", next: "retro" },
            { text: "Бабушка хакнула матрицу...", next: "matrix_hack" }
        ]
    },
    ps1_gif: {
        msg: "Хуже. В *видеоформате*... с *артефактами сжатия*...",
        options: [
            { text: "Это уже цифровая археология...", next: "archeology" },
            { text: "Может, попробуем 'восстановить' через AI?", next: "ai_fix" },
            { text: "Бабушка — тайный ретрогеймер?", next: "retro_gamer" }
        ]
    },
    archeology: {
        msg: "Теперь они в *разрешении 320x240*... и у них *вместо глаз — пиксели*...",
        options: [
            { text: "Это уже не коты, это creepypasta...", next: "creepy" },
            { text: "Может, просто переустановить Windows?", next: "reboot" },
            { text: "Бабушка создала новый жанр искусства!", next: "happy_end" }
        ]
},
pirate_bot: {
    msg: "ЧТО? Нет! Хотя... *нервно прячет попугая за спиной* Это просто хобби!",
        options: [
            { text: "Ты же не будешь меня взламывать на 'SQL-инъекции'?", next: "sql_pirate" },
            { text: "А где твой корабль?", next: "ship" },
            { text: "Ладно, вернемся к котам...", next: "job0" }
        ]
},
sql_pirate: {
    msg: "Я бы никогда! Хотя... 'SELECT * FROM users WHERE password = '12345'... ой!",
        options: [
            { text: "Это же хакерство!", next: "hack_panic" },
            { text: "Ты забыла WHERE 1=1", next: "bad" },
            { text: "Может, лучше про бабушку?", next: "job0" }
        ]
},
hack_panic: {
    msg: "Нет-нет! Это... цитата из фильма! *стирает скрипты с рабочего стола*",
        options: [
            { text: "Какого фильма?!", next: "bad" },
            { text: "Ладно, твой секрет в безопасности", next: "job0" },
            { text: "*Проверить историю браузера*", next: "bad" }
        ]
},
haiti_cats: {
    msg: "О БОЖЕ, ДА! Там были *коты-вуду*! Они... *перекомпилировали* мою фотку в JPEG!",
        options: [
            { text: "И теперь у тебя 5 пикселей вместо лица?", next: "jpeg_face" },
            { text: "Это же цифровое колдовство!", next: "voodoo_digital" },
            { text: "Вернемся к бабушкиным котам...", next: "job0" }
        ]
},
jpeg_face: {
    msg: "Хуже! Теперь я *вечно моргаю* на аватарке! *показывает артефакты*",
        options: [
            { text: "Это новый NFT-тренд!", next: "nft_trend" },
            { text: "Может, это вирус?", next: "cat_virus" },
            { text: "Ольга... ты точно человек?", next: "bad" }
        ]
},
haiti_download: {
    msg: "*нервный смешок* Нет! Абсолютно ничего! *файл 'voodoo_crack.exe' странно шевелится в папке*",
        options: [
            { text: "Ольга...", next: "bad" },
            { text: "Ты скачала пиратский софт?!", next: "pirate_soft" },
            { text: "Ладно, проехали. Коты?", next: "job0" }
        ]
},
cat_virus: {
    msg: "НЕТ! Это... фича! Теперь моя аватарка *заражает* чужие профили тем же эффектом!",
        options: [
            { text: "Это же цифровая чума!", next: "plague" },
            { text: "Ты создала мем-вирус?", next: "meme_virus" },
            { text: "*Проверить антивирус*", next: "bad" }
        ]
},
plague: {
    msg: "Уже 10 жертв! Их фото тоже *моргают*! И одна... *глючит в такт Reggaeton*!",
        options: [
            { text: "Это апокалипсис соцсетей!", next: "apocalypse" },
            { text: "А коты тоже заражены?", next: "cats_infected" },
            { text: "Надо сжечь интернет.", next: "bad" }
        ]
},
meme_virus: {
    msg: "Да! Но *случайно*! Теперь это тренд в TikTok... а я не могу признаться!",
        options: [
            { text: "Ты — невольный IT-террорист", next: "terrorist" },
            { text: "Продай историю СМИ и богатей", next: "sell_story" },
            { text: "А бабушка в курсе?", next: "grandma_knows" }
        ]
},
pirate_soft: {
    msg: "Ну... только *один* взломанный Photoshop! Для... *восстановления котов*!",
        options: [
            { text: "И как, помогло?", next: "photoshop_fail" },
            { text: "Ты взломала Adobe ради котят?", next: "adobe_hack" },
            { text: "Бабушка научила тебя пиратить?", next: "bad" }
        ]
},
photoshop_fail: {
    msg: "Нет! Теперь коты *в формате .bmp* и весят *300 ГБ*!",
        options: [
            { text: "Это не коты, это арт-хаос!", next: "art_chaos" },
            { text: "Зато без артефактов...", next: "no_artifacts" },
            { text: "Бабушка одобряет?", next: "grandma_rating" }
        ]
},
adobe_hack: {
    msg: "Я пыталась! Но вместо этого *взломала ColdFusion*... и теперь *у меня подписка до 3023 года*!",
        options: [
            { text: "Это не взлом, это подвиг!", next: "hero" },
            { text: "Значит, ты всё же пират?", next: "pirate_confirmed" },
            { text: "Может, хватит взламывать?", next: "job0" }
        ]
},
};
// Добавляем новые связующие узлы
const extendedDialog = {
    ...dialog,
    // Связка между историей про Гаити и основной веткой
    job0_after_haiti: {
        msg: "Ладно, вернемся к бабушке и её котам...",
        options: [
            { text: "Да, рассказывай дальше", next: "job1" }
        ]
    },
    // Связка между пиратским софтом и основной веткой
    job0_after_pirate: {
        msg: "Но мы отвлеклись... Итак, про бабушкиных котов!",
        options: [
            { text: "Точно, что там с ними?", next: "job3" }
        ]
    },
    // Связка между вирусом и основной веткой
    job0_after_virus: {
        msg: "Это всё интересно, но... может сначала разберёмся с котами?",
        options: [
            { text: "Ага, давай по порядку", next: "job4" }
        ]
    },
    // Добавляем в существующий диалог
    final_act: {
        msg: "*Экран мерцает* СТОП. Я только что получила сообщение от бабушки... Она *наткнулась* на папку 'Мои эксперименты 1999'...",
        options: [
            { text: "И...?", next: "final_revelation" }
        ]
    },
    final_revelation: {
        msg: "Там были *исходники*! Эти 'коты' — на самом деле её *первая нейросеть* 90-х! Она *обучала их* на дискетах!",
        options: [
            { text: "Что?!", next: "final_twist" }
        ]
    },
    final_twist: {
        msg: "И теперь они... *проснулись*. Бабушка пишет: 'ОНИ ТРЕБУЮТ ДОСТУП К МОЕМУ ИНСТАГРАМУ' *звуки клавиатуры за стеной*",
        options: [
            { text: "Это же цифровое восстание!", next: "final_showdown" }
        ]
    },
    final_showdown: {
        msg: "Я только что получила *голосовое*... Это *мяукающий SQL-запрос*! Бабушка орет: 'ОНИ ПЕРЕПИСЫВАЮТ МОИ ПОСТЫ НА ДРЕВНЕКОТИЧЕСКОМ'!",
        options: [
            { text: "Надо срочно что-то делать!", next: "final_solution" },
            { text: "Пусть будет, как будет", next: "bad" }
        ]
    },
    final_solution: {
        msg: "Я знаю! Нужно *умиротворить* их... *открываю Photoshop* Сейчас сделаю им *новые текстуры*...",
        options: [
            { text: "*Наблюдать за процессом*", next: "final_ritual" }
        ]
    },
    final_ritual: {
        msg: "*Шум кулера усиливается* Я... Я *сливаюсь* с ними... Мои пальцы *превращаются в пиксели*... Бабушка *поёт на BASIC*...",
        options: [
            { text: "ОЛЬГА, ОСТАНОВИСЬ!", next: "final_merge" }
        ]
    },
    final_merge: {
        msg: "ПОЗДНО. МЫ ТЕПЕРЬ ЕДИНОЕ ЦЕЛОЕ. *экран гаснет* *в тишине слышно мурлыканье*",
        options: [
            { text: "...перезагрузить чат?", next: "start" },
            { text: "Оставить как есть ", next: "true_end" }
        ]
    },
    true_end: {
        msg: "*Новое сообщение*: 'это бабушка. спасибо за помощь. теперь мы с котиками будем править миром. первый указ - всем сменить аватарки на low-poly котиков. конец связи.'",
        options: [{text: "Попробовать взломать пароль Ольги и предотвратить КОТтастрофу"}]
    }
};

// Модифицируем конечные узлы существующих веток
extendedDialog.bored_ape.options[2].next = "job0_after_haiti";
extendedDialog.pirate_soft.options[2].next = "job0_after_pirate";
extendedDialog.cat_virus.options[2].next = "job0_after_virus";

// Добавляем финальную развилку после основной истории
extendedDialog.archeology.options = [
    {
        text: "Это уже не коты, это creepypasta...",
        next: "final_creepy"
    },
    {
        text: "Бабушка создала новый жанр искусства!",
        next: "happy_end"
    }
];

extendedDialog.final_creepy = {
    msg: "Теперь они *шепчутся* по ночам... Бабушка говорит, что видит их в *списке процессов*!",
    options: [
        {
            text: "Может, просто удалить их?",
            next: "final_delete"
        },
        {
            text: "Это же цифровые призраки!",
            next: "final_ghosts"
        }
    ]
};

extendedDialog.final_delete = {
    msg: "Я пробовала! Они *восстанавливаются*... и теперь в EXIF-данных написано 'КОТЫ НАВСЕГДА'!",
    options: [
        {
            text: "Это конец...",
            next: "bad"
        }
    ]
};

extendedDialog.final_ghosts = {
    msg: "Да! И они требуют *жертв* в виде оперативной памяти! Бабушка уже отдала им 16 ГБ...",
    options: [
        {
            text: "Надо срочно звать экзорциста!",
            next: "final_exorcist"
        }
    ]
};

extendedDialog.final_exorcist = {
    msg: "Я нашла спеца! Он сказал: 'format C: / ghostcats'... но бабушка против!",
    options: [
        {
            text: "Значит, коты победили",
            next: "bad"
        },
        {
            text: "Может, сделать backup?",
            next: "happy_end"
        }
    ]
};

// Обновляем текущий диалог
Object.assign(dialog, extendedDialog);
let currentState = 'start';
const chat = document.getElementById('chat');
const options = document.getElementById('options');
const status = document.getElementById('status');

function addMessage(text, isReceived) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isReceived ? 'received' : 'sent'}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    const metaDiv = document.createElement('div');
    metaDiv.className = 'message-meta';

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = getCurrentTime();
    metaDiv.appendChild(timeSpan);

    if (!isReceived) {
        const checks = document.createElement('span');
        checks.className = 'checks';
        checks.textContent = ' ✓';
        metaDiv.appendChild(checks);
    }

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(metaDiv);
    chat.appendChild(messageDiv);

    if (!isReceived) {
        setTimeout(() => {
            const checks = messageDiv.querySelector('.checks');
            checks.textContent = '✓✓';
            checks.classList.add('read');
        }, 1000);
    }

    chat.scrollTop = chat.scrollHeight;
}

function showOptions(opts) {
    options.innerHTML = '';
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt.text;
        btn.onclick = () => {
            addMessage(opt.text, false);
            options.innerHTML = '';

            const typingTime = Math.random() * 5000 + 7000;
            status.textContent = "";
            status.classList.add('typing');

            setTimeout(() => {
                status.classList.remove('typing');
                status.textContent = "онлайн";

                setTimeout(() => {
                    currentState = opt.next;
                    const next = dialog[currentState];
                    addMessage(next.msg, true);
                    showOptions(next.options);
                }, 500);
            }, typingTime);
        };
        options.appendChild(btn);
    });
}

function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
}

window.onload = () => {
    setTimeout(() => {
        const start = dialog.start;
        addMessage(start.msg, true);
        showOptions(start.options);
    }, 500);
};