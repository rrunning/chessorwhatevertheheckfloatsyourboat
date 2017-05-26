import Piece from './piece';
import BoardState from './boardstate';
import HelperFunctions from './helper-functions';

export default class Rook extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2656' : '265C';
	}
	getTargetCoordinates() {
		this.genCoordinates();
	}
	genCoordinates() {
		const potentialMoves = [];
		for (let i = this.row + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				potentialMoves.push({
					row: i,
					col: this.col
				});
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (!HelperFunctions.isEmpty(i, this.col)) {
				isEnemy(this.color);
			}
			else {
				if (HelperFunctions.isEmpty(i, this.col)) {
					potentialMoves.push({
						row: i,
						col: this.col
					});
				}
			}
		}
		for (let i = this.col - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(this.row, i)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			}
		}
		for (let i = this.col + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(this.row, i)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			}
		}
		console.log(potentialMoves);
	}
	isEnemy(color) {
		this.color !== color;
	}
}
