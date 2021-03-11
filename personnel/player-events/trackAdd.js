module.exports = (client, message, queue, track) => {

message.channel.send({
        embed: {
            color: '774a4c',
            title: 'Added Song to Queue',
            description: ` ${client.emotes.music} - ${track.title} `
        }
         }) .then(msg => {
            msg.delete({ timeout: 10000 })
          })
};

