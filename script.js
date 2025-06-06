const dialog = {
    start: {
        msg: "Привет! Как твои дела?",
        options: [
            { text: "Отлично!", next: "happy" },
            { text: "Нормально", next: "ok" },
            { text: "Плохо...", next: "sad" }
        ]
    },
    happy: {
        msg: "Рада это слышать! Что хорошего?",
        options: [
            { text: "Отдыхаю на море", next: "sea" },
            { text: "Получил повышение", next: "job" }
        ]
    },
    ok: {
        msg: "Понятно. Может, расскажешь что-нибудь интересное?",
        options: [
            { text: "Сегодня видел классный фильм", next: "movie" },
            { text: "Нашел новое кафе", next: "cafe" }
        ]
    },
    sad: {
        msg: "Мне жаль это слышать. Хочешь поговорить об этом?",
        options: [
            { text: "Да, мне нужно выговориться", next: "talk" },
            { text: "Нет, лучше о чем-то другом", next: "other" }
        ]
    }
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
        checks.textContent = '✓';
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