let livinlife = require("./class.js")
module.export =class jur extends livinlife {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0;
    }


    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 10 ) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newjur = new jur(newX, newY, 7);
            jurArr.push(newjur);
            this.multiply = 0;
        }
    }



}