const { Client, Collection, Util } = require("discord.js");
const { MessageEmbed, Discord } = require('discord.js');
const { token, default_prefix } = require("./botconfig.json");
const message = require("./events/guild/message");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    if(message.content === "<@741922912818167839>" || message.content === "<@!741922912818167839>") {
        let sEmbed = new MessageEmbed()
        .setColor(0xffa500)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**My server's prefix is \`${default_prefix}\`**\n\nType \`${default_prefix}addbot\` to add your bot on the bot verify queue!‎`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL(), false);
    return message.channel.send(sEmbed)
        }
    })

bot.on('message', async message => {
    let chann = await bot.channels.cache.get('727777921527447574');
    if(message.channel === chann) {
        if(message.author.bot) return;
            try {
                return message.delete()
            } catch {
                return;
            }
}
});

bot.login(token);