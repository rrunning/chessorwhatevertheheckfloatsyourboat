import Piece from './piece';

export default class Pawn extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2659' : '265F';
	}
}
