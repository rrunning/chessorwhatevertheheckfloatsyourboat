import Piece from './piece';

export default class Queen extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2655' : '265B';
	}
}
