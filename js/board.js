/**
 * 
 */
function Board(xDim, yDim) {
	this.xDim = xDim;
	this.yDim = yDim;
	this.tableWidth = 580;
	this.cellWidth = 580/this.xDim;
	this.agents = {};
	this.board = this.newBoard();
};

Board.prototype.newBoard = function() {
	var cells = [];
	for (var x = 0; x < this.xDim; x++) {
		cells[x] = [];
		for (var y = 0; y < this.yDim; y++) {
			cells[x].push([""]);
		}
	}
	return cells;
};

Board.prototype.displayBoard = function(name) {
	//$("#leftColumn .content").empty();
	var $display = $("<table>");
	$display.attr("id", name);
	
	for (var y = 0; y < this.yDim; y++) {
		var $row = $("<tr>");
		
		for (var x = 0; x < this.xDim; x++) {
			var $cell = $("<td>");
			$cell.css("width", this.cellWidth + "px");
			$cell.css("height", this.cellWidth + "px");
			
			if (!this.isCellClear(x, y)) {
				$cell.css("background-color", "grey");
				$cell.html("");
			} 
			
			var agents = this.getAgentsFromCell(x, y);
			for (var i = 0; i < agents.length; i++) {
				$cell.append(agents[i].makeSkin());
			}
			
			$cell.append(this.getCellValue(x, y));
			
			cellString = "";
			$row.append($cell);
		}
		$display.append($row);
	}
	return $display.get();
	//$("#leftColumn .content").append($display);
};

Board.prototype.setCellValue = function(xPos, yPos, value) {
	if (this.isCellLegal(xPos, yPos)) {
		this.board[xPos][yPos][0] = value;
	} else {
		throw "Cell does not exist.";
	}
};

Board.prototype.getCellValue = function(xPos, yPos) {
	if (this.isCellLegal(xPos, yPos)) {
		return this.board[xPos][yPos][0];
	} else {
		throw "Cell does not exist.";
	}
};

Board.prototype.addAgentToCell = function(agent, xPos, yPos) {
	if (this.isCellLegal(xPos, yPos) && this.isCellClear(xPos, yPos)) {
		var length = this.board[xPos][yPos].length;
		this.board[xPos][yPos][length] = agent;
		this.agents[agent.id] = [xPos, yPos];
	} else {
		throw "Agent cannot be placed in this cell";
	}
};

Board.prototype.removeAgentFromCell = function(agent, xPos, yPos) {
	if (this.isCellLegal(xPos, yPos)) {
		var cell = this.board[xPos][yPos];
		cell.splice(cell.indexOf(agent), 1);
		this.board[xPos][yPos] = cell;
		
	} else {
		throw "Cell does not exist.";
	}
};

Board.prototype.cellContainsAgent = function(agent, xPos, yPos) {
	if (this.isCellLegal(xPos, yPos)) {
		var cell = this.board[xPos][yPos];
		for (var i = 0; i < cell.length; i++) {
			if (cell[i] === agent) {
				return true;
			}
		}
		return false;
	} else {
		throw "Cell does not exist.";
	}
};

Board.prototype.getAgentsFromCell = function(xPos, yPos) {
	if (this.isCellLegal(xPos, yPos)) {
		var cell = this.board[xPos][yPos];
		var agents = [];
		for (var i = 0; i < cell.length; i++) {
			if (cell[i] instanceof Agent) {
				agents.push(cell[i]);
			}
		}
		return agents;
	} else {
		throw "Cell does not exist.";
	}
};


Board.prototype.isCellLegal = function(xPos, yPos) {	
	if (xPos >= this.xDim || yPos >= this.yDim || xPos < 0 || yPos < 0) {
		return false;
	} else {
		return true;
	}
};

Board.prototype.isCellClear = function(xPos, yPos) {	
	if (this.getCellValue(xPos, yPos) == "obstacle") {
		return false;
	} else {
		return true;
	}
};

Board.prototype.moveAgent = function(agent, moveVector) {
	agentPos = this.agents[agent.id];
	
	var newAgentPos = [agentPos[0] + moveVector[0], agentPos[1] + moveVector[1]];
	
	if (this.isCellLegal(newAgentPos[0], newAgentPos[1]) && this.isCellClear(newAgentPos[0], newAgentPos[1])) {
		
		this.removeAgentFromCell(agent, agentPos[0], agentPos[1]);
		this.addAgentToCell(agent, newAgentPos[0], newAgentPos[1]);
		return true;
	} else {
		return false;
	}
};









