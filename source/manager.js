$(document).ready(function() {
	var mainBoard = new Board(4, 3);
	mainBoard.setCellValue(1, 1, "obstacle");
	mainBoard.setCellValue(3, 0, 1);
	mainBoard.setCellValue(3, 1, -1);
	
	var agent = new Agent("A");
	
	mainBoard.addAgentToCell(agent, 0, 2);
	$("#leftColumn .content").append(mainBoard.displayBoard("main"));
	
	agent.assessEnvironment(mainBoard);
	var move = agent.move();
	
	(function myLoop(move) {
		setTimeout(function() {
			mainBoard.moveAgent(agent, move);
			$("#leftColumn .content #main").replaceWith(mainBoard.displayBoard("main"));
			agent.assessEnvironment(mainBoard);
			move = agent.move();
			if (move) {
				myLoop(move);
			}
		}, 1000);
	})(move);
});