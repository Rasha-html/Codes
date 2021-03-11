module.exports = (client, message, track) => {
message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Now playing',
            description: `${client.emotes.music} ${track.title} - ${track.author} `
        }
         }) .then(msg => {
            msg.delete({ timeout: 30000 })
          })
};
