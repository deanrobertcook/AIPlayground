/**
 * 
 */
$(document).ready(function() {
	var mainBoard = new Board(4, 3);
	mainBoard.setCellValue(1, 1, "obstacle");
	mainBoard.setCellValue(3, 0, 1);
	//mainBoard.setCellValue(0, 1, 2);
	mainBoard.setCellValue(3, 1, -1);
	
	var agent = new Agent("A");
	var agent2 = new Agent("B");
	
	mainBoard.addAgentToCell(agent, 0, 2);
//	mainBoard.addAgentToCell(agent2, 10, 19);
	$("#leftColumn .content").append(mainBoard.displayBoard("main"));
	
	agent.assessEnvironment(mainBoard);
	var move = agent.move();
	
//	mainBoard.moveAgent(agent, move);
//	$("#leftColumn .content #main").replaceWith(mainBoard.displayBoard("main"));
//	agent.assessEnvironment(mainBoard);
//	newMove = agent.move();
	
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
	
	
//	(function myLoop (i) {          
//		setTimeout(function () {
//			agent.assessEnvironment(mainBoard);
//			mainBoard.moveAgent(agent, agent.move());
//			//agent.showPerceptBoard();
//			$("#leftColumn .content #main").replaceWith(mainBoard.displayBoard("main"));           
//		      if (--i) myLoop(i);
//		   }, 1000);
//	})(2);  
});