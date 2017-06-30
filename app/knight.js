import Piece from './piece';
import HelperFunctions from './helper-functions';

export default class Knight extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2658' : '265E';
	}
	genCoordinates(forCheck) {
		const potentialMoves = [];
		if (forCheck) {
			this.checkMoves(this.row + 2, this.col + 1, potentialMoves);
			this.checkMoves(this.row + 2, this.col - 1, potentialMoves);
			this.checkMoves(this.row + 1, this.col - 2, potentialMoves);
			this.checkMoves(this.row + 1, this.col + 2, potentialMoves);
			this.checkMoves(this.row - 1, this.col + 2, potentialMoves);
			this.checkMoves(this.row - 1, this.col - 2, potentialMoves);
			this.checkMoves(this.row - 2, this.col + 1, potentialMoves);
			this.checkMoves(this.row - 2, this.col - 1, potentialMoves);
		} else {
			this.isValidMove(this.row + 2, this.col + 1, potentialMoves);
			this.isValidMove(this.row + 2, this.col - 1, potentialMoves);
			this.isValidMove(this.row + 1, this.col - 2, potentialMoves);
			this.isValidMove(this.row + 1, this.col + 2, potentialMoves);
			this.isValidMove(this.row - 1, this.col + 2, potentialMoves);
			this.isValidMove(this.row - 1, this.col - 2, potentialMoves);
			this.isValidMove(this.row - 2, this.col + 1, potentialMoves);
			this.isValidMove(this.row - 2, this.col - 1, potentialMoves);
		}
		return potentialMoves;
	}
	isValidMove(row, col, potentialMoves) {
		if (HelperFunctions.isOnBoard(row, col) && HelperFunctions.isEmpty(row, col)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		} else if (HelperFunctions.isOnBoard(row, col) && HelperFunctions.isEnemy(row, col, this.color)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		}
	}
	checkMoves(row, col, potentialMoves) {
		if (HelperFunctions.isOnBoard(row, col) && HelperFunctions.isEmpty(row, col)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		} else if (HelperFunctions.isOnBoard(row, col) && HelperFunctions.isAlly(row, col, this.color)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		}
	}
}
