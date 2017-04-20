/* global Crafty */
/* global Piece */

function Pawn(x, y, board, color) {
    Piece.call(this, x, y, board, color);
    
    this.xOffset = -15;
    this.yOffset = -4;
    
    this.can_move = function(x, y) {
        
        if(this.x == x) {
            if(this.y - y == 1 && this.color == "white" || this.y - y == -1 && this.color == "black") {
                return true;
            }
        
            if((this.y - y == 2 && this.color == "white" || this.y - y == -2 && this.color == "black") && this.has_moved == false) {
                return true;
            }
        } else if(Math.abs(this.x - x) == 1) {
            //possible capture
            var to_piece = board.get_square(x, y).get_piece();
            if(to_piece != undefined && to_piece.color != "white") {
                return true;
            }
        }
        
        return false;
    };
    
    this.drawPiece = function() {
        this.element = Crafty.e("2D, Canvas, Tween, " + color + "_pawn")
            .attr({x: this.x * board.square_size + this.xOffset, y: this.y * board.square_size + this.yOffset, w: board.square_size, h: board.square_size});
    };
}