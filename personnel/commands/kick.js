
const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
   try{
        if(!message.member.hasPermission('ADMINISTRATOR'))
        if(!message.member.hasPermission('KICK_MEMBERS')) {
                return message.channel.send('You do not have permissions to do that.')
        }

        if(!message.channel.permissionsFor(message.guild.me).has("BAN_MEMBERS")){
                return message.channel.send('I do not have sufficient permission')
        }
        
                //ban command 
               
               let target =  message.mentions.users.first()
                let reason1 = args[2]
        // ban member
        if(!target) {
                return message.channel.send(" ``` kick <member> [reason] | member is a required argument. ```")
       }
    
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();
        message.channel.send(`${target} has been kicked. Reason : ` + reason1)
       } catch(e) {
               
       }
         
}
