const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) =>  {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send('There is nothing to snipe!')

    const embed = new Discord.MessageEmbed()
    .setColor('8DD9E5')
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    .setTimestamp()

    if(msg.image) embed.setImage(msg.image)

    message.channel.send(embed)
} //hi //help me with lock  lol ok