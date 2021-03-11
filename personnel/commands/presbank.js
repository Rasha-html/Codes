const math = require(`mathjs`)

const Discord = require(`discord.js`);

exports.run = async (bot, message, args) => {
    let member = message.author

    if(!args[0]){
    const rien = new Discord.MessageEmbed()
        .setColor ('774a4c')
        .setTitle('__Prestige Bank Calculator__')
        .setDescription( `:white_small_square: Tells you the bank space for a prestige level at a certain level.\n\n:white_small_square: Usage : `+ '`'+(bot.config.prefix)+"presbank <prestige number> <level>\` " + '\n➭ Level cannot exceed 5000')
        .setFooter (`Acumen's dank memer prestige helper`, 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024)')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
        .setTimestamp()
     return   message.channel.send(rien) } 
        

//////////////////////////////////////////////////////////


  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  

  if(args[0] >= 0, args[1] <=5000) {
  const pres9 = new Discord.MessageEmbed()
  .setColor('#648d79')
  .setTitle('__Prestige Level ' + args[0] + ' at Level ' + args[1] +"__")
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +`'s Prestige Bank Calculation` , member.displayAvatarURL({dynamic: true}))
  .setDescription(':white_small_square:Bank Space Calculated : '  + '`'+ (formatNumber((5500+args[0]*2750)*args[1]))+ '`')  //{replace;{math;(5500+{args;1}*2750)*{args;2}}
  .setTimestamp()
  .setFooter("Acumen's dank memer prestige helper", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

message.channel.send(pres9);  return
 } else 
 
 if (args[1] > 5000) return message.channel.send('Level Cannot exceed 5000.')

 if (!args[1]) return message.channel.send('Please provide a prestige level.')

}
