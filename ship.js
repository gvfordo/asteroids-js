(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Ship = Asteroids.Ship = function (pos, vel, radius) {
		this.COLOR = "red";
		this.RADIUS = 50;
		this.MAXVEL = 10;
		Asteroids.MovingObject.call(this, pos, vel, this.RADIUS, this.COLOR);
		this.pos = pos;
		this.vel = vel;
	};

	Asteroids.inherits(Asteroid, Asteroids.MovingObject);


	Asteroid.randomAsteroid = function(dimx, dimy) {
		var that = this;
		return new Asteroid(
				[dimx * Math.random(), dimy * Math.random()],
				that.randomVec(),
				that.RADIUS,
				that.COLOR
		);
	};

	Asteroid.randomVec = function() {
		return [(Math.random() * 2 - 1) * this.MAXVEL,
		        (Math.random() * 2 - 1) * this.MAXVEL]
	}
})(this);