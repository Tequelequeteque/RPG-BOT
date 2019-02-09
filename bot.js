'use strict';
const config = require('./config');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', async _ => {
    console.log(`Bot is ready! ${bot.user.username}`);
    try {
        console.log(await bot.generateInvite(['ADMINISTRATOR']));
    } catch (error) {
        console.error(error);
    }
});
bot.on('message', async (message) => {
    switch (message.content) {
        case 'ping': return message.channel.send('pong');
    }
});
bot.on('message', async (message) => {
    switch (message.content) {
        case 'leroyy': return message.channel.send('jankens');
    }
});

bot.login(config.token);
