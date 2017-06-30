import Piece from './piece';
import HelperFunctions from './helper-functions';

export default class Rook extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2656' : '265C';
	}
	genCoordinates(forCheck) {
		const potentialMoves = [];
		if (forCheck) {
			for (let i = this.row + 1; i <= 7; i++) {
				if (HelperFunctions.isEmpty(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isEnemy(i, this.col, this.color) && HelperFunctions.isKing(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isAlly(i, this.col, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
					break;
				} else {
					break;
				}
			}
			for (let i = this.row - 1; i >= 0; i--) {
				if (HelperFunctions.isEmpty(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isEnemy(i, this.col, this.color) && HelperFunctions.isKing(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isAlly(i, this.col, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
					break;
				} else {
					break;
				}
			}
			for (let i = this.col - 1; i >= 0; i--) {
				if (HelperFunctions.isEmpty(this.row, i)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
				} else if (HelperFunctions.isEnemy(this.row, i, this.color) && HelperFunctions.isKing(this.row, i)) {
					potentialMoves.push({
						row: this.row,
						col: i
					});
				} else if (HelperFunctions.isAlly(this.row, i, this.color)) {
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
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
				} else if (HelperFunctions.isEnemy(this.row, i, this.color) && HelperFunctions.isKing(this.row, i)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
				} else if (HelperFunctions.isAlly(this.row, i, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
					break;
				} else {
					break;
				}
			}
		} else {
			for (let i = this.row + 1; i <= 7; i++) {
				if (HelperFunctions.isEmpty(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
					break;
				} else {
					break;
				}
			}
			for (let i = this.row - 1; i >= 0; i--) {
				if (HelperFunctions.isEmpty(i, this.col)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
					break;
				} else {
					break;
				}
			}
			for (let i = this.col - 1; i >= 0; i--) {
				if (HelperFunctions.isEmpty(this.row, i)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
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
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
				} else if (HelperFunctions.isEnemy(this.row, i, this.color)) {
					HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
					break;
				} else {
					break;
				}
			}
		}
		return potentialMoves;
	}
}
