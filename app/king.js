import Piece from './piece';

export default class King extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2654' : '265A';
	}
}
