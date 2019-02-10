'use strict';
exports.number_dice = (_number_dice) => {
    if (_number_dice !== '' && _number_dice !== null && _number_dice !== undefined)
        return parseInt(_number_dice, 10) > 0 ? parseInt(_number_dice, 10) : 1;
    return 1;
}
exports.number_face_dice = (_number_face_dice = '0') => {
    if (_number_face_dice !== '' && _number_face_dice !== null && _number_face_dice !== undefined)
        return parseInt(_number_face_dice, 10) > 1 ? parseInt(_number_face_dice, 10) : 20;
    return 20;
}