const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {

    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({dynamic: true, size: 512})
 
          const embed = new Discord.MessageEmbed()
          .setTitle(`${member.username}'s avatar`)
          .setImage(avatar)
          .setColor('RANDOM')
          .setDescription(`[Avatar Link](${avatar})`)
         message.channel.send(embed)
        }
      ;