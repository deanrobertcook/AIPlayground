/**
 * 
 */
function Agent(id) {//}), color) {
	//this.color = color;
	this.id = id;
	
	this.currentCell;
	this.goalCell;
	
	this.moves = 0;
};

Agent.prototype.makeSkin = function() {
//	$agent = $("<div>");
//	$agent.css("height", "50%");
//	$agent.css("width", "50%");
//	$agent.css("background-color", this.color);
//	$agent.css("margin", "auto");
//	return $agent.get();
	return this.id;
};

Agent.prototype.getStatus = function() {
	$statusDiv = $("<div>");
	$loc = $("<p>Currently located at " + this.currentCell + "</p>");
	$statusDiv.append($loc);
	return $statusDiv.get();
};

Agent.prototype.move = function() {
	var move = this.attemptManhattenMove();
	if (!move) {
		console.log("Agent made: " + (this.moves-1) + " moves");
		return false;
	} else {
		return this.uncertaintyFunction(move);
	}
};

Agent.prototype.assessEnvironment = function(mainBoard) {
	var xDim = mainBoard.xDim;
	var yDim = mainBoard.yDim;
	
	var lowestVal = 0;
	var terminal;
	for (var x = 0; x < xDim; x++) {
		for (var y = 0; y < yDim; y++) {
			var cellVal = mainBoard.getCellValue(x, y);
			if (cellVal > lowestVal) {
				lowestVal = cellVal;
				terminal = [x, y];
			}
			if (mainBoard.cellContainsAgent(this, x, y)) {
				this.currentCell = [x, y];
			}
		}
	}
	this.goalCell = terminal;
};

Agent.prototype.attemptManhattenMove = function() {
	var x1 = this.currentCell[0];
	var x2 = this.goalCell[0];
	
	var y1 = this.currentCell[1];
	var y2 = this.goalCell[1];
	
	var move = [0, 0];
	this.moves++;
	if (y1 != y2) {
		move[1] = (y2 - y1)/(Math.abs(y2 - y1));
	} else if (x1 != x2) {
		move[0] = (x2 - x1)/(Math.abs(x2 - x1));
	} else {
		return false; //Stop moving!
	}
	return move;
};

Agent.prototype.uncertaintyFunction = function(moveVector) {
	var r = Math.random();
	
	if (r < 0.8) {
		return moveVector;
	} else {
		var x = moveVector[0];
		var y = moveVector[1];
		
		x = x - x;
		y = y - x;
		x = x - y;
		y = y - y;
		
		if (r >= 0.8 && r < 0.9) {
			return [x, y];
		} else {
			return [-x, -y];
		}
	}
};