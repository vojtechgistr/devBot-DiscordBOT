const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");
const { default_prefix } = require('../../botconfig.json')

module.exports = {
    config: {
        name: "acceptbot",
        usage: "d!acceptbot",
        aliases: ["accept"],
        category: "general",
        accessableby: "Administrators"
    },
    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;
        if(message.author.bot) return;

        let modRole = message.guild.roles.cache.find(c => c.name === "BOT Checker");

        if(!modRole) {
            return message.channel.send("I can't find a role with name `BOT Checker`")
        }
        if(!message.member.roles.cache.has(modRole.id)) return message.channel.send("You don't have enough permissions to do this command.. You need ``BOT Checker`` role");

        if(!args[0]) {
            const embed = new MessageEmbed()
                .setTitle(':X: Error :X:')
                .setDescription(`**This message format is not valid, please use:**\n\n\`${default_prefix}acceptbot \`**\`[BOT'S ID]\`**\` [BOT OWNER'S ID] [BOT'S PREFIX]\``)
                .setColor(red_light);

            return message.channel.send(embed).then(async msg => {
                await msg.react('❌');
                msg.delete({ timeout: 10000 });
                });
        } else if(!args[1]) {
            const embed = new MessageEmbed()
                .setTitle(':X: Error :X:')
                .setDescription(`**This message format is not valid, please use:**\n\n\`${default_prefix}acceptbot [BOT'S ID] \`**\`[BOT OWNER'S ID] [BOT'S PREFIX]\`**`)
                .setColor(red_light);

            message.channel.send(embed).then(async msg => {
                await msg.react('❌');
                msg.delete({ timeout: 10000 });
              })
            return;
        }else if(!args[2]) {
            const embed = new MessageEmbed()
                .setTitle(':X: Error :X:')
                .setDescription(`**This message format is not valid, please use:**\n\n\`${default_prefix}acceptbot [BOT'S ID] [BOT OWNER'S ID] \`**\`[BOT'S PREFIX]\`**`)
                .setColor(red_light);

            message.channel.send(embed).then(async msg => {
                await msg.react('❌');
                msg.delete({ timeout: 10000 });
              })
            return;
        } else {
            try {
                let user = message.guild.members.cache.get(args[1])
                if(!user) return message.channel.send(`Sorry, but user with this ID (${args[1]}) is not on this server..`);


                let bott = message.guild.members.cache.get(args[0]);
                if(!bott) return message.channel.send(`Sorry, but bot with this ID is not on this server! Please add him first..`);

                const sent = new MessageEmbed()
                .setTitle(`Status updated`)
                .setThumbnail(bott.user.displayAvatarURL())
                .addField('Prefix:', args[2])
                .addField('ID:', args[0])
                .setColor('#8df542')
                .addField('Status:', "Accepted");
            message.author.send(sent);

            const sentd = new MessageEmbed()
                .setAuthor(`${user.user.tag}'s BOT was accepted`)
                .setThumbnail(bott.user.displayAvatarURL())
                .addField('By moderator:', message.author.tag)
                .addField(`BOT's Prefix:`, args[2])
                .addField(`BOT'S Name:`, bott.user.tag)
                .setColor('#8df542')
                .addField('Invite link:', `[CLICK TO INVITE](https://discord.com/oauth2/authorize?client_id=${bott.id}&scope=bot&permissions=2146958847)`);
            const c = bot.channels.cache.get('728986991525494894');
            c.send(`<@${user.user.id}>`);
            c.send(sentd);
            message.channel.send(new MessageEmbed().setDescription(`Bot was accepted!`))
            return;
            } catch(err) {
                console.log(err);
                return;
            }
        }
    }
}