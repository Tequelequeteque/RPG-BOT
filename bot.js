'use strict';
const config = require('./config');
const Discord = require('discord.js');
const bot = new Discord.Client();
const commands = require('./commands/commands').commands;

bot.on('ready', async _ => {
    console.log(`Bot is ready! ${bot.user.username}`);
    try {
        console.log(await bot.generateInvite(['ADMINISTRATOR']));
    } catch (error) {
        console.error(error);
    }
});

bot.on('message', (message)=> commands(message));
bot.on
bot.login(config.token);

// const commands = async (message) => {
//     switch (message.content) {
//         case 'ping': return await message.channel.send('pong');
//     }
// }