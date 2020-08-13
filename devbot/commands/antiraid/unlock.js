const { MessageEmbed } = require('discord.js');
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "unlock",
        usage: "d!unlock",
        category: "antiraid",
        aliases: ["unlock"],
        accessableby: "Administrators",
    },
    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;

        const embed1 = new MessageEmbed()
        .setTitle(':X: Error :X:')
        .setDescription("I don't have enough permissions to use this command. \n Please, give me permission -> ``ADMINISTRATOR``")
        .setColor('#d12828');
        
        const embed2 = new MessageEmbed()
        .setTitle(':X: Error :X:')
        .setDescription("You don't have enough permissions to use this command. \n - Required permission -> ``MANAGE CHANNELS``")
        .setColor('#d12828');

            if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
                message.channel.send(embed1)
                .then(msg => {msg.delete(7000)});
                return message.delete({ timeout: 7000 });
            }

            if (!message.member.hasPermission("MANAGE_CHANNELS")) {
                message.channel.send(embed2)
                .then(msg => {msg.delete(7000)});
                return message.delete({ timeout: 7000 });
            }


            const embed = new MessageEmbed()
        .setTitle(":X: REOPENED :X:")
        .setTimestamp()
        .setColor(red_light)
        .setFooter(`Requested by ${message.author.tag}`)
        .setDescription(`This channel has been reopened\n\n[ ${message.author} ]`);

            await message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
            message.channel.send(embed);
            
            let embeddw = new MessageEmbed()
            .setColor(red_light)
            .setAuthor(`Modlogs`)
            .setThumbnail(message.guild.iconURL())
            .addField("Moderation:", "UnLock")
            .addField("Channel", `${message.channel}`)
            .addField("Moderator:", message.author.tag)
            .addField("Date:", message.createdAt.toLocaleString())
            
            let lawdw = message.guild.channels.cache.find(c => c.name === "logs");
            return lawdw.send(embeddw);
    }
}