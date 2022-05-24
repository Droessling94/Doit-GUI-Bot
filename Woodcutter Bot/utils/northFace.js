const robot = require('robotjs');
const getRandomInt = require('./getRandomInt');
const sleep = require('./sleep')

module.exports = function northFace(){
    let randomX = getRandomInt(1760,12,12); //Chooses random X coordinate within 6px radius
    let randomY = getRandomInt(46,12,12); //Chooses random Y coordinate within 6px radius
    robot.moveMouseSmooth(randomX, randomY, 1);
    robot.mouseClick('left');
}