class Game{
    constructor(){

    }

    //fetches gamestate from database
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    //updates gamestate when needed
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
    if(gameState === 0){
        player = new Player();

        //gets player count
        /*var playerCountRef = await database.ref('playerCount').once("value");

        //checks if the player count is available and stores it
        if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }*/
    }

        form = new Form()
        form.display();

        paddle1 = createSprite(490,250,10,50);

        paddle2 = createSprite(10,250,10,50);
        
        paddle3 = createSprite(250,10,50,10);
       
        paddle4 = createSprite(250,490,50,10);

        //players = [player1,player2,player3,player4];
    }

    play(){
        
    }
    
}