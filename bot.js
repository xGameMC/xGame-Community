const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message',function(message) {
    let messageArray = message.content.split(' ');
    let muteRole = message.guild.roles.get('467054915907485706') || message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
   if(message.content.startsWith(prefix + "mute")) {
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('ℹ **Error:** ``خصائص مفقودة``');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('ℹ **Error:** ``خصائص مفقودة مني``');
       if(!muteMember) return message.channel.send('ℹ **Error:** ``منشن شخص``');
       if(!muteReason) return message.channel.send('ℹ **Error:** ``حدد سبباّ``');
       if(!muteDuration) return message.channel.send('ℹ **Error:** ``حدد وقت زمني``');
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('ℹ **Error:** ``حدد وقت زمني صحيح``');
       message.channel.send(`:white_check_mark: **تم اعطاء العضو ميوت : ${muteMember}**`);
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});


};


client.login(process.env.BOT_TOKEN);
