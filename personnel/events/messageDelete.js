module.exports = (bot, message) => {
    if(!message.guild) return
    if(message.author.bot) return
    bot.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
    }) //i gtg
} 

//did you fix the thing that was deleted. yes