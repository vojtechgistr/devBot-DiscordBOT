const { MessageEmbed } = require("discord.js");
const { red_light } = require('../../colours.json');

module.exports = {
    config: {
        name: "unmutevoice",
        usage: "d!unmutevoice",
        category: "antiraid",
        accessableby: "Administrators",
        aliases: ["unvoicemute", "unvm", "unmv", "voiceunmute", "vunm", "unmv"]
    },
    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;

        const embed1 = new MessageEmbed()
        .setTitle(':X: Error :X:')
        .setDescription("I don't have enough permissions to do this command. \n - Please, give me permission -> ``ADMINISTRATOR``")
        .setColor('#d12828');

        const embed2 = new MessageEmbed()
        .setTitle(':X: Error :X:')
        .setDescription("You don't have enough permissions to do this command. \n - Required permission -> ``MANAGE CHANNELS``")
        .setColor('#d12828');

        if(!message.member.hasPermission(["MANAGE_CHANNELS"])) {
            message.channel.send(embed2)
            .then(m => m.delete({ timeout: 7000 }));
            return message.delete({ timeout: 7000 });
    }
            
        if(!message.guild.me.hasPermission(["ADMINISTRATOR"])) {
            message.channel.send(embed1)
        .then(m => m.delete({ timeout: 7000 }));
        return message.delete({ timeout: 7000 });
}

        let channel = message.member.voice.channel;
        
        if(!channel) {
            const er = new MessageEmbed()
                .setDescription(`You are not in any voice channel!`)
            return message.channel.send(er)
        }

            for (let member of channel.members) {
                member[1].voice.setMute(false)
            }

            message.channel.send('<a:SUREcheckmark:715481264315957299> Voice has been unmuted')

        let embeddw = new MessageEmbed()
        .setColor(red_light)
        .setAuthor(`Modlogs`)
        .setThumbnail(message.guild.iconURL())
        .addField("Moderation:", "Unmuted Voice")
        .addField("Moderator:", message.author.tag)
        .addField("Date:", message.createdAt.toLocaleString())
        
        let lawdw = message.guild.channels.cache.find(c => c.name === "logs");
        return lawdw.send(embeddw);
    }
}