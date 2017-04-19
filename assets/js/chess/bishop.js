/* global Crafty */
/* global Piece */

function Bishop(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, " + color + "_bishop")
            .attr({x: x * board.square_size - 9, y: y * board.square_size - 4, w: board.square_size, h: board.square_size});
    }
    
}