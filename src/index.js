const path = require('node:path');
const koffi = require('koffi');

const dllPath = path.resolve(__dirname, "../", "wooting-rgb-sdk64.dll");
const lib = koffi.load(dllPath);

exports.MAX_COLS = 21;
exports.MAX_ROWS = 6;

exports.connectDevice = () => {
    const wootingRgbKbdConnected = lib.func('bool wooting_rgb_kbd_connected()');
    return wootingRgbKbdConnected();
};

exports.setArrayRGB = (array) => {
    const wootingRgbArraySetFull = lib.func('bool wooting_rgb_array_set_full(const uint8_t *colors_buffer)');
    return wootingRgbArraySetFull(array);
}

exports.setRGB = (row, col, red, green, blue) => {
    const wootingRgbArraySetSingle = lib.func('bool wooting_rgb_array_set_single(uint8_t row, uint8_t column, uint8_t red, uint8_t green, uint8_t blue)');
    return wootingRgbArraySetSingle(row, col, red, green, blue);
}

exports.setRGBDirect = (row, col, red, green, blue) => {
    const wootingRgbDirectSetKey = lib.func('bool wooting_rgb_direct_set_key(uint8_t row, uint8_t column, uint8_t red, uint8_t green, uint8_t blue)');
    return wootingRgbDirectSetKey(row, col, red, green, blue);
}

exports.resetRGB = () => {
    const wootingRgbResetRgb = lib.func('bool wooting_rgb_reset_rgb()');
    return wootingRgbResetRgb();
}

exports.resetRGBForAllDevice = () => {
    const wootingRgbReset = lib.func('bool wooting_rgb_reset()');
    return wootingRgbReset();
}

exports.resetRGBDirect = (row, col) => {
    const wootingRgbDirectResetKey = lib.func('bool wooting_rgb_direct_reset_key(uint8_t row, uint8_t column)');
    return wootingRgbDirectResetKey(row, col);
}

exports.updateArrayRGB = () => {
    const wootingRgbArrayUpdateKeyboard = lib.func('bool wooting_rgb_array_update_keyboard()');
    return wootingRgbArrayUpdateKeyboard();
}

exports.setAutoUpdate = (isUpdateAuto) => {
    const wootingRgbArrayAutoUpdate = lib.func('void wooting_rgb_array_auto_update(bool auto_update)');
    return wootingRgbArrayAutoUpdate(isUpdateAuto);
}

// implement later
// const wootingRgbSetDisconnectedCb = lib.func('void wooting_rgb_set_disconnected_cb(void_cb cb)');