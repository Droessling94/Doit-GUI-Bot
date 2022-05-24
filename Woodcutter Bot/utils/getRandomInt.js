module.exports = function getRandomInt(coordinate, minMod , maxMod) {
    min = Math.ceil(coordinate - minMod);
    max = Math.floor(coordinate + maxMod);
    return Math.floor(Math.random() * (max - min) + min);
};