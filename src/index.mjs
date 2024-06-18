import path from 'path';
import koffi from 'koffi';

const dllPath = path.resolve(import.meta.dirname, "../", "wooting-rgb-sdk64.dll");
const lib = koffi.load(dllPath);

export const MAX_COLS = 21;
export const MAX_ROWS = 6;

export const connectDevice = () => {
    const wootingRgbKbdConnected = lib.func('bool wooting_rgb_kbd_connected()');
    return wootingRgbKbdConnected();
};

export const setArrayRGB = (array) => {
    const wootingRgbArraySetFull = lib.func('bool wooting_rgb_array_set_full(const uint8_t *colors_buffer)');
    return wootingRgbArraySetFull(array);
}

export const setRGB = (row, col, red, green, blue) => {
    const wootingRgbArraySetSingle = lib.func('bool wooting_rgb_array_set_single(uint8_t row, uint8_t column, uint8_t red, uint8_t green, uint8_t blue)');
    return wootingRgbArraySetSingle(row, col, red, green, blue);
}

export const setRGBDirect = (row, col, red, green, blue) => {
    const wootingRgbDirectSetKey = lib.func('bool wooting_rgb_direct_set_key(uint8_t row, uint8_t column, uint8_t red, uint8_t green, uint8_t blue)');
    return wootingRgbDirectSetKey(row, col, red, green, blue);
}

export const resetRGB = () => {
    const wootingRgbResetRgb = lib.func('bool wooting_rgb_reset_rgb()');
    return wootingRgbResetRgb();
}

export const resetRGBForAllDevice = () => {
    const wootingRgbReset = lib.func('bool wooting_rgb_reset()');
    return wootingRgbReset();
}

export const resetRGBDirect = (row, col) => {
    const wootingRgbDirectResetKey = lib.func('bool wooting_rgb_direct_reset_key(uint8_t row, uint8_t column)');
    return wootingRgbDirectResetKey(row, col);
}

export const updateArrayRGB = () => {
    const wootingRgbArrayUpdateKeyboard = lib.func('bool wooting_rgb_array_update_keyboard()');
    return wootingRgbArrayUpdateKeyboard();
}

export const setAutoUpdate = (isUpdateAuto) => {
    const wootingRgbArrayAutoUpdate = lib.func('void wooting_rgb_array_auto_update(bool auto_update)');
    return wootingRgbArrayAutoUpdate(isUpdateAuto);
}

// implement later
// const wootingRgbSetDisconnectedCb = lib.func('void wooting_rgb_set_disconnected_cb(void_cb cb)');