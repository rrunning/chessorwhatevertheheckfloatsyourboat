import Piece from './piece';

export default class Knight extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2658' : '265E';
	}
}

// movement - find targets, highlight potential moves
