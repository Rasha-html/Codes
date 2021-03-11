const math = require(`mathjs`)

const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send('Please provide arguments.');


//////////////////ERROR HANDLER////////////////////
    let resp;
    try{
       resp = math.evaluate(args.join(" "))
    } catch(e){
        return message.channel.send("Please provide valid arguments.")
        }
  //////////////////ERROR HANDLER////////////////////  
  let member = message.author
  if(args[0] >= 1, args[0] <= 25000) {
  const tax0 = new Discord.MessageEmbed()
  .setColor('#648d79')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +'- You should type : pls give ' + Math.floor(args[0]) , member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + math.floor(args[0]/1) + `\n > **Tax rate** : 0 % \n > **Amount lost by tax** : 0` )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

message.channel.send(tax0); return
    }

if(args[0] >= 25001, args[0] <= 48958){
    const tax1 = new Discord.MessageEmbed()
  .setColor('#7ca892')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +' - You should type : pls give ' + Math.floor(args[0]/0.99), member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + Math.floor(args[0]/0.99) + `\n > **Tax rate** : 1 % \n > **Amount lost by tax** : ` + Math.floor(args[0]/0.99-(args[0])) )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

  message.channel.send(tax1); return
}

if(args[0] >= 48959, args[0] <= 97829){
    const tax3 = new Discord.MessageEmbed()
  .setColor('#a8965c')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +'- You should type : pls give ' + Math.floor(args[0]/0.97), member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + Math.floor(args[0]/0.97) + `\n > **Tax rate** : 3 % \n > **Amount lost by tax** : ` + Math.floor(args[0]/0.97-(args[0])) )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

  message.channel.send(tax3); return
}

if(args[0] >= 97830, args[0] <= 712499){
    const tax5 = new Discord.MessageEmbed()
  .setColor('#d7cea1')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +' - You should type : pls give ' + Math.floor(args[0]/0.95), member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + Math.floor(args[0]/0.95) + `\n > **Tax rate** : 5 % \n > **Amount lost by tax** : ` + Math.floor(args[0]/0.95-(args[0])) )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

  message.channel.send(tax5); return
}

if(args[0] >= 712499, args[0] <= 2299999){
    const tax8 = new Discord.MessageEmbed()
  .setColor('#ab4c5a')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` + ' - You should type : pls give ' + Math.floor(args[0]/0.92), member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + Math.floor(args[0]/0.92) + `\n > **Tax rate** : 8 % \n > **Amount lost by tax** : ` + Math.floor(args[0]/0.92-(args[0])) )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

  message.channel.send(tax8); return
}

if(args[0] >= 2300000){
    const tax15 = new Discord.MessageEmbed()
  .setColor('#f56262')
  .setTitle('__Dank Memer Tax Calculator__')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=812881552765485138&permissions=1547037783&scope=bot')
  .setAuthor(`${member.username}` +' - You should type : pls give ' + Math.floor(args[0]/0.85), member.displayAvatarURL({dynamic: true}))
  .setDescription('> **Initial Amount ** : ' + Math.floor(args[0]) + `\n` + '> ** Amount expected to pay** : ' + Math.floor(args[0]/0.85) + `\n > **Tax rate** : 15 % \n > **Amount lost by tax** : ` + Math.floor(args[0]/0.85-(args[0])) )
  .setTimestamp()
  .setFooter("Acumen's dank memer tax calculator", 'https://cdn.discordapp.com/avatars/812881552765485138/e28f533d5ddaaefbfa65fa4871def86c.png?size=1024');

  message.channel.send(tax15); return
}



}   
