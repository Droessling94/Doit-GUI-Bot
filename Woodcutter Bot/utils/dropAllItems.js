const robot = require('robotjs');
const sleep = require('./sleep'); //sleep function
const getRandomInt = require('./getRandomInt');
const dropMenuOption = require('./dropMenuOption');







module.exports = function dropAllItems( colorPalletteArray ) {
    const inv1 = { x: 1755, y: 752 }
    const inv2 = { x: 1796, y: 752 }
    const inv3 = { x: 1837, y: 752 }
    const inv4 = { x: 1878, y: 752 }
    const inv5 = { x: 1755, y: 788 }
    const inv6 = { x: 1796, y: 788 }
    const inv7 = { x: 1837, y: 788 }
    const inv8 = { x: 1878, y: 788 }
    const inv9 = { x: 1755, y: 824 }
    const inv10 = { x: 1796, y: 824 }
    const inv11 = { x: 1837, y: 824 }
    const inv12 = { x: 1878, y: 824 }
    const inv13 = { x: 1755, y: 860 }
    const inv14 = { x: 1796, y: 860 }
    const inv15 = { x: 1837, y: 860 }
    const inv16 = { x: 1878, y: 860 }
    const inv17 = { x: 1755, y: 896 }
    const inv18 = { x: 1796, y: 896 }
    const inv19 = { x: 1837, y: 896 }
    const inv20 = { x: 1878, y: 896 }
    const inv21 = { x: 1755, y: 932 }
    const inv22 = { x: 1796, y: 932 }
    const inv23 = { x: 1837, y: 932 }
    const inv24 = { x: 1878, y: 932 }
    const inv25 = { x: 1755, y: 968 }
    const inv26 = { x: 1796, y: 968 }
    const inv27 = { x: 1837, y: 968 }
    const inv28 = { x: 1878, y: 968 }
    let invArray = [inv1, inv2, inv3, inv4,
        inv5, inv6, inv7, inv8, inv9, inv10, inv11, inv12,
        inv13, inv14, inv15, inv16, inv17, inv18, inv19, inv20,
        inv21, inv22, inv23, inv24, inv25, inv26, inv27, inv28];

    console.log("Dropping All Items From: " + colorPalletteArray);
    robot.keyToggle("shift",'down');
    for (let i = 0; i < 28; i++) {
        let randomX = getRandomInt(invArray[i].x,5,5); //Chooses random X coordinate within 6px radius
        let randomY = getRandomInt(invArray[i].y,5,5); //Chooses random Y coordinate within 6px radius
        robot.moveMouseSmooth(randomX, randomY, 1.2);
        robot.mouseClick('left');
        sleep();
    };
    robot.keyToggle("shift", "up");

    console.log("All Items Dropped");
};
