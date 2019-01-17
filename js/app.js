const game = new Game();

document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', function(event){
    console.log(event.key); //outputs a string naming the pressed key 
    game.handleKeyDown(event);
});