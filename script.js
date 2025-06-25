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
            { text: "Ближе к делу...", next: "job0" },
            { text: "У меня так улитку зовут, лол :)", next: "hat" }//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
    job2: {
        msg: "Что? Да нет же, она скачала терабайты миленьких котят",
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
            { text: "ОООооо нет! Её коты... Всё пропало....", next: "job3" },
            { text: "Хм, а что она делала до блокировки?", next: "job3" }
        ]
    },
};

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

            const typingTime = Math.random() * 3000 + 2000;
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