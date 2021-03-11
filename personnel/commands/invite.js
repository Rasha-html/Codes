const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    const invite = new Discord.MessageEmbed()
    .setColor(`050000`)
    .setTitle(`Invite me to your server !`)
    .setTimestamp()
    .addField("Invite link ", "[Bot invite](https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot)")
    .setFooter(`Bot created by Rasha#6666`)
    .setThumbnail('https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024')

    message.channel.send(invite)
}