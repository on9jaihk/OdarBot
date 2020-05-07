const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](https://discord.com/api/oauth2/authorize?client_id=707568959381045269&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Finvite%2Fon9jaihk%2Fhelperbot&scope=bot)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "https://discord.com/api/oauth2/authorize?client_id=707568959381045269&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Finvite%2Fon9jaihk%2Fhelperbot&scope=bot")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }
