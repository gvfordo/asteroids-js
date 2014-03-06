(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Bullet = Asteroids.Bullet = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR);
	};

  Bullet.SPEED = 20;
  Bullet.RADIUS = 5;
  Bullet.COLOR = "green";

	Asteroids.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function (game, bulletIdx) {
    var that = this;
    game.asteroids.forEach(function(asteroid, idx) {
      if (!!asteroid && that.isCollidedWith(asteroid)) {
        game.removeAsteroid(idx);
        game.removeBullet(bulletIdx);
      }
    });
    if ((this.pos[0] < 0 || this.pos[0] > Asteroids.DIM_x) ||
       (this.pos[1] < 0 || this.pos[1] > Asteroids.DIM_y)) {
       // bullet is off screen,  remove bullet from game
       game.removeBullet(bulletIdx);
    }
  };


})(this);