Agent.prototype = new WorldObject();
Agent.prototype.constructor = Agent;
function Agent() {
	this._ = {
		location: {
			x: 0,
			y: 3,
		}
	}
};