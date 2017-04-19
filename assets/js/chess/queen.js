/* global Crafty */
/* global Piece */

function Queen(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.xOffset = -4;
    this.yOffset = -5;
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, " + color + "_queen")
            .attr({x: this.x * board.square_size + this.xOffset, y: this.y * board.square_size + this.yOffset, w: board.square_size, h: board.square_size});
    }
}