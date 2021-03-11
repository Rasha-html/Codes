
const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
try {
    	if(!message.member.hasPermission('MANAGE_CHANNELS'))
            {
                return message.channel.send('You do not have permissions to do that.')
        }
        

        if(!message.channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS")){
                return message.channel.send('I do not have sufficient permission')
        }
        

                //lock command (lock #channel) or (lock)
                let lockchannel = message.mentions.channels.first() || message.channel

        

        //update permissions 
        lockchannel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false
            })
            //lock message
            message.channel.send(`<:greentick:813567363802071041> Locked ${lockchannel}`)
        } catch(e) {
                message.channel.send('Something went wrong')
        }
         
}
