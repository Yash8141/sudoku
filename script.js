var numberSelected = null;
var tileSelected = null;
var errors = 0;
var board = ["-1-23-", "4-56--", "--45-6", "5-6-13", "-56--2", "--2-45"];
var solution = ["613245", "452631", "236514", "564312", "321456", "145623"];

window.onload = function () {
	setGame();
};
function setGame() {
	//Digit 1 - 9
	for (let i = 1; i <= 9; i++) {
		//<div id="1" class="number">1</div>
		let number = document.createElement("div");
		number.id = i;
		number.innerText = i;
		number.addEventListener("click", selectNumber);
		number.classList.add("number");
		document.getElementById("digits").appendChild(number);
	}

	//Board 6x6
	for (let a = 0; a < 6; a++) {
		for (b = 0; b < 6; b++) {
			let tile = document.createElement("div");
			tile.addEventListener("click", selectTile);
			tile.id = a.toString() + "-" + b.toString();
			if (board[a][b] != "-") {
				tile.innerText = board[a][b];
				tile.classList.add("tile-start");
			}
			if (a == 2 || a == 5) {
				tile.classList.add("horizontal-line");
			}
			if (b == 2 || b == 5) {
				tile.classList.add("vertical-line");
			}
			tile.classList.add("tile");
			document.getElementById("board").append(tile);
		}
	}
}
//Number Selected function
function selectNumber() {
	if (numberSelected != null) {
		numberSelected.classList.remove("number-selected");
	}
	numberSelected = this;
	numberSelected.classList.add("number-selected");
}

//Selected Number Shown in tile function
function selectTile() {
	if (numberSelected) {
		if (this.innerText != "") {
			return;
		}

        //Check in each tile with coords that it is equal or not if not then number cannot be placed in tile
		//"0=0" "0-1" -- "4-2"
		let coords = this.id.split("-"); //["0","0"]
		let r = parseInt(coords[0]);
		let c = parseInt(coords[1]);
		console.log(r, c);


        //If number matches with the array row and column then it will set to the tiles 
		if (solution[r][c] == numberSelected.id) {
			this.innerText = numberSelected.id;
		} else {
			errors += 1;
			document.getElementById("errors").innerText = errors;
		}
	}
}
