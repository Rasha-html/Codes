exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    client.player.pause(message);

    
    message.channel.send({ embed: {
            color: '774a4c',
            description: `${client.emotes.success} ${client.player.getQueue(message).playing.title} paused  `
        }
         }) .then(msg => {
            msg.delete({ timeout: 10000 })
          })
	
};
