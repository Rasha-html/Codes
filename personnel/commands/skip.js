exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    client.player.skip(message);

    const Discord = require(`discord.js`);
    const skipped = new Discord.MessageEmbed()
    .setColor('774a4c')
    .setTitle ('Skipped')
    .setDescription(` ${client.emotes.success} Current song skipped`)
    
        message.channel.send(skipped) .then(msg => {
            msg.delete({ timeout: 10000 })
          })


};

