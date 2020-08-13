const { MessageEmbed } = require("discord.js")
const { default_prefix } = require("../../botconfig.json");

module.exports = {
    config: {
        name: "msg",
        usage: "d!msg",
        category: "general",
        accessableby: "Administrators",
    },
    run: async (bot, message, args) => {
        if(message.author.id !== '484448041609199620') return;
    const em = new MessageEmbed()
    .setTitle('ADD YOUR BOT')
    .setColor(0xfc0303)
    .setThumbnail('https://cdn.discordapp.com/attachments/734870305797046349/742010265402605627/images.png')
    .setDescription(`Do you want to add your bot to this server? Let's get started!\n\n__**Rules and Terms**__:\n**1** • Your bot application must be 1 month old or older\n\n**2** • The bot can't violate the [TOS](https://discord.com/new/terms)\n\n**3** • You cannot add a bot what you don't own\n\n**4** • The bot must has a help command\n\n**5** • The bot has to be stable, must be grammatically correct etc\n\n**6** • If the bot will be offline at least 2 weeks, he will be kicked\n\n**7** • If your bot will be offline while testing he won't be accepted\n\n**8** • If bot will start spamming or promoting stuff, he will be kicked and owner banned`)
    .addField('❓ And how to add your bot? Just type', `\`${default_prefix}addbot [BOT'S PREFIX] [BOT'S ID]\``)
    .setFooter(`Bot was written by DaRealAdalbertBro#9609`)
    return message.channel.send(em);
    }
   
}