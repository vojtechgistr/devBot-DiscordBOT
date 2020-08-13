const { MessageEmbed } = require("discord.js")
const { default_prefix } = require("../../botconfig.json");

module.exports = {
    config: {
        name: "help",
        usage: "d!help",
        category: "general",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {

        const antiraide = bot.emojis.cache.get('725801378353774642');
        const staffe = bot.emojis.cache.get('724523233088372767');
        const generale = bot.emojis.cache.get('724523238985826384');

    const em = new MessageEmbed()
    .setTitle('Command list')
    .setDescription(`Bot's prefix is currently \`${default_prefix}\``)
    .addField(`${antiraide} AntiRaid`, '`lock`, `unlock`, `mutevoice`/`mv`, `unmutevoice`/`unmv`')
    .addField(`${generale} General`, '`clear`, `report`, `server-info`, `slowmode`, `uptime`')
    .addField(`${staffe} Bot Verification`, '`addbot`, `declinebot`, `acceptbot`')
    return message.channel.send(em);
    }
   
}