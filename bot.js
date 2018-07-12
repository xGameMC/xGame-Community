const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ip server:soon`,"ip server:soon")
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


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ورحمة الله وبركاته') {
              message.channel.send('** وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'احتاج مساعده') {
              message.channel.send('**-new يمكنك انشاء تذكره عن طريق الامر الاتي او التوجه الى احد رومات المساعده **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$invite') {
              message.channel.send('**بأمكانك دعوه اصدقائك الى السيرفر من خلال الرابط الاتي **');
			                message.channel.send('** https://discord.gg/rknN5TE **');

              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.on('message', message => {
    var prefix = "$"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$shop server') {
              message.channel.send('**المتجر سوف يتوفر عن قريب  **');
			                message.channel.send('** SOON **');

              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$shop discord') {
              message.channel.send('**المتجر سوف يتوفر عن قريب  **');
			                message.channel.send('** SOON **');

              message.channel.sendFile("./photoshop.PNG");
               

            }
});


const fs = require("fs"); 
const Canvas = require("canvas");
const jimp = require("jimp");
const prefix = "$"; 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("***bc <message>**");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("✅");
            const w = ['./img/w1.png'];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '15px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});



client.login(process.env.BOT_TOKEN);
