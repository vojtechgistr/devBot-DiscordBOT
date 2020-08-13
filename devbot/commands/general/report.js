const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "report",
        usage: "d!report",
        category: "general",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
	message.delete();
    const embd = new MessageEmbed()
        .setDescription("Please provide a valid user to report!")
        .setColor(red_light)
    if(!user) return message.channel.send(embd).then(m => m.delete({ timeout: 7000 }));

const embed5 = new MessageEmbed()
            .setDescription("You can't report a bot!")
            .setColor(red_light);
    
        if(user.id === bot.user.id) return message.channel.send(embed5).then(m => m.delete({ timeout: 7000 }));


const embed4 = new MessageEmbed()
    .setDescription("You can't report yourself!")
    .setColor(red_light)
    
    if(user.id === message.author.id) return message.channel.send(embed4).then(m => m.delete({ timeout: 7000 }));

	const provide = new MessageEmbed()
		.setDescription(`Please provide a reason!`)
		.setColor(red_light);

    let reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send(provide);

	const owner = message.guild.owner;

    owner.send(`Hi! **${message.author.tag}** reported **${user.user.tag}** on your server ( ${message.guild.name} )!\n\n__**Report:**__\n${reason}`);
    user.send(`Hi, you has been reported by **${message.author.tag}** on **${message.guild.name}**! \n\n __**Report:**__ \n ${reason}`);

    const reported = new MessageEmbed()
    .setTitle("<:SUREwarning:715481249082245141> REPORT")
    .setDescription(`**${user.user.tag}** has been reported!\n\n __**Report:**__ \n ${reason}`)
    .setFooter(`Reported by ${message.author.tag}`)
    .setTimestamp()
    .setColor(red_light);
    message.channel.send(reported)
message.delete()

    let embeddw = new MessageEmbed()
    .setColor(red_light)
    .setAuthor(`Modlogs`)
    .setThumbnail(message.guild.iconURL())
    .addField("Moderation:", "Report")
    .addField("Reported:", `${user.user.tag} [${user.user.id}]`)
    .addField("Member:", message.author.tag)
    .addField("Report:", reason)
    .addField("Date:", message.createdAt.toLocaleString())

    let lawdw = message.guild.channels.cache.find(c => c.name === "logs");
              return lawdw.send(embeddw)
    }
}