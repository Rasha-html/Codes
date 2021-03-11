exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    client.player.clearQueue(message);

    message.channel.send({
        embed: {
            color: '774a4c',
            
            description: ` ${client.emotes.success} Cleared queue `
        }
         });
    
};

