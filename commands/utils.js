const validator = require('./validator');

exports.ping = (bot, message) => {
    return message.channel.send({
        embed: {
            fields: [{
                name: 'Pong',
                value: `${bot.ping} ms`
            }],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL
            }
        }
    });
}

exports.roll = (bot, message, regexRoll) => {
    const number_dice = validator.number_dice(message.content.replace(regexRoll, '$1,$2,$3,$4').split(',')[0]);
    const number_face_dice = validator.number_face_dice(message.content.replace(regexRoll, '$1,$2,$3,$4').split(',')[3]);
    const fields = [];
    for (let dice = 0; dice < number_dice; dice++) {
        fields.push({
            name: `r${dice + 1}d${number_face_dice}`,
            value: Math.floor(Math.random() * number_face_dice) + 1
        });
    }
    return message.channel.send({
        embed: {
            fields: fields,
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL
            }
        }
    });
}