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
    this.pieces = new Array();

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
    this.last_clicked = null;
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

            this.board_array[x][y].element = Crafty.e("2D, Canvas, Color, Mouse")
                .color(color)
                .attr({x: x * this.square_size, y: y * this.square_size, w: this.square_size, h: this.square_size})
                .bind("Click", function(e) {
                    var board = window.board;
                    
                    if(board.last_clicked == null) {
                        board.last_clicked = board.get_square(Math.floor(e.realX/80), Math.floor(e.realY/80));
                        if(board.last_clicked.get_piece == null) {
                            board.last_clicked = null;
                        }
                    } else {
                        var to_square = board.get_square(Math.floor(e.realX/80), Math.floor(e.realY/80));
                        var from_piece = board.last_clicked.get_piece();
                        board.last_clicked = null;
                        
                        from_piece.set_square(to_square.x,to_square.y);
                        
                    }
                });
        }
    }
    
    this.setPieces = function(){
        //Set the pawns
        for(var i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(i,6,this,"white"));
            this.pieces.push(new Pawn(i,1,this,"black"));
        }
        
        this.pieces.push(new Rook(0, 0, this, "black"));
        this.pieces.push(new Rook(7, 0, this, "black"));
        this.pieces.push(new Rook(0, 7, this, "white"));
        this.pieces.push(new Rook(7, 7, this, "white"));
        
        this.pieces.push(new Knight(1, 0, this, "black"));
        this.pieces.push(new Knight(6, 0, this, "black"));
        this.pieces.push(new Knight(1, 7, this, "white"));
        this.pieces.push(new Knight(6, 7, this, "white"));
        
        this.pieces.push(new Bishop(2, 0, this, "black"));
        this.pieces.push(new Bishop(5, 0, this, "black"));
        this.pieces.push(new Bishop(2, 7, this, "white"));
        this.pieces.push(new Bishop(5, 7, this, "white"));
        
        this.pieces.push(new Queen(3, 0, this, "black"));
        this.pieces.push(new Queen(3, 7, this, "white"));
        
        this.pieces.push(new King(4, 0, this, "black"));
        this.pieces.push(new King(4, 7, this, "white"));
        
        this.drawPieces();
    };
    
    this.get_square = function(x, y) {
        return this.board_array[x][y];
    };
    
    this.drawPieces = function() {
        for(var x in this.pieces) {
            this.pieces[x].drawPiece();
        }
    }
}