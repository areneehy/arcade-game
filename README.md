```
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
```

```
Player.prototype.score = function() {
    this.y += 400;
    var enemy = new Enemy(0, Math.random() * (350 - 50) + 50, Math.random() * (400 - 100) + 100);
    allEnemies.push(enemy);
    score += 1;
    this.scoreUpdate();
};
```


To run the game:

Locate the index.html file in the arcade-game folder.
Double click to load the game into your browser.
