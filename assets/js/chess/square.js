function Square(x, y) {
    this.x = x;
    this.y = y;
    this.element;
    
    this.get_piece = function(board) {
        for(var x in window.board.pieces) {
            if(window.board.pieces[x].x == this.x && window.board.pieces[x].y == this.y) {
                return window.board.pieces[x];
            }
        }
    };
}