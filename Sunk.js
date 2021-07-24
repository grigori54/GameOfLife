let livinlife = require("./class.js")
module.exports = class sunk extends livinlife {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
    }
    chooseCell(character) {
        super.getNewCoordinates()
        return super.chooseCell(character);
    }  
}