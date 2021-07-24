let livinlife = require("./class.js")
module.exports = class Hunter extends livinlife {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0
        this.directions = [];
    }
    chooseCell(character) {
        super.getNewCoordinates()
        return super.chooseCell(character);
    }
    move() {
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
    eatpredator() {
        var emptyCells = this.chooseCell(3)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break
                }

            }
        } else {
            this.move()
        }
    }
    eatsunk() {
        var emptyCells1 = this.chooseCell(6)
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]
        if (newCell1) {

            var newX = newCell1[0]
            var newY = newCell1[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in sunkarr) {
                if (newX == sunkarr[i].x && newY == sunkarr[i].y) {
                    sunkarr.splice(i, 1)
                    this.die()
                }
                else {
                    this.die()
                }
                break
            }

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in hunterArr) {
            if (this.x == hunterArr[i].x && this.y == hunterArr[i].y) {
                hunterArr.splice(i, 1);
                break;
            }
        }
    }
}

