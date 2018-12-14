const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTE3NzI0MzU2NTMzNTUxMTA0.DuzdhQ.TFkuUp-UGNaJRJ4as0yATnKozVE'

client.on ('ready', => {
    console.log('Ready');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);

bot.on('ready',function(){
    console.log("SinisterBot Ready! :3");
})

bot.on('message', function(message){
    if(message.content == ';Ninja')
    {
        message.reply('What the FUCK did you just say to me you little SHIT!');
    }
});

bot.on('message', function(message){
    if(message.content == ';Who made this Bot?')
    {
        message.reply('Sin did lol nice job making me!');
    }
});

bot.on("guildMemberAdd", function(member)
{
    member.send('Welcome! :3');

    let memberRole = member.guild.roles.find("name", "STARTER");
    member.addRole(memberRole);
});

bot.on("guildMemberAdd", function(member)
{
    member.send('Welcome! :3');

    let memberRole = member.guild.roles.find("name", "LR");
    member.addRole(memberRole);
});

bot.on('message',function(message){
    if(message.content == 'Hello')
    {
        message.channel.send('Welcome to Raid Inc.! :3' + message.author + ' You Have Now Joined Raid Inc.!, in Raid Inc! you participate in trainings and raids! :3');
    }
    if(message.content == 'Join')
    {
        message.member.send('Welcome! :3');
    }
});

bot.on('message',function(message){
    if(message.content == ';Dice')
    {
        message.channel.send('your random number is ' + Math.floor(Math.random() * 50 + 1));
    }
});

bot.on('message',function(message){
    if(message.content == ';dice')
    {
        message.channel.send('your random number is ' + Math.floor(Math.random() * 50 + 1));
    }
});

bot.on('message',function(message){
    if(message.content == ';Rules')
    {
        message.channel.send('#1 never kill us');
    }
});

bot.on('message',function(message){
    if(message.content == ';Rules')
    {
        message.channel.send('#2 never spam results in ban');
    }
});

bot.on('message',function(message){
    if(message.content == ';Rules')
    {
        message.channel.send('#3 never team kil its just annoying and results in kick');
    }
});

bot.on('message',function(message){
    if(message.content == ';Rules')
    {
        message.channel.send('#4 dont kill admins or me and trix');
    }
});

bot.on('message',function(message){
    if(message.content == ';Rules')
    {
        message.channel.send('#5 if you do any of these doing them over and over you get a ban' + '                                                                                                                                                               #6 dont spam your group it may get us banned and results in a ban');
    }
});

bot.on('message',function(message){
    if(message.content == ';Cmds')
    {
        message.channel.send('";Rules"');
    }
});

bot.on('message',function(message){
    if(message.content == ';Cmds')
    {
        message.channel.send('";Dice"');
    }
});

bot.on('message',function(message){
    if(message.content == ';Cmds')
    {
        message.channel.send('";Who made this Bot?"');
    }
});

bot.on('message',function(message){
    if(message.content == 'Code483193849112384')
    {
        message.channel.send('DEATH TO ALL FURRYS CODE:483193849112384 HAS BEEN LAUNCHED ACTIVATE THE NUKES!');
    }
});

bot.on('message',function(message){
    if(message.content == 'OpenTheDoor')
    {
        message.channel.send('... Nothing happened');
    }
});

bot.on('message',function(message){
    if(message.content == 'WhatsBehindTheDoor')
    {
        message.channel.send('... No one responded');
    }
});

bot.on('message',function(message){
    if(message.content == 'WalkInRoom')
    {
        message.channel.send('...');
    }
});

bot.on('message',function(message){
    if(message.content == 'WalkInRoomCloseDoor')
    {
        message.channel.send('... you just closed the door behind you');
    }
});

bot.on('message',function(message){
    if(message.content == 'JokeSinister')
    {
        message.channel.send('What did the first bottle say to the second bottle? Nothing bottles dont talk faggot');
    }
});

bot.login('NTE3NzI0MzU2NTMzNTUxMTA0.DuzdhQ.TFkuUp-UGNaJRJ4as0yATnKozVE');

