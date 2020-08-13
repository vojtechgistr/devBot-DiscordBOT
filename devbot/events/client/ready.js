const { MessageEmbed } = require('discord.js');
const { default_prefix } = require('../../botconfig.json')

module.exports = async bot => {
    console.log("-------------------------");
    console.log("    I AM READY TO GO     ");
    console.log("-------------------------");

    let own = bot.users.cache.get(`484448041609199620`);
    setInterval(function() {
     setTimeout(async() => {
        bot.user.setActivity(`${default_prefix}addbot [prefix] [invite]`, { type: 'PLAYING'})
        setTimeout(async() => {
            bot.user.setActivity(`DEV - ${own.tag}`, { type: 'STREAMING', url: "https://www.twitch.tv/darealadalbertbro"})
            setTimeout(async() => {
                bot.user.setActivity(`moderators`, { type: 'LISTENING'})
                setTimeout(async() => {
                    bot.user.setActivity(`${bot.users.cache.size} users`, { type: 'WATCHING'})
                }, 10000)
            }, 5000)
        }, 10000)
    }, 20000)
    }, 46000)
}