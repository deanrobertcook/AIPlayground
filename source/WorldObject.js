function WorldObject() {
	
};

WorldObject.prototype = {
	getLocation: function() {
		return this._.location;
	},
	setSLocation: function(x, y) {
		this._.location.x = x;
		this._.location.y = y;
	},
};