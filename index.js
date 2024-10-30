const telegram = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new telegram(TOKEN, { polling: true });

bot.onText(/\/joke/, async (option) => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );

  console.log(response.data);

  const setup = response.data.setup;
  const punchLine = response.data.punchline;

  bot.sendMessage(option.chat.id, setup + " , " + punchLine);
});
