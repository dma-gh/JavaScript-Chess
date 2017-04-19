/* global Crafty */
/* global Piece */

function Knight(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.xOffset = -9;
    this.yOffset = -4;
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, Tween, " + color + "_knight")
            .attr({x: this.x * board.square_size + this.xOffset, y: this.y * board.square_size + this.yOffset, w: board.square_size, h: board.square_size});
    }
    
}