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
			if (HelperFunctions.isEmpty(i, this.col)) {
				potentialMoves.push({
					row: i,
					col: this.col
				});
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				potentialMoves.push({
					row: i,
					col: this.col
				});
				break;
			} else {
				break;
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				potentialMoves.push({
					row: i,
					col: this.col
				});
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				potentialMoves.push({
					row: i,
					col: this.col
				});
				break;
			} else {
				break;
			}
		}
		for (let i = this.col - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(this.row, i)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			} else if (HelperFunctions.isEnemy(this.row, i, this.color)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
				break;
			} else {
				break;
			}
		}
		for (let i = this.col + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(this.row, i)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
			} else if (HelperFunctions.isEnemy(this.row, i, this.color)) {
				potentialMoves.push({
					row: this.row,
					col: i
				});
				break;
			} else {
				break;
			}
		}
		console.log(potentialMoves);
		HelperFunctions.highlightMoves(potentialMoves);
	}
}
