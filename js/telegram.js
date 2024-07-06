'usestrict'

function sendEmailTelegram(event) {
    event.preventDefault();

    // Получаем данные формы
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Создаем сообщение
    const message = `
    Ім'я та Прізвище: ${name}
    Телефон: ${phone}
    Колір: ${color}
    Розмір: ${size}
    `;

    // Ваш токен бота
    const botToken = '7123622443:AAEUUF7h_XEZ1cZmCpMIxqqCq9vErte1STA';
    // Ваш chat ID
    const chatId = '@ZyrraClothes';
    
    // URL для отправки сообщения
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Параметры запроса
    const data = {
        chat_id: chatId,
        text: message
    };

    // Отправляем запрос
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            document.querySelector('.form__send-result').textContent = 'Повідомлення успішно відправлено!';
        } else {
            document.querySelector('.form__send-result').textContent = 'Сталася помилка при відправці повідомлення.';
        }
    })
    .catch(error => {
        console.error('Помилка:', error);
        document.querySelector('.form__send-result').textContent = 'Сталася помилка при відправці повідомлення.';
    });
}