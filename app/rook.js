import Piece from './piece';
import BoardState from './boardstate';

export default class Rook extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2656' : '265C';
	}
	getTargetCoordinates() {
		this.genVerticalCoordinates();
		this.genHorizontalCoordinates();
	}
	genHorizontalCoordinates() {
		for (let i = 0; i <= 7; i++) {
			// all that are empty, create cooridnates with i + row and push to array of targets
		}
	}
	genVerticalCoordinates() {
		const potentialMoves = [];
		for (let i = 0; i <= 7; i++) {
			if (this.isEmpty(i, this.col)) {
				potentialMoves.push([i, this.col]);
				console.log(potentialMoves);
			}
			// all that are empty, create cooridnates with i + col and push to array of targets
		}
	}
	// create file for helper functions
	isEmpty(row, col) {
		return !(BoardState.state[row][col]);
	}
}
