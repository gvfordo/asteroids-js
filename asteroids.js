(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
		Asteroids.MovingObject.call(this, pos, vel, radius);
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
	};

	Asteroid.COLOR = "black";
	Asteroid.RADIUS = 50;
	Asteroid.MAXVEL = 10;


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