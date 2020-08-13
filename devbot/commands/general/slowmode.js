const { MessageEmbed } = require('discord.js');
const { blue_light, red_light } = require('../../colours.json');

module.exports = { 
    config: {
        name: "slowmode",
        usage: "d!slowmode",
        category: "general",
        accessableby: "Member",
        aliases: ["slow", "setslow", "setslowmode"]
    },
    run: async (bot, message, args) => {

        const embed1 = new MessageEmbed()
            .setTitle(':X: Error :X:')
            .setDescription("I don't have enough permissions to do this command. \n Please, give me permission -> ``MANAGE CHANNELS``")
            .setColor('#d12828');
            
            const embed2 = new MessageEmbed()
            .setTitle(':X: Error :X:')
            .setDescription("You don't have enough permissions to use this command. \n - Required permission -> ``MANAGE CHANNELS``")
            .setColor('#d12828');


                if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
                    message.channel.send(embed1)
                    .then(m => m.delete({ timeout: 7000 }));
                    return message.delete({ timeout: 7000 });
                }
                if (!message.member.hasPermission("MANAGE_CHANNELS")) {
                    message.channel.send(embed2)
                    .then(m => m.delete({ timeout: 7000 }));
                    return message.delete({ timeout: 7000 });
                }


        const warne = bot.emojis.cache.get('715481249082245141');

        const embed = new MessageEmbed()
            .setDescription(`You did not specify the time in seconds you wish to set this channel's slow mode too!\n\n${warne} **__Usage__:**\n\`${prefix}slowmode [seconds]\``)

        const em = new MessageEmbed()
            .setDescription(`Please provide an number! (seconds)\n\n${warne} **__Usage__:**\n\`${prefix}slowmode [seconds]\``)

        if(!args[0]) {
            message.channel.send(embed)
            .then(m => m.delete({ timeout: 10000 }))
            return message.delete({ timeout: 10000 });
        }
        if(isNaN(args[0])) {
            message.channel.send(em)
            .then(m => m.delete({ timeout: 10000 }))
            return message.delete({ timeout: 10000 });
        }
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "- No reason given -";

        message.channel.setRateLimitPerUser(args[0], reason);

        const slow = new MessageEmbed()
            .setTitle(`⏰ Slowmode set`)
            .setDescription(`Slowmode has been set to **\`${args[0]}\`**\`seconds\`\n\n[ ${message.author} ]`)
            .setColor(blue_light)

        message.channel.send(slow)
        message.delete()

      let embeddw = new MessageEmbed()
      .setColor(red_light)
      .setAuthor(`Modlogs`)
      .setThumbnail(message.guild.iconURL())
      .addField("Moderation:", "Slowmode")
      .addField("Moderator:", message.author.tag)
      .addField("Reason", reason)
      .addField("Channel", message.channel)
      .addField("Date:", message.createdAt.toLocaleString())
  
      let lawdw = message.guild.channels.cache.find(c => c.name === "logs");
          return lawdw.send(embeddw);
    }
}