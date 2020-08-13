const { GuildMember } = require("discord.js");

module.exports = {
    config: {
      name: "reloadcmd",
      aliases: ["reload", "rc"],
      category: "general",
    },
  run: async (bot, message, args) => {
    let own = bot.users.cache.get(`484448041609199620`);
  
      if(message.author.id !== own.id) return message.react('❌');
      
      if(message.author.id === own.id) {
        let dir = args[0];

        let commandName = args[1];

        try {
          delete require.cache[
            require.resolve(`../${dir}/${commandName}.js`)
          ];
          bot.commands.delete(commandName);
          const pull = require(`../${dir}/${commandName}.js`);
          bot.commands.set(commandName, pull);
        } catch (e) {
          return message.channel.send(`Error!`);
        }
        return message.channel.send(`Command - ${args[0]}/**${args[1]}.js** has been reloaded.. <a:SUREcheckmark:715481264315957299>`)
      }
    }
    
}