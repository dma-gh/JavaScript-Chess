/* global Crafty */

function Piece(x, y, board, color) {
    this.square = board.get_square(x, y);
    if(color === "white" || color === "black") {
        this.color = color;
    } else {
        console.log("Invalid Color");
        this.color = "white";
    }
}