exports.ping = (bot, message) => {
    return message.channel.send({
        embed: {
            fields: [{
                name: "Pong",
                value: `${bot.ping} ms`
            }],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL
            }
        }
    });
}