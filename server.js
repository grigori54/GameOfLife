let express = require("express");
let fs = require('fs');
let app = express();
let server = require('http').Server(app);
let io = require("socket.io")(server);
server.listen(3000);
weath = "summer"
app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
})

matrix = [];
var Grass = require("./Grass.js")
var GrassEater = require("./Grasseather.js")
var Predator = require("./Prdator.js")
var Hunter = require("./Hunter.js")
var jur = require("./jur.js")
var sunk = require("./Sunk.js")
var Virus = require("./Virus.js")
function generator(matLen, gr, grEat, pr, hun, vir, sun, jr) {

    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < hun; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
        for (let i = 0; i < vir; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 5;
            }
        }
        for (let i = 0; i < sun; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 6;
            }
        }
        for (let i = 0; i < sun; i++) {
            let x = Math.floor(Math.random() * matLen);
            let y = Math.floor(Math.random() * matLen);
            if (matrix[x][y] == 0) {
                matrix[x][y] = 7;
            }
        }
        io.sockets.emit("send matrix", matrix)
        return matrix;

    }

}


grassArr = [];
grassEaterArr = [];
predatorArr = [];
hunterArr = [];
virusArr = [];
sunkarr = [];
jurArr = [];

matrix = generator(20, 20, 20, 20, 20, 20, 20, 20);

function creatobjet(matrix) {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                var gr = new Predator(x, y)
                predatorArr.push(gr)
            } else if (matrix[y][x] == 4) {
                var gr = new Hunter(x, y)
                hunterArr.push(gr)
            } else if (matrix[y][x] == 5) {
                var gr = new Virus(x, y)
                virusArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                var gr = new Virus(x, y)
                virusArr.push(gr)
            }
            else if (matrix[y][x] == 6) {
                var gr = new sunk(x, y)
                sunkarr.push(gr)
            }
            else if (matrix[y][x] == 7) {
                var gr = new jur(x, y)
                jurArr.push(gr)
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function weather(){
    if(weath=="winter"){
        weath="spring"
    }
    else if(weath=="spring"){
        weath="summer"
    }
    else if(weath == "summer"){
        weath = "autumn"
    }
    else if(weath == "autumn"){
        weath = "winter"
    }
    console.log(weath);
    
    io.sockets.emit('weather',weath)
}
setInterval(weather,5000);






function game() {


    for (var i in grassArr) {

        grassArr[i].mul()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
    }


    for (var i in hunterArr) {
        hunterArr[i].move();
        if (predatorArr.length > 5) {
            hunterArr[i].eat();
        }
    }
    for (var i in virusArr) {
        // virusArr[i].mul();
        // virusArr[i].eat();
    }
    for (var i in sunkarr) {

    }
    for (var i in jurArr) {
        jurArr[i].mul()
    }

    io.sockets.emit("send matrix", matrix)

}

setInterval(game, 1000)


io.on('connection', function (socket) {

    creatobjet(matrix)
})

var statistics = {};
setInterval(function () {
    statistics.Grass = grassArr.length;
    statistics.GrassEater = grassEaterArr.length;
    statistics.Predator = predatorArr.length;
    statistics.Hunter = hunterArr.length;
    statistics.Virus = virusArr.length;
    statistics.sunk = sunkarr.length;
    statistics.jur = jurArr.length;
    fs.writeFileSync("statistic.json",
        JSON.stringify(statistics))
}, 1000)

