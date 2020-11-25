var gameState=0;
var playerCount=0;
var database,form,player,game;

function setup(){
createCanvas(400,400)
database=firebase.database()
game=new Game()//object of game class
game.getState()
game.start()
}

function draw(){
 background("white") 
}

