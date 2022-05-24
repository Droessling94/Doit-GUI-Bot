const robot = require('robotjs');
const getRandomInt = require('./getRandomInt');
const sleep = require('./sleep');

module.exports = function dropMenuOption(x,y){
robot.mouseClick('right');
sleep()
let dropBoxX = getRandomInt(x,40,40);
let dropBoxY = getRandomInt(y + 45,1,1);

if(y > 928){ // Bottom row of inventory adjustments as the dropdown doesnt go outside of screen
    dropBoxY = getRandomInt(y + 28,2,2);
    if (x > 1791 && y == 928){ // Second to last row inventory adjustments as dropdown doesnt move that far right off screen
        dropBoxX = getRandomInt(x);
    }
}
robot.moveMouseSmooth(dropBoxX, dropBoxY, 1.5);
robot.mouseClick();
};