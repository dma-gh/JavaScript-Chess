/* global Crafty */

function Piece(x, y, board, color) {
    this.x = x;
    this.y = y;
    this.xOffset = 0;
    this.yOffset = 0;
    this.element;
    
    if(color === "white" || color === "black") {
        this.color = color;
    } else {
        console.log("Invalid Color");
        this.color = "white";
    }
    
    this.get_square = function() {
        return board.get_square(this.x,this.y);
    };
    
    this.set_square = function(x, y) {
        this.square = board.get_square(x, y);
        this.x = x;
        this.y = y;
        
        this.element.tween({x: x * window.board.square_size + this.xOffset, y: y * window.board.square_size + this.yOffset}, 400);
    };
}