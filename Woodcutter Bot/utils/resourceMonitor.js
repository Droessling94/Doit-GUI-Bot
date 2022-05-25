const searchArea = require('./searchArea')
const robot = require('robotjs');
//RESOURCEMONITOR WILL ONLY RETURN TRUE OR FALSE, WITH INTENT OF CHECKING EVERY LOOP//
// module.exports = function resourceMonitor(color, colorarray){
//     var colorAtStart = color;
//     var reScannedArea = robot.screen.capture(750, 450,400,300); //Re-searching a new area to deal with player moving and screen changing
//     for (let pixelCheckIter = 0; pixelCheckIter = 1000; pixelCheckIter++) { //check 1000px in our box before we move on
//         var randomX = getRandomInt(0, 0, 400);
//         var randomY = getRandomInt(0, 0, 300); 
//         var chosenColor = img.colorAt(randomX, randomY); //checks a random pixel color on screen
//     if(color == chosenColor){ 
//         let foundPixel = doubleCheckColor(chosenColor,colorarray,randomX,randomY);
//         while(color == foundPixel.chosenColor){
//             return false;
//         }
//     };
//     return true;
// };

module.exports = function resourceMonitor(color, colorArray){
 let monitoredPixelSearch = searchArea(0,0,1750,950,colorArray);
    if(color == monitoredPixelSearch.chosenColor){
        var i =1; 
        while(i > 0){
            let img = robot.screen.capture(monitoredPixelSearch.randomX, monitoredPixelSearch.randomY, 1, 1);
            let reCheckedPixel = img.colorAt(0, 0)
            if(color != reCheckedPixel){
                return console.log("Monitoring Done, Pixels Changed...");
            }
            console.log( "Monitoring....");
        }
    };
    console.log("Colors dont match");
    resourceMonitor(color,colorArray);
};