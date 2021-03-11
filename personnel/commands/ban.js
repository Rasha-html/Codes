
const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
 try{
        if(!message.member.hasPermission('ADMINISTRATOR'))
        if(!message.member.hasPermission('BAN_MEMBERS')) {
                return message.channel.send('You do not have permissions to do that.')
        }

        if(!message.channel.permissionsFor(message.guild.me).has("BAN_MEMBERS")){
                return message.channel.send('I do not have sufficient permission')
        }
        
                //ban command 
               
               let target =  message.mentions.users.first()
               let reason = args[2]
         
         //tracks if the bot role is under the target to ban 
               //not done yet 
              
        // tracks target to ban highest position 
       //  if(!message.member.roles.highest.position < target.roles.highest.position) {
        //     return message.channel.send("You are not allowed to ban this member")
       //  }

        // ban member
        if(!target) {
                return message.channel.send(" ``` ban <member> [reason] | member is a required argument. ```")
       }
       
      
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.ban();
        message.channel.send(`Banned ${target}. Reason : ` + reason)
       } catch(e) {
               
       }
         
}
