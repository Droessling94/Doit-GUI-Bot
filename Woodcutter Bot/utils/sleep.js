const getRandomInt = require('./getRandomInt');

function sleepBasic(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

module.exports = function sleep(){

    let randomSleepInt = getRandomInt(500, 200, 300) //randomizing sleep time
    sleepBasic(randomSleepInt);
}
