(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});



	var Ship = Asteroids.Ship = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
	};

  Ship.RADIUS = 15;
  Ship.COLOR = "red";

	Asteroids.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0],
                this.vel[1] + impulse[1]];
  }

})(this);