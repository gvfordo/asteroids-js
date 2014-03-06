(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});



	var Ship = Asteroids.Ship = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
    this.orientation = 0;
	};

  Ship.RADIUS = 15;
  Ship.COLOR = "red";

	Asteroids.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0],
                this.vel[1] + impulse[1]];
  };

  Ship.prototype.changeDir = function(rotation) {
    var currentSpeed =
    this.vel = [this.vel[0] + impulse[0],
                this.vel[1] + impulse[1]];
  };

  Ship.prototype.fireBullet = function() {
    debugger
    return new Asteroids.Bullet(this.pos, this.getBulletVelocity());
  };

  Ship.prototype.changeOrientation = function(diff) {
    this.orientation += diff;
    // handle over 360 and under 0
  }

  Ship.prototype.getBulletVelocity = function(){
    var x_coord = Asteroids.Bullet.SPEED * Math.cos(this.orientation * Math.PI / 180);
    var y_coord  = Asteroids.Bullet.SPEED * Math.sin(this.orientation * Math.PI / 180);

    return [x_coord, y_coord];
  };




})(this);



