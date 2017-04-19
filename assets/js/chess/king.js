/* global Crafty */
/* global Piece */

function King(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, " + color + "_king")
            .attr({x: x * board.square_size - 1, y: y * board.square_size - 3, w: board.square_size, h: board.square_size});
    }
    
}