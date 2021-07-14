let livinlife = require("./class.js")
module.exports=class sunk extends livinlife {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0

    }
    eat() {
        var emptyCells = this.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in hunterArr) {
                if (newX == hunterArr[i].x && newY == hunterArr[i].y) {
                    hunterArr.splice(i, 1)
                    break
                }
            }
        }
    }
}