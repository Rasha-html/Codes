const Discord = require(`discord.js`);
const bot = new Discord.Client();
const { token, prefix } = require(`./config/config.json`);
const fs = require (`fs`);

const { Player } = require('discord-player');

const player = new Player(bot);
bot.player = player;
const config = require('./config/config.json');
bot.emotes = require('./config/emojis.json');
bot.filters = require('./config/filters.json');
bot.config = config;
  

bot.on('ready', () => {
    console.log(`Bot Online`);
    bot.user.setStatus("online");
    bot.user.setActivity(`,,help`)
});



bot.snipes = new Map() 


bot.commands = new Discord.Collection();
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props); 
        console.log(`👌 Command loaded: ${commandName}`);
    });
}); 

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Event loaded: ${eventName}`);
        bot.on(eventName, event.bind(null, bot));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        bot.player.on(eventName, event.bind(null, bot));
    });
});



bot.login(token);
