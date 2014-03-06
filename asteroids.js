(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Asteroid = Asteroids.Asteroid = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
	};

	Asteroids.inherits(Asteroid, Asteroids.MovingObject);

	Asteroid.COLOR = "white";
	Asteroid.RADIUS = 20;
	Asteroid.MAXVEL = 5;

	Asteroid.randomAsteroid = function(dimx, dimy) {
		var that = this;

		return new Asteroid(
				[dimx * Math.random(), dimy * Math.random()],
				that.randomVec()
		);
	};

	Asteroid.randomVec = function() {
		return [(Math.random() * 2 - 1) * this.MAXVEL,
		        (Math.random() * 2 - 1) * this.MAXVEL]
	}
})(this);