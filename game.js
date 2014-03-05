(function(root) {

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	Asteroids.DIM_X = 1200;
	Asteroids.DIM_Y = 800;
	Asteroids.FPS = 30;

	var Game = Asteroids.Game = function(canvas) {
		this.ctx = canvas.getContext('2d');
		this.asteroids = this.addAsteroids(20);
		this.ship = new Asteroids.Ship([600, 400], [0, 0]);
		this.timer = null;
	};

	Game.prototype.addAsteroids = function(num) {
		var asteroids = [];

		for(var i = 0; i < num; i ++) {
			asteroids.push(Asteroids.Asteroid.randomAsteroid(Asteroids.DIM_X, Asteroids.DIM_Y));
		}
		return asteroids;
	}

	Game.prototype.draw = function() {
		 this.ctx.clearRect(0, 0, Asteroids.DIM_X, Asteroids.DIM_Y);
		 var that = this;
		 this.asteroids.forEach(function(asteroid) {
			 asteroid.draw(that.ctx);
		 });
		 this.ship.draw(this.ctx);
	}

	Game.prototype.move = function() {
		var that = this;
		this.asteroids.forEach(function(asteroid) {
			asteroid.move();
			asteroid.bounceBack();
		});
		this.ship.move();
		this.ship.bounceBack();
	}

	Game.prototype.stop = function() {
		window.clearInterval(this.timer);
	}

	Game.prototype.checkCollisions = function() {
	  var that = this;
		this.asteroids.forEach(function(asteroid) {
		  if (asteroid.isCollidedWith(that.ship)) {
			  alert("You've died!")
				that.stop();
		  }
		});
	}

	Game.prototype.step = function() {
		this.move();
		this.draw();
		this.checkCollisions();
	}

	Game.prototype.bindKeyHandlers = function () {
		that = this;
		root.key('a', function(){ that.ship.power([-1,  0]) });
		root.key('w', function(){ that.ship.power([ 0, -1]) });
		root.key('d', function(){ that.ship.power([ 1,  0]) });
		root.key('s', function(){ that.ship.power([ 0,  1]) });
	}

	Game.prototype.start = function() {
		this.bindKeyHandlers();
		this.timer = window.setInterval(this.step.bind(this), Asteroids.FPS);
	}





})(this);