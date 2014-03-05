(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});


	var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
		COLOR =
		Asteroids.MovingObject.call(this, pos, vel, radius, color);
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.prototype.COLOR = "black";
	Asteroid.prototype.RADIUS = 20;
	Asteroid.prototype.MAXVEL = 5;

	Asteroid.prototype.randomAsteroid = function(dimx, dimy) {
		return new Asteroid(
				[dimx * Math.random(), dimy * Math.random()],
				this.randomVec(),
				this.RADIUS,
				this.COLOR
		);
	};

	Asteroid.protoype.randomVec = function() {
		return [(Math.random() * 2 - 1) * this.MAXVEL,
		        (Math.random() * 2 - 1) * this.MAXVEL]
	}



})(this);