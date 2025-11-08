// bot.js
const TelegramBot = require('node-telegram-bot-api');

// 🔹 Токен берём из переменной окружения
const token = process.env.BOT_TOKEN;

// Создаём бота с polling (он будет постоянно получать сообщения)
const bot = new TelegramBot(token, { polling: true });

// Когда пользователь пишет /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Привет! Я твой Telegram-бот 😊", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Сказать привет", callback_data: "say_hello" }
        ],
        [
          { text: "Открыть WebApp", web_app: { url: "https://USERNAME.github.io/telegram-webapp/" } }
        ]
      ]
    }
  });
});

// Обработка нажатия кнопки
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  if (query.data === 'say_hello') {
    bot.sendMessage(chatId, "Привет! 👋");
  }
});
