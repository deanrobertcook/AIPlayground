$("#projectAnchor").click(function() {
	window.controller = new Controller();
});
function Controller () {
	this._ = {
		world: null,
		view: null,
	}
	this._.world = new WumpusWorld(4, 4);
	this._.view = new View(this._.world.getSize());
	this._.view.assembleGUI();
	
	this._.view.addHTMLToCell("<p>Agent</p>", this._.world.getAgentLocation());
	this._.view.addHTMLToCell("<p>Wumpus</p>", this._.world.getWumpusLocation());
	this._.view.addHTMLToCell("<p>Pit</p>", this._.world.getPitLocations()[0]);
	this._.view.addHTMLToCell("<p>Pit</p>", this._.world.getPitLocations()[1]);
	this._.view.addHTMLToCell("<p>Pit</p>", this._.world.getPitLocations()[2]);
	
};

Controller.prototype = {		
	
};