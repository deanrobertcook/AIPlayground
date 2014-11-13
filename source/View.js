function View(rows, columns) {
	this._ = {
		htmlAnchorID: "projectAnchor",
		table: null,
	};

	this._.table = this.produceTableHTML(rows, columns);
	//this._.optionsMenu = this.produceOptionsMenuHTML();
};

View.prototype = {
	assembleGUI: function() {
		var appArea = $("<div id='AIPLayground'></div>");
		//appArea.append(this._.optionsMenu);
		appArea.append(this._.table);
		appArea = appArea.get(0);
		$("#" + this._.htmlAnchorID).after(appArea);
	},

	produceTableHTML: function(size) {
		var table = $("<table id='projectCanvas'></table>");table
		table.css({
			border: "1px solid black",
			display: "block",
			float: "left",
			"border-collapse": "collapse",
		});
		for (var i = 0; i < size.y; i ++) {
			var row = $("<tr></tr>");
			for (var j = 0; j < size.x; j++) {
				var cell = $("<td></td>");
				cell.css({
					height: "100px",
					width: "100px",
					border: "1px solid black",
					
				});
				row.append(cell);
			}
			table.append(row);
		}
		table = table.get(0);
		return table;
	},
	
	addHTMLToCell: function(HTML, location) {
		var row = $(this._.table).find("tr")[location.y];
		var cell = $(row).find("td")[location.x];
		$(cell).append(HTML);
	},
	
	produceOptionsMenuHTML: function(size) {
		return null;
	},

	produceMenuButton: function(menu, label, handler) {
		var button = $("<button>"+label+"</button>");
		button.click(handler);
		$(this._[menu]).append(button);
	},
	
	displayRightClickMenu: function(mousePosition) {
		$(this._.rightClickMenu).css({
			top: (this._.canvas.height - mousePosition.y + $(this._.canvas).position().top) + "px",
			left: (mousePosition.x + $(this._.canvas).position().left) + "px",
			display: "block",
		});
	},
	
	hideRightClickMenu: function() {
		$(this._.rightClickMenu).css({
			display: "none",
		});
	},
};