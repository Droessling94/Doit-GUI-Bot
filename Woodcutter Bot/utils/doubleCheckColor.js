const robot = require('robotjs');
const getRandomInt = require('./getRandomInt')

module.exports =  function doubleCheckColor(color, colorarray, x, y){
    if (colorarray.includes(color)) { //if the pixel is in our array of colors we move on
        var doubleCheckImg = robot.screen.capture(x -5, y -5, 10, 10) //take the chosen location and check a 7x7 boxed to the bottom right of it
        var nonMatchedColorCount = 0;
        var matchedColorCount = 0; //our variable for keeping track of if a color was in our array later on
        for (let i = 0; i = 9; i++) {
            for (let j = 0; j = 9; j++) {
                let matchedColor = doubleCheckImg.colorAt(i, j) // checking every single pixel in the 7x7
                if (colorarray.includes(matchedColor)) {
                    if (matchedColorCount > 75) { //if more than 36 of our 49 pixels(7x7box) are the color we want move on
                        robot.moveMouse(x + 220, y + 25) //end goal if all goes well, moves us too origal pixel we checked
                        console.log("Success! Moved Mouse to Pixel");
                        break;
                    }
                    matchedColorCount++; //if the color matches in the array we add it up as a correctly colored pixel
                    // console.log("Close Color Matched" + nonMatchedColorCount);
                }
                nonMatchedColorCount++;
                // console.log("Close Color Didnt Match" + nonMatchedColorCount);
                if( nonMatchedColorCount > 100){
                    console.log("Pixel Failed On DoubleCheck, Re-Searching....");
                    return false;
                    
                }
            }

            break;
        }
        return true;
    }
    if( nonMatchedColorCount == 100){
        console.log("Nope Doesnt Pass The Double Check");}
    return false;
}