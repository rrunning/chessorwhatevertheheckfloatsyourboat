import Piece from './piece';
import HelperFunctions from './helper-functions';

export default class Pawn extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2659' : '265F';
		this.firstTurn = true;
	}

	genCoordinates(forCheck) {
		const potentialMoves = [];
		if (forCheck) {
			const row = this.color === 'white' ? this.row - 1 : this.row + 1;
			const colRight = this.col + 1;
			const colLeft = this.col - 1;
			const color = this.color;
			this.takingSquareCheck(row, colRight, potentialMoves, color);
			this.takingSquareCheck(row, colLeft, potentialMoves, color);
			this.checkAlly(row, colRight, potentialMoves, color);
			this.checkAlly(row, colLeft, potentialMoves, color);
		} else {
			const row = this.color === 'white' ? this.row - 1 : this.row + 1;
			const colRight = this.col + 1;
			const colLeft = this.col - 1;
			const color = this.color;
			this.checkForward(row, this.col, potentialMoves);
			this.checkEnemy(row, colRight, potentialMoves, color);
			this.checkEnemy(row, colLeft, potentialMoves, color);
		}
		return potentialMoves;
	}
	checkForward(row, col, potentialMoves) {
		const rowTwo = this.color === 'white' ? this.row - 2 : this.row + 2;
		if (HelperFunctions.isEmpty(row, col)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		}
		if (this.firstTurn && HelperFunctions.isEmpty(rowTwo, col)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, rowTwo, col);
		}
	}
	checkEnemy(row, col, potentialMoves, color) {
		if (!HelperFunctions.isEmpty(row, col)) {
			if (HelperFunctions.isEnemy(row, col, color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
			}
		}
	}
	checkAlly(row, col, potentialMoves, color) {
		if (!HelperFunctions.isEmpty(row, col)) {
			if (HelperFunctions.isAlly(row, col, color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
			}
		}
	}
	takingSquareCheck(row, col, potentialMoves) {
		if (HelperFunctions.isEmpty(row, col)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		}
	}
}
