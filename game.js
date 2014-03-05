(function(root) {

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	Asteroids.prototype.inherits = function(otherObj) {
		function Surrogate(){};
		Surrogate.prototype = otherObj.prototype;
		this.prototype = new Surrogate();

	}
})(this);

