module.exports = (client, message, playlist) => {
message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Added Playlist to Queue',
            description: `${client.emotes.music} - ${playlist.title}` + 'playlist have been added to queue.'
        }
         }) .then(msg => {
            msg.delete({ timeout: 30000 })
          })
};