const robot = require('robotjs');
const sleep = require('./utils/sleep'); //sleep function
const dropAllItems = require('./utils/dropAllItems');
const northFace = require('./utils/northFace')
const yewColorArray = ["271D0E", "322611", "362913", "392C14", "483719", "403117", "5B4621", "685025", "715729", "74592A", "785B2B", "7B5E2B"];
const searchArea = require('./utils/searchArea');
function sleepBasic(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};


function main() {
    console.log("Starting Main....")
    sleepBasic(3000);
    console.log("Facing North....")
    northFace();
    sleepBasic(500);
    console.log("Finding Indicated Resource");
    sleep(500);
    var foundPixel = searchArea(0, 0, 1700, 1055, yewColorArray)
    console.log(foundPixel);
    robot.moveMouseSmooth(foundPixel.randomX, foundPixel.randomY, 1)
    robot.mouseClick("left")
    console.log("Chopping....");
    console.log("Main Ended.");
}

function ssForPx() {
    sleep(1000)
    robot.moveMouse(1710, 925)
    robot.mouseClick('right')
};

function testScreenCap() {
    var img = robot.screen.capture(0, 0, 1920, 1080); //screen shot of whole screen from top left
    // Get color at 2, 3.
        var color = img.colorAt(24,15);
    console.log(color);

    //#38A7F1 is vscode light blue
    //works
};
// testScreenCap();




//Make sure to start script tile in front of WC guild bank
main()

//TODO:
//specific yew tree validator with leaves
//banking route(use a teleport of some kind to make it easy)
// pixel validator for if the resources is there anymore (the idea is if a tree or rock is gone itll be a different color)
//health validator(if we drop below a cerain helth we logout or tele out, check bottom pixel and if black we in trouble)
//setup runtime to allow easy use (click a button and start tree, click another and end)
//persistent inventory check -working
//readjust camera function




