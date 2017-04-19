/* global Crafty */
/* global Board */
/* global Piece */

var assetsObj = {
    "sprites": {
        "assets/images/pieces_sprites.png": {
            tile: 322,
            tileh: 320,
            paddingX: 0, 
            
            map: {
                white_king: [0,0],
                white_queen: [1,0],
                white_bishop: [2,0],
                white_knight: [3,0],
                white_rook: [4,0],
                white_pawn: [5,0],
                black_king: [0,1],
                black_queen: [1,1],
                black_bishop: [2,1],
                black_knight: [3,1],
                black_rook: [4,1],
                black_pawn: [5,1],
            }
        }
    }
}

window.onload =function() {
    Crafty.init(640,640,document.getElementById("game"));
    Crafty.load(assetsObj, function(){
        Crafty.background('#000');
        var board = new Board();
        board.setPieces();
    });
};