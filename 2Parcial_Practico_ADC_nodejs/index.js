const TelegramBot = require('node-telegram-bot-api');

 const token = '556940789:AAFFmJyZXbGU-9HBHg632JQtXdxHtY_1LyQ';

 var miSerial = new serialport("COM3", {
   baudRate: 9600,
   autoOpen: true
 });

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/numero (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];
  miSerial.setEncoding('utf8');

  miSerial.on('data', function(data){
  //bot.sendMessage(chatId, resp);
});
var numeromax=0;
var numeromenor=0;

});
