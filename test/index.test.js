const WootingRGB = require('../src/index.js');

test('Check the connection of Wooting', () => {
    expect(WootingRGB.connectDevice()).toBe(true);
});