export default class Piece {
	constructor(row, col, color) {
		this.row = row;
		this.col = col;
		this.color = color;
	}
	updateCoords(x, y) {
		this.row = x;
		this.col = y;
	}
}
