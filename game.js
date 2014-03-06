(function(root) {

	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	Asteroids.DIM_X = 1200;
	Asteroids.DIM_Y = 800;
	Asteroids.FPS = 30;

	var Game = Asteroids.Game = function(canvas) {
		this.ctx = canvas.getContext('2d');
		this.asteroids = this.addAsteroids(20);
		this.ship = new Asteroids.Ship([600, 400], [0, 0]);
		this.timer = null;
		this.bullets = [];
	};

	Game.prototype.addAsteroids = function(num) {
		var asteroids = [];

		for(var i = 0; i < num; i ++) {
			asteroids.push(Asteroids.Asteroid.randomAsteroid(Asteroids.DIM_X, Asteroids.DIM_Y));
		}
		return asteroids;
	};

	Game.prototype.draw = function() {
		 this.ctx.clearRect(0, 0, Asteroids.DIM_X, Asteroids.DIM_Y);
		 this.drawBackground();

		 var that = this;
		 this.asteroids.forEach(function(asteroid) {
			 asteroid.draw(that.ctx);
		 });
		 this.bullets.forEach(function(bullet) {
			 bullet.draw(that.ctx);
		 });

		 this.ship.draw(this.ctx);
	};

	Game.prototype.drawBackground = function () {
		// var img = new Image();
		// var that = this;
		// img.onload = function () {
		//   that.ctx.drawImage(img, 0, 0);
		// };
		// img.src = 'bg.jpg';
	};

	Game.prototype.drawStars = function () {
		// Draw 50 stars.
    for (i = 0; i <= 50; i++) {
      // Get random positions for stars.
      var x = Math.floor(Math.random() * Asteroids.DIM_X)
      var y = Math.floor(Math.random() * Asteroids.DIM_Y)

      // Make the stars white
      this.ctx.fillStyle = "white";

      // Give the ship some room.
      if (x < 30 || y < 30) this.ctx.fillStyle = "black";

      // Draw an individual star.
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fill();
    }
	};

	Game.prototype.move = function() {
		var that = this;
		this.asteroids.forEach(function(asteroid) {
			asteroid.move();
			asteroid.bounceBack();
		});
		this.bullets.forEach(function(bullet) {
			bullet.move();
		});
		this.ship.move();
		this.ship.bounceBack();
	};

	Game.prototype.stop = function() {
		window.clearInterval(this.timer);
	};

	Game.prototype.checkCollisions = function() {
	  var that = this;
		this.asteroids.forEach(function(asteroid) {
		  if (asteroid.isCollidedWith(that.ship)) {
			  alert("You've died!")
				that.stop();
		  }
		});
	};

	Game.prototype.step = function() {
		this.move();
		this.draw();
		this.removeUndefineds();
		this.checkBulletHits();
		this.checkCollisions();
	};

	Game.prototype.bindKeyHandlers = function () {
		that = this;
		root.key('a', function(){ that.ship.changeOrientation(-10) });
		root.key('w', function(){ that.ship.power([ 0, -1]) });
		root.key('d', function(){ that.ship.changeOrientation(10) });
		root.key('s', function(){ that.ship.power([ 0,  1]) });
		root.key('space', function(){
				that.bullets.push(that.ship.fireBullet());
		});
	};

	Game.prototype.checkBulletHits = function() {
		var that = this;
		this.bullets.forEach(function(bullet, idx){
			bullet.hitAsteroids(that, idx);
		});
	}

	Game.prototype.removeUndefineds = function() {
		this.bullets = this.bullets.filter(function(bullet) {
			return !!bullet;
		});

		this.asteroids = this.asteroids.filter(function(asteroid) {
			return !!asteroid;
		});
	}

	Game.prototype.removeAsteroid = function (idx) {
		delete this.asteroids[idx];
	};

	Game.prototype.removeBullet = function (idx) {
		delete this.bullets[idx];
	};

	Game.prototype.start = function() {
		this.bindKeyHandlers();
		this.timer = window.setInterval(this.step.bind(this), Asteroids.FPS);
	};





})(this);


