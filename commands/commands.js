exports.commands = async (message) => {
    const prefix = require('../config.json').prefix;
    const utils =  require('./utils');
    switch (message.content) {
        case `${prefix}ping`: return await utils.ping(message);
    }
}