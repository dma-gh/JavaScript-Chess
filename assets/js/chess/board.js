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
    this.turn_count = 0;

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
    
    this.get_square_color = function(x, y) {
        var color;
        
        if(y % 2 == 0) {
            // y is even
            if(x % 2 == 0) {
                color = "lightgray";
            } else {
                color = "brown";
            }
        } else {
            //y is odd
            if(x % 2 == 0) {
                color = "brown";
            } else {
                color = "lightgray";
            }
        }
        
        return color;
    };
    
    var color;
    for(var x in this.board_array) {
        for(var y in this.board_array[x]) {
            
            color = this.get_square_color(x,y);

            this.board_array[x][y].element = Crafty.e("2D, Canvas, Color, Mouse")
                .color(color)
                .attr({x: x * this.square_size, y: y * this.square_size, w: this.square_size, h: this.square_size})
                .bind("Click", function(e) {
                    var board = window.board;
                    var color;
                    
                    if(board.last_clicked == null) {
                        board.last_clicked = board.get_square(Math.floor(e.realX/80), Math.floor(e.realY/80));
                        if(board.last_clicked.get_piece === undefined) {
                            board.last_clicked = null;
                        } else {
                            color = board.last_clicked.element.color;
                            board.last_clicked.element.color("yellow");
                        }
                    } else {
                        var to_square = board.get_square(Math.floor(e.realX/80), Math.floor(e.realY/80));
                        var from_piece = board.last_clicked.get_piece();
                        var to_piece = to_square.get_piece();

                        board.last_clicked.element.color(board.get_square_color(board.last_clicked.x, board.last_clicked.y));
                        board.last_clicked = null;
                        
                        if(from_piece.can_move(to_square.x, to_square.y) && from_piece.is_turn()) {
                            from_piece.set_square(to_square.x, to_square.y);
                        
                            if(to_piece !== undefined) {
                                to_piece.clear_piece();
                            }
                        }
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
    };
}