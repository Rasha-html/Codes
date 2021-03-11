exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`).then(msg => {
            msg.delete({ timeout: 10000 })
          });;

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`) .then(msg => {
            msg.delete({ timeout: 10000 })
          });

   client.player.play(message, args.join(" "), true);

};