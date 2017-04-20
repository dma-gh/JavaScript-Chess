/* global Crafty */

function Piece(x, y, board, color) {
    this.x = x;
    this.y = y;
    this.xOffset = 0;
    this.yOffset = 0;
    this.element;
    this.has_moved = false;
    
    if(color === "white" || color === "black") {
        this.color = color;
    } else {
        console.log("Invalid Color");
        this.color = "white";
    }
    
    this.is_turn = function() {
        if(this.color == "white" && board.turn_count % 2 == 0) {
            return true;
        } else if(this.color == "black" && board.turn_count % 2 != 0) {
            return true;
        }
        
        return false;
    }
    
    this.can_move = function(x, y) {
      return true;
    };
    
    this.get_square = function() {
        return board.get_square(this.x,this.y);
    };
    
    this.set_square = function(x, y) {
        this.square = board.get_square(x, y);
        this.x = x;
        this.y = y;
        
        this.element.tween({x: x * window.board.square_size + this.xOffset, y: y * window.board.square_size + this.yOffset}, 400);
        
        board.turn_count += 1;
        this.has_moved = true;
    };
    
    this.clear_piece = function() {
        this.x = -80;
        this.y = -80;
        this.element.x = -80;
        this.element.y = -80;
    };
}