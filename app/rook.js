import Piece from './piece';

export default class Rook extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2656' : '265C';
	}
}

// movement - find targets, highlight potential moves
