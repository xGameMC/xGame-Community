const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`xGameMC`,"")
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
  client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('لا يمكنك كتابه الامر الاتي');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©Ghost"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
    
        
  
  });



client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

   
client.on('message', message => {   
if (message.author.boss) return;
var prefix = "$";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "warn") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("لايمكنك كتابة الامر الاتي  ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('** يجب عليك وضع المنشن **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(1).join(" ");
message.guild.member(user).addRole(467186545707712514);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Warned!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Warn!`, user.displayAvatarURL)
.setDescription(`
${user} االسلام عليكم لقد تلقيت انذار من قبل احد الاداره 
[ ${reason} ] : السبب

اذا كان الانذار فيه خطأ ف يرجى اخبار الاداره
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
});


lient.on('message', eyad => {
  if (eyad.content.startsWith('unmute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("انت لا تمتلك الخاصيه المطلوبه | :negative_squared_cross_mark: ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('منشن الشخص الذي تريد فك الميوت عنه');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}> **)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png%22)

client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(<@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}>)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png%22)
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
client.on('message', eyad => {
  if (eyad.content.startsWith('mute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("انت لا تمتلك الخاصيه المطلوبه | :negative_squared_cross_mark: ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('منشن الشخص الذي تريد ان تعطيه ميوت كتابي ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png%22)

client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(<@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}>)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png%22)
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})
 

client.login(process.env.BOT_TOKEN);
