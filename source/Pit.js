Pit.prototype = new WorldObject();
Pit.prototype.constructor = Pit;
function Pit() {
	this._ = {
		location: {
			x: 0,
			y: 3,
		}
	}
};

