Wumpus.prototype = new WorldObject();
Wumpus.prototype.constructor = Wumpus;
function Wumpus() {
	this._ = {
		location: {
			x: 3,
			y: 0,
		}
	}
};