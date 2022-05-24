const robot = require('robotjs');
const doubleCheckColor = require('./doubleCheckColor');
const getRandomInt = require('./getRandomInt')

module.exports =  function searchArea(x, y, height, width, colorarray) { //x and y are top left of area, heigh and width is of area searched in pixels, colorarray is of desired colors of object 
    var img = robot.screen.capture(x, y, height, width); //screen shot of whole screen from top left
     for (let pixelCheckIter = 0; pixelCheckIter = 1000; pixelCheckIter++) { //check 1000px in our box before we move on
        var randomX = getRandomInt(0, 0, height) //0 as min and height as max
        var randomY = getRandomInt(0, 0, width) //0 as min and width as max
        // console.log(randomX);
        // console.log(randomY);
        var chosenColor = img.colorAt(randomX, randomY); //checks a random pixel color on screen
        // console.log(chosenColor);
        let foundPixel = doubleCheckColor(chosenColor,colorarray,randomX,randomY);
        if(foundPixel == true){
            // console.log("found a pixel that passed the doubleCheck, Nice!");
            return {randomX, randomY};
        }
        // console.log(foundPixel); 
    }
    
    console.log(("This Search Didnt Find Anything, Re-Searching..."));
    searchArea(x, y, height, width, colorarray);
    // readjustCamera(); //Move the camera is we dont find any 
    // console.log(img);

}

//760 - 1260 x and width of first set of trees
//270 - 770 y and height of first set of trees