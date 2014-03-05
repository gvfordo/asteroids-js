(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
		Asteroids.MovingObject.call(this, pos, vel, radius, color);
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	Asteroids.inherits(Asteroid, Asteroids.MovingObject);

	Asteroid.COLOR = "black";
	Asteroid.RADIUS = 20;
	Asteroid.MAXVEL = 5;

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