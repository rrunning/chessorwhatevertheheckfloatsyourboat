import Rook from './rook';
import Knight from './knight';
import Queen from './queen';
import Bishop from './bishop';
import King from './king';
import Pawn from './pawn';

class BoardState {
	constructor() {
		this.state = [
			[
				new Rook(0, 0, 'black'),
				new Knight(0, 1, 'black'),
				new Bishop(0, 2, 'black'),
				new Queen(0, 3, 'black'),
				new King(0, 4, 'black'),
				new Bishop(0, 5, 'black'),
				new Knight(0, 6, 'black'),
				new Rook(0, 7, 'black')
			],
			[
				new Pawn(1, 0, 'black'),
				new Pawn(1, 1, 'black'),
				new Pawn(1, 2, 'black'),
				new Pawn(1, 3, 'black'),
				new Pawn(1, 4, 'black'),
				new Bishop(1, 5, 'black'),
				new Pawn(1, 6, 'black'),
				new Pawn(1, 7, 'black')
			],
			new Array(8),
			new Array(8),
			new Array(8),
			new Array(8),
			[
				new Pawn(6, 0, 'white'),
				new Pawn(6, 1, 'white'),
				new Pawn(6, 2, 'white'),
				new Pawn(6, 3, 'white'),
				new Pawn(6, 4, 'white'),
				new Bishop(6, 5, 'white'),
				new Pawn(6, 6, 'white'),
				new Pawn(6, 7, 'white')
			],
			[
				new Rook(7, 0, 'white'),
				new Knight(7, 1, 'white'),
				new Bishop(7, 2, 'white'),
				new Queen(7, 3, 'white'),
				new King(7, 4, 'white'),
				new Bishop(7, 5, 'white'),
				new Knight(7, 6, 'white'),
				new Rook(7, 7, 'white')
			],
		];
	}
	}
export default new BoardState();
