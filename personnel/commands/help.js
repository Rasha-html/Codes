const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    message.channel.send({
        embed: {
            color: '050000',
            title :'📚 Help',
            fields: [
                { name: ':white_small_square: Moderation', value: ' `lock`, `unlock`, `ban`, `kick`, `purge`'},
                { name: ':white_small_square: Fun', value: '``snipe``' },
                { name: ':white_small_square: Informations', value: '`ping`, `invite`'},
                { name: ':white_small_square: Utility', value: '`calc`, `av` ' },
                { name: ':white_small_square: Dank Memer Utility ', value: '`tc`, `presreq`, `presbank`'},

                { name: ':white_small_square: Music', value: '`play`, `pause`, `resume`, `queue`, `clear`, `shuffle`, `np`, `loop`, `skip`, `stop` \n Bot can be slow to join vc ! (especially with spotify playlists) ' },
               
            ],
            
            timestamp: new Date(),
        },
    });
}
