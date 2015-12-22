
// set global variables
var rightEdge = 505;
var bottomEdge = 404;
var tileWidth = 101;
var tileHeight = 83;
var lives = 3;
var score = 0;


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set initial location
    this.x = x;
    this.y = y;

    // set initial speed
    this.speed = Math.floor(Math.random() * 250 + 1);;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, player) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x < rightEdge) {
        this.x += dt * this.speed;
        //console.log(this.x);
    }
    else {
        this.x = 0;
    }

    // calulate and update the player score


    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.bugReset = function () {
    for (var i = 0; i < allEnemies.length; i++)
        allEnemies[i].x = -200;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
 var Player = function(x,y) {
      this.sprite = 'images/char-boy.png';
      
      // set the initial location
       this.x = 202;
       this.y = 404;
       this.lives = 3;

 };

function playerInit(){
      locationX = 202;
      locationY = 404;
};


Player.prototype.resetPlayer = function(){
    player.x = 202;
    player.y = 404;
    // update the score
    score += 10;
};

Player.prototype.update = function() {
   if (this.collided()) {
      Enemy.bugReset();
      this.resetPlayer();
    }
    if(this.y < 25){
        this.y = 0;
        this.resetPlayer();
        // display the score
        document.getElementById('score').innerHTML =  score;
    }

    
};


Player.prototype.render = function(dt) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.collided = function () {
    for(var i=0; i < allEnemies.length; i++) {
        if (this.x < allEnemies[i].x + 50 && this.x + 50 > allEnemies[i].x && this.y < allEnemies[i].y + 30 && this.y + 30 > allEnemies[i].y) {
            console.log("collide");
            this.resetPlayer();
            allEnemies[i].bugReset();
        }    
    }
};

Player.prototype.handleInput = function(direction){
    //console.log('dir: ', direction);
     switch(direction) {
        case 'left':
        if(this.x - tileWidth < 0){
            this.x = 0;
        }
        else {
            this.x -= tileWidth;
        }
        break;

        case 'right':
        if(this.x + tileWidth >= rightEdge){
            this.x = 404;
        }
        else {
            this.x += tileWidth;
        }
        break;

        case 'up':
        if(this.y - tileHeight < 0){
            this.y = 0;
            hasReachedWater = true;
        }
        else {
            this.y -= tileHeight;
        }
        break;

        case 'down':
        if(this.y + tileHeight >= bottomEdge){
            this.y = 404;
        }
        else {
            this.y += tileHeight;
        }
        break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = new Array();


// Create enemy objects
var allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-2, 60, 50));
    allEnemies.push(new Enemy(-2, 100, 100));
    allEnemies.push(new Enemy(-2,150, 150));
    allEnemies.push(new Enemy(-2,220, 100));
}());

var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    //Player.prototype.handleInput(allowedKeys[e]);
    player.handleInput(allowedKeys[e.keyCode]);
});
