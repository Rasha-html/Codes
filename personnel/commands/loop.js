exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Repeat mode disabled',
            description: ` ${client.emotes.error} Queue isn't on loop`
        }
         }).then(msg => {
            msg.delete({ timeout: 10000 })
          });
        
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Repeat mode enabled',
            description: ` ${client.emotes.success} Now looping queue`
        }}).then(msg => {
            msg.delete({ timeout: 10000 })
          })
    }
    };