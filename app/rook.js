import Piece from './piece';
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
			if (!HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.isEnemy(i, this.col);
			} else {
				potentialMoves.push({
					row: i,
					col: this.col
				});
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (!HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.isEnemy(i, this.col);
			} else {
				potentialMoves.push({
					row: i,
					col: this.col
				});
			}
		}
		for (let i = this.col - 1; i >= 0; i--) {
			if (!HelperFunctions.isEmpty(this.row, i)) {
				HelperFunctions.isEnemy(this.row, i);
			} else {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			}
		}
		for (let i = this.col + 1; i <= 7; i++) {
			if (!HelperFunctions.isEmpty(this.row, i)) {
				HelperFunctions.isEnemy(this.row, i);
			} else {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			}
		}
		console.log(potentialMoves);
		HelperFunctions.highlightMoves(potentialMoves);
	}
}
