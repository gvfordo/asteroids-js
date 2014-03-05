(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	Asteroids.inherits = function(firstObj, otherObj) {
		function Surrogate(){};
		Surrogate.prototype = otherObj.prototype;
		firstObj.prototype = new Surrogate();
	}

	var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	}

	MovingObject.prototype.posDistance = function(otherPoint) {
	  var xs = otherPoint[0] - this.pos[0];
	  var xs = xs * xs;

	  var ys = otherPoint[1] - this.pos[1];
	  var ys = ys * ys;

	  return Math.sqrt( xs + ys );
	}

	MovingObject.prototype.move = function() {
		this.pos = [this.pos[0] + this.vel[0],
								this.pos[1] + this.vel[1]];
	}

	MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
			0,
			2 * Math.PI,
			false
    );

    ctx.fill();
	}

	MovingObject.prototype.bounceBack = function() {
		if (this.pos[0] > Asteroids.DIM_X){
			this.pos[0] = 0;
		} else if (this.pos[0] < 0) {
			this.pos[0] = Asteroids.DIM_X;
		}

		if (this.pos[1] > Asteroids.DIM_Y){
			this.pos[1] = 0;
		} else if (this.pos[1] < 0) {
			this.pos[1] = Asteroids.DIM_Y;
		}
	}

	MovingObject.prototype.isCollidedWith = function(otherObj) {
		var distance = this.posDistance(otherObj.pos);

		return distance < (this.radius + otherObj.radius);
	}
})(this);