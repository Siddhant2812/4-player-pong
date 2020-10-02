var ball,database,position,ballPosition;
var gameState;
var playerCount,allPlayers;
var form,player,game;
var paddle1,paddle2,paddle3,paddle4;
var paddles = [];

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    //background("white");

    if(playerCount === 4){
        game.update(1);
      }
    /*if(gameState === 1){
        clear();
        game.play();
      }*/

     drawSprites();
    } 