const Discord = require(`discord.js`);
const math = require(`mathjs`)

exports.run = async (client, message, args) => {

        
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
            return message.reply('You do not have permissions to do that.')
        }
        if(!message.channel.permissionsFor(message.guild.me).has("BAN_MEMBERS"))
            return message.channel.send('I do not have sufficient permission.')
        
       
        if (!args[0])
        return message.reply("Please provide a number of messages ` (between 1 and 100) ` to purge.")

      if (args[0] > 100)
        return message.reply("Please provide a number below 100!") .then(msg => {
            msg.delete({ timeout: 5000 })
          })

       if (args[0] <= 0 )
      return message.reply("Please provide a number above 0!") .then(msg => {
           msg.delete({ timeout: 5000 })
          })  
    
        if(isNaN(args[0])) return message.reply("Only numbers work");
      
          let messagecount = args[0]
            message.channel.messages.fetch({ limit: messagecount })
            .then(messagecount => message.channel.bulkDelete(messagecount))
            message.channel.send("<:greentick:813567363802071041> Deleted " +  math.evaluate(messagecount-1) + " message(s).").then(msg => {
                msg.delete({ timeout: 5000 })
              })

        
        }

