var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 480) {
        this.x = 0;
    }
    if (
        Math.abs(this.x - player.x) < 50 && Math.abs(this.y - player.y) < 50) {
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.scoreUpdate();
};

// Code to display score
var score = 0;
Player.prototype.scoreUpdate = function() {
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = "Score: " + score;
    document.body.insertBefore(scoreDisplay, document.body.firstChild);
};

//Set player boundaries
Player.prototype.update = function() {
    if (this.x >= 425) {
        this.x = 420;
    }
    if (this.x <= 5) {
        this.x = 10;
    }
    if (this.y > 400) {
        this.y = 400;
    }
    if (this.y < 5) {
        this.score();
    }
};

Player.prototype.score = function() {
    this.y += 400;
    var enemy = new Enemy(0, Math.random() * (350 - 50) + 50, Math.random() * (400 - 100) + 100);
    allEnemies.push(enemy);
    score += 1;
    this.scoreUpdate();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        this.x -= 25;
    }
    if (keyPress == 'right') {
        this.x += 25;
    }
    if (keyPress == 'up') {
        this.y -= 25;
    }
    if (keyPress == 'down') {
        this.y += 25;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var player = new Player(200, 400);
var allEnemies = [];
var enemy = new Enemy(0, Math.random() * (350 - 50) + 50, Math.random() * (400 - 100) + 100);
allEnemies.push(enemy);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
