module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - No results found for \`${query}\` !`) .then(msg => {
            msg.delete({ timeout: 10000 })
          })

};