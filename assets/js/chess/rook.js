/* global Crafty */
/* global Piece */

function Rook(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.xOffset = -12;
    this.yOffset = -4;
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, " + color + "_rook")
             .attr({x: this.x * board.square_size - 12, y: this.y * board.square_size - 4, w: board.square_size, h: board.square_size});
    }
    
}