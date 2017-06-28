import Piece from './piece';
import Bishop from './bishop';
import Rook from './rook';
// import HelperFunctions from './helper-functions';

export default class Queen extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2655' : '265B';
	}

	genCoordinates(forCheck) {
		const bTargets = Bishop.prototype.genCoordinates.call(this);
		const rTargets = Rook.prototype.genCoordinates.call(this);
		const potentialMoves = bTargets.concat(rTargets);
		return potentialMoves;
	}
}
