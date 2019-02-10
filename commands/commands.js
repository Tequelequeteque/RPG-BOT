const _prefix = require('../config.json').prefix;
const _utils = require('./utils');

exports.commands = async (_bot, _message) => {
    if (!_message.content.startsWith(_prefix)) return;
    const _rollRegex = new RegExp(`^${_prefix}r(\\d*)?((d)(\\d*))?$`, 'gm');
    switch (_message.content.split(' ')[0]) {
        case `${_prefix}ping`: return await _utils.ping(_bot, _message);
        default:
            if (_rollRegex.test(_message.content)) return await _utils.roll(_bot, _message, _rollRegex);
    }
}