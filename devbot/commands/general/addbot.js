const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");
const { default_prefix } = require('../../botconfig.json')

module.exports = {
    config: {
        name: "addbot",
        usage: "d!addbot",
        category: "general",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;
        if(message.author.bot) return;
        if(message.deletable) {
            message.delete({timeout:7000})
        }

        let chann = bot.channels.cache.get('727777921527447574');

        const em = new MessageEmbed()
        .setDescription(`This command can be used only in ${chann}!`);

        if(message.channel !== chann) return message.channel.send(em)
        .then(async msg => {
            await msg.delete({ timeout: 7000 });
        });

        if(!args[0]) {
            const embed = new MessageEmbed()
                .setTitle(':X: Error :X:')
                .setDescription(`**This message format is not valid, please use:**\n\n\`${default_prefix}addbot \`**\`[BOT'S PREFIX]\`**\` [BOT'S ID]\``)
                .setColor(red_light);

            return message.channel.send(embed).then(async msg => {
                await msg.react('❌');
                msg.delete({ timeout: 7000 });
                });
        } else if(!args[1]) {
            const embed = new MessageEmbed()
                .setTitle(':X: Error :X:')
                .setDescription(`**This message format is not valid, please use:**\n\n\`${default_prefix}addbot [BOT'S PREFIX] \`**\`[BOT'S ID]\`**`)
                .setColor(red_light);

            message.channel.send(embed).then(async msg => {
                await msg.react('❌');
                msg.delete({ timeout: 7000 });
              })
            return;
        } else {
            try {
                const sent = new MessageEmbed()
                .setTitle(`Good job!`)
                .setDescription(`Your bot with ID ${args[1]} has been successfully added to the queue!`)
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Prefix:', args[0])
                .addField('ID:', args[1])
                .addField('Status:', "In queue")
            message.author.send(sent);
            message.channel.send(sent).then(m =>{
                m.delete({ timeout: 7000 });
            });

            const sentd = new MessageEmbed()
                .setTitle(`New bot has been added!`)
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Added by:', message.author.tag)
                .addField('Prefix:', args[0])
                .addField('ID:', args[1])
                .addField('Invite link:', `https://discord.com/oauth2/authorize?client_id=${args[1]}&scope=bot&permissions=2146958847`)
            
            const c = bot.channels.cache.get('741934795361091584');
            c.send(sentd).then(async msg => {
                const decline = bot.emojis.cache.get('728722436270325870');
                const accept = bot.emojis.cache.get('728003336573288468');
                const working = bot.emojis.cache.get('718489096837660693');

                await msg.react(accept);
                await msg.react(working);
                await msg.react(decline);
            });
            return;
            } catch(err) {
                console.log(err);
                return;
            }
        }
    }
}