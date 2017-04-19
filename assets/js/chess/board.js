/* global Square */
/* global Crafty */
/* global Pawn */
/* global Knight */
/* global Rook */
/* global Queen */
/* global Bishop */
/* global King */

function Board() {
    this.board_array = new Array(7);

    for (var i = 0; i < 8; i++) {
        this.board_array[i] = new Array(7);
    }
    
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
            this.board_array[i][j] = new Square(i, j);
        }
    }
    
    //Draw the board
    this.square_size = 80;
    var color;
    for(var x in this.board_array) {
        for(var y in this.board_array[x]) {
            
            if(y % 2 == 0) {
                // y is even
                if(x % 2 == 0) {
                    color = "brown";
                } else {
                    color = "lightgray";
                }
            } else {
                //y is odd
                if(x % 2 == 0) {
                    color = "lightgray";
                } else {
                    color = "brown";
                }
            }

            Crafty.e("2D, Canvas, Color")
                .color(color)
                .attr({x: x * this.square_size, y: y * this.square_size, w: this.square_size, h: this.square_size});
        }
    }
    
    this.setPieces = function(){
        //Set the pawns
        for(var i = 0; i < 8; i++) {
            new Pawn(i,6,this,"white").drawPiece();
            new Pawn(i,1,this,"black").drawPiece();
        }
        
        new Rook(0, 0, this, "black").drawPiece();
        new Rook(7, 0, this, "black").drawPiece();
        new Rook(0, 7, this, "white").drawPiece();
        new Rook(7, 7, this, "white").drawPiece();
        
        new Knight(1, 0, this, "black").drawPiece();
        new Knight(6, 0, this, "black").drawPiece();
        new Knight(1, 7, this, "white").drawPiece();
        new Knight(6, 7, this, "white").drawPiece();
        
        new Bishop(2, 0, this, "black").drawPiece();
        new Bishop(5, 0, this, "black").drawPiece();
        new Bishop(2, 7, this, "white").drawPiece();
        new Bishop(5, 7, this, "white").drawPiece();
        
        new Queen(3, 0, this, "black").drawPiece();
        new Queen(3, 7, this, "white").drawPiece();
        
        new King(4, 0, this, "black").drawPiece();
        new King(4, 7, this, "white").drawPiece();
    }
    
    this.get_square = function(x, y) {
        return this.board_array[x][y];
    };
}