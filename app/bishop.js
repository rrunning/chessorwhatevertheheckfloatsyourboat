import Piece from './piece';

export default class Bishop extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2657' : '265D';
	}
}
