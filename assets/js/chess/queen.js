/* global Crafty */
/* global Piece */

function Queen(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, " + color + "_queen")
            .attr({x: x * board.square_size - 4, y: y * board.square_size - 5, w: board.square_size, h: board.square_size});
    }
}