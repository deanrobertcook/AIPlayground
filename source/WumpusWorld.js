function WumpusWorld(x, y) {
	this._ = {
		size: {
			x: x,
			y: y,
		},
		worldObjects: {
			agent: null,
			wumpus: null,
			pits: []
		}
	}
	this._.worldObjects.agent = new Agent();
	this._.worldObjects.wumpus= new Wumpus();
	var numPits = (this._.size.x + this._.size.y)/2 - 1;
	for (var i = 0; i < numPits; i ++) {
		this._.worldObjects.pits[i] = new Pit();
	}
	this.placeObjectsRandomly();
};

WumpusWorld.prototype = {
	placeObjectsRandomly: function() {
		this._.worldObjects.agent.setSLocation(0, 3);
		this._.worldObjects.wumpus.setSLocation(3, 0);
		console.log(this._.worldObjects.pits.length);
		this._.worldObjects.pits[0].setSLocation(1, 2);
		this._.worldObjects.pits[1].setSLocation(2, 3);
		this._.worldObjects.pits[2].setSLocation(0, 1);
	},
	
	getSize: function() {
		return this._.size;
	},
	
	getAgentLocation: function() {
		return this._.worldObjects.agent.getLocation();
	},
	
	getWumpusLocation: function() {
		return this._.worldObjects.wumpus.getLocation();
	},
	
	getPitLocations: function() {
		var pits = this._.worldObjects.pits;
		var pitLocs = [];
		for (var i = 0, l = pits.length; i < l; i++) {
			var loc = pits[i].getLocation();
			pitLocs.push(loc);
		}
		return pitLocs;
	},
};