import Piece from './piece';
import HelperFunctions from './helper-functions';
import BoardState from './boardstate';


export default class King extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2654' : '265A';
	}
	genCoordinates() {
		const potentialMoves = [];
		this.checkRows(this.row - 1, this.col, potentialMoves, this.color);
		this.checkRows(this.row + 1, this.col, potentialMoves, this.color);
		this.checkKingRow(this.row, this.col - 1, potentialMoves, this.color);
		this.checkKingRow(this.row, this.col + 1, potentialMoves, this.color);
		return potentialMoves;
	}
	checkRows(row, col, potentialMoves, color) {
		for (let i = col - 1; i <= col + 1; i++) {
			if (HelperFunctions.isEmpty(row, i)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, row, i);
			} else if (HelperFunctions.isEnemy(row, i, color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, row, i);
			}
		}
	}
	checkKingRow(row, col, potentialMoves, color) {
		if (HelperFunctions.isEmpty(row, col) || HelperFunctions.isEnemy(row, col, color)) {
			HelperFunctions.addToPotentialMoves(potentialMoves, row, col);
		}
	}
	static wouldBeInCheck(row, col, turn) {
		let targets = [];
		BoardState.state.forEach((currRow) => {
			currRow.forEach((cell) => {
				if (cell && cell.color !== turn) targets = targets.concat(cell.genCoordinates(true));
			});
		});
		return targets.filter(c => c.row === row && c.col === col);
		// need to compare and filter the targets array against the potentialMoves array for the King.
	}
}
