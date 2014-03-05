(function(root) {

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Game = Asteroids.Game = function(canvas) {

		this.DIM_X = 1200;
		this.DIM_Y = 800;
		this.FPS = 30;
		this.ctx = canvas.getContext('2d');
		this.asteroids = this.addAsteroids(20);

	};



	Game.prototype.addAsteroids = function(num) {
		var asteroids = [];

		for(var i = 0; i < num; i ++) {
			asteroids.push(Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
		}
		return asteroids;
	}

	Game.prototype.draw = function() {
		 this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
		 var that = this;
		 this.asteroids.forEach(function(asteroid) {
			 asteroid.draw(that.ctx);
		 });
	}

	Game.prototype.move = function() {

		 this.asteroids.forEach(function(asteroid) {
			 asteroid.move();
		 });
	}

	Game.prototype.step = function() {
		this.move();
		this.draw();
		console.log("Took a step!")
	}

	Game.prototype.start = function() {
		window.setInterval(this.step.bind(this), this.FPS);
	}

})(this);