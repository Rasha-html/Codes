exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    client.player.shuffle(message);

    return message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Queue on shuffle enabled',
            description: ` Now shuffling **${client.player.getQueue(message).tracks.length}** song(s)`
        }
         }) .then(msg => {
            msg.delete({ timeout: 10000 })
          })
};
