class Game{
 constructor(){
 }
 getState(){//reading value of gameState from the database 
  var gameStateRef=database.ref("gameState")
  gameStateRef.on("value",function(data){
   gameState=data.val()   
  })
 }

 update(state){//argument is a new value that has to be written on the database
   database.ref("/").update({//main database
    gameState:state
   })
 }

 start(){
  if(gameState==0){
  player=new Player()
  player.getCount()
  form=new Form()
  form.display()    
  }   
 }
}
