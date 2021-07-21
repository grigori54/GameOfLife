var socket = io()
let side = 30;
function setup() {

    createCanvas(20 * side, 20 * side);
    background('#acacac');
}
weath = "summer"

socket.on('weather', function (data) {
    weath = data
})

function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                if (weath == "summer") {
                    fill("green");
                }
                else if (weath == "autumn") {
                    fill("dark yellow");
                }
                else if (weath == "winter") {
                    fill("white");
                }
                else if (weath == "spring") {
                    fill("#4dffa6")
                }

                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#000000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#CCB478");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#EF2E05");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#A5A85B");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("#0898F7");
                rect(x * side, y * side, side, side);
            }
        }

    }


}
socket.on('send matrix', nkarel)

