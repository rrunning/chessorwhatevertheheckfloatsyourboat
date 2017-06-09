import Piece from './piece';
import HelperFunctions from './helper-functions';

export default class Bishop extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2657' : '265D';
	}
	getTargetCoordinates() {
		this.genCoordinates();
	}
	genCoordinates() {
		const potentialMoves = [];
		for (let i = this.row + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(i, Number(`${this.col + (i - this.row)}`))) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (i - this.row)}`));
			} else if (HelperFunctions.isEnemy(i, Number(`${this.col + (i - this.row)}`), this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (i - this.row)}`));
				break;
			} else {
				break;
			}
		}
		for (let i = this.row + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(i, Number(`${this.col - (i - this.row)}`))) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (i - this.row)}`));
			} else if (HelperFunctions.isEnemy(i, Number(`${this.col - (i - this.row)}`), this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (i - this.row)}`));
				break;
			} else {
				break;
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(i, Number(`${this.col + (this.row - i)}`))) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (this.row - i)}`));
			} else if (HelperFunctions.isEnemy(i, Number(`${this.col + (this.row - i)}`), this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (this.row - i)}`));
				break;
			} else {
				break;
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(i, Number(`${this.col - (this.row - i)}`))) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (this.row - i)}`));
			} else if (HelperFunctions.isEnemy(i, Number(`${this.col - (this.row - i)}`), this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (this.row - i)}`));
				break;
			} else {
				break;
			}
		}
		HelperFunctions.highlightMoves(potentialMoves);
	}
}
