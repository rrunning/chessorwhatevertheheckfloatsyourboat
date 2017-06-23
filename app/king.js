import Piece from './piece';
import HelperFunctions from './helper-functions';
import BoardState from './boardstate';


export default class King extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2654' : '265A';
	}
	genCoordinates(forCheck) {
		const potentialMoves = [];
		this.checkRows(this.row - 1, this.col, potentialMoves, this.color);
		this.checkRows(this.row + 1, this.col, potentialMoves, this.color);
		this.checkKingRow(this.row, this.col - 1, potentialMoves, this.color);
		this.checkKingRow(this.row, this.col + 1, potentialMoves, this.color);
		if (forCheck) {
			return potentialMoves;
		}
		return this.wouldBeInCheck(this.color, potentialMoves);
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
	wouldBeInCheck(turn, potentialMoves, row, col) {
		let targets = [];
		// BoardState.state.forEach((currRow) => {
		// 	currRow.forEach((cell) => {
		// 		if (cell && cell.color !== turn) targets = targets.concat(cell.genCoordinates());
		// 	});
		// });
		targets = this.getOtherMoves(row, col);
		const filteredTargets = potentialMoves.filter(e =>
			!targets.reduce((p, c) =>
				p || (c.row === e.row && c.col === e.col, false))
		);
		return filteredTargets;
		// need to compare and filter the targets array against the potentialMoves array for the King.
	}
	getOtherMoves() {
		const allMoves = [];
		for (let i = 0; i < BoardState.state.length; i++) {
			for (let j = 0; j < BoardState.state.length; j++) {
				if (HelperFunctions.isEmpty(i, j)) {
					continue;
				} else if (BoardState.state[i][j].color !== this.color) {
					allMoves.push(BoardState.state[i][j].genCoordinates(true));
				}
			}
		}
		return allMoves;
	}
}
