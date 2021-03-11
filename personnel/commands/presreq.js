const math = require(`mathjs`)

const Discord = require(`discord.js`);

exports.run = async (bot, message, args) => {
    let member = message.author

    if(!args[0]){
    const rien1 = new Discord.MessageEmbed()
        .setColor ('774a4c')
        .setTitle('__Prestige Requirements Calculator__')
        .setDescription( `:white_small_square: Tells you : \n➭ Every requirement for the Prestige Level.\n➭ Bank Space at Maximum Level.\n\n:white_small_square: Usage : `+ '`'+(bot.config.prefix)+"presreq <prestige level>\`")
        .setFooter (`Acumen's dank memer prestige helper`, 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024)')
  		.setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
	    .setTimestamp()
    
    return message.channel.send(rien1)  } 
        

//////////////////ERROR HANDLER////////////////////
    let resp;
    try{
       resp = math.evaluate(args.join(" "))
    } catch(e){
        return message.channel.send("Please provide a valid number.")
        }
//////////////////ERROR HANDLER////////////////////  

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  

  if(args[0] >= 0, args[0] <= 9) {
  const pres9 = new Discord.MessageEmbed()
  .setColor('#648d79')
  .setTitle('__Prestige Level__ ' + args[0])
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +`'s Prestige Calculation` , member.displayAvatarURL({dynamic: true}))
  .setDescription('> :white_small_square:Required Levels : '  + '`'+ (formatNumber(args[0]*15)) + '`' + `\n` + '> :white_small_square:Required Balance :  ' + '`' +(formatNumber(+ math.multiply(math.bignumber(args[0]), math.bignumber(250000))))+ '\`\n > :white_small_square:Bank Space at Maximum Level : ' + '`' + (formatNumber(math.round((5000+args[0]*2750)*5000)))+ '\`\n  > :white_small_square:Bonus Multiplier : ' + '`' + math.round(args[0]*2) + ' %`')
  .setTimestamp()
  .setFooter("Acumen's dank memer prestige helper", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

message.channel.send(pres9); return
 }

 if(args[0] >=10) {
    const pres10 = new Discord.MessageEmbed()
    .setColor('#648d79')
    .setTitle('__Prestige Level__ ' + args[0])
    .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
    .setAuthor(`${member.username}` +`'s Prestige Calculation` , member.displayAvatarURL({dynamic: true}))
    .setDescription('> :white_small_square:Required Levels : '  + '`'+ (formatNumber(args[0]*15)) + '`' + `\n` + '> :white_small_square:Required Balance :  ' + '`' +(formatNumber(+ math.multiply(math.bignumber(args[0]), math.bignumber(250000))))+ '\`\n > :white_small_square:Bank Space at Maximum Level : ' + '`' + (formatNumber(math.round((5000+args[0]*2750)*5000)))+ '\`\n  > :white_small_square:Bonus Multiplier : \`20 %\`')
    .setTimestamp()
    .setFooter("Acumen's dank memer prestige helper", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');
  
  message.channel.send(pres10); return
   }

}

