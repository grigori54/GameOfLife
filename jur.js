let livinlife = require("./class.js")
module.exports = class jur extends livinlife {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0;
    }
    chooseCell(character) {
        super.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newjur = new jur(newX, newY, 7);
            jurArr.push(newjur);
            this.multiply = 0;
        }
    }
}