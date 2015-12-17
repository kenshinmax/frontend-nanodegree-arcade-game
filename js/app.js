// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set initial location
    this.x = parseInt(Math.random() * 10) + 1
    this.y = parseInt(Math.random() * 20) + 1;

    // set initial speed
    this.speed = 3;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x * dt;
    this.y = this.y * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
 var Player = function(x,y) {
      this.sprite = 'images/char-boy.png';
      this.x = x;
      this.y = y;
      this.speed = 100;
      // set the initial location
      //this.startPosition();
      
 };


Player.prototype.update = function(dt) {
     this.x = this.x * dt;
     this.y = this.y * dt;
};


Player.prototype.render = function(dt) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){
    if(direction == 'left')
        this.x -=100;  
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = new Array();


// Create enemy objects
for (var i=0; i <= 3; i++)
 allEnemies.push(new Enemy());

var player = new Player(200,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    Player.prototype.handleInput(allowedKeys[e]);
    //player.handleInput(allowedKeys[e.keyCode]);
});
