const math = require(`mathjs`)

const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send('Please provide arguments to calculate.');


//////////////////ERROR HANDLER////////////////////
    let resp;
    try{
       resp = math.evaluate(args.join(" "))
    } catch(e){
        return message.channel.send("Please provide valid arguments.")
        }
  //////////////////ERROR HANDLER////////////////////  
        
message.channel.send({embed: {
    color: '8a6d8e',
    title:` Output : ` +  math.evaluate(args.join(" ")),
    description : 'Initial calculation : ' + args.join(' ')}})

}