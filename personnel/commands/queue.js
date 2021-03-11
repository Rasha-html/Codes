exports.run = async (client, message) => {
    
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

    
    const queue = client.player.getQueue(message);
    const String2 = new String(` ${message.guild.name}`)
    const stringObj = new String(`__Now PLaying :__ \n\`${queue.playing.title}\` - ${queue.playing.author} \n\n__Next Songs :__\n ` + (queue.tracks.map((track, i) => {
        return ` **#${i + 1}** - \`${track.title}\` - ${track.author} [<@!${track.requestedBy.id}>]`
    }).slice(0, 7).join('\n\n') + `\n\n${queue.tracks.length > 7 ? `And **${queue.tracks.length - 7}** other song(s)` : ` **${queue.tracks.length}** song(s) in the playlist `}`));
    
//Putting it all together
message.channel.send({embed: {
    title: `Server Queue - ` + (String2.toString()),
    color: '774a4c',
    description : (stringObj.toString()) }
})
};
