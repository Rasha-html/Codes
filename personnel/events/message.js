module.exports = (bot, message) => {
    if (message.author.bot) return; //it will ignore all bots
 
    if(message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) {
        message.channel.send(`My prefix is \`${bot.config.prefix}\` `)
    }




    if (message.content.indexOf(bot.config.prefix) !== 0) return;

    const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

    const cmd = bot.commands.get(command);

    if (!cmd) return; //ignores commands that don't exist

    //running the command
    try{
        cmd.run(bot, message, args);
    } catch(error){ //catches an error if there is one
        message.channel.send('An error occured while executing that command.')
    }

};