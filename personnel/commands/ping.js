const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    const ping = new Discord.MessageEmbed()
    .setTitle('Pong     <:pong:814664294359629895> ')
    .setDescription(`\`${client.ws.ping}\` ms`)
    .setColor(`cfa968`)


    message.channel.send(ping);
    }

// bruh 