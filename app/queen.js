import Piece from './piece';
import Bishop from './bishop';
import Rook from './rook';
// import HelperFunctions from './helper-functions';

export default class Queen extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2655' : '265B';
	}
// need to check the bishop forcheck functionality. Sometimes it works and sometimes it doesn't.
// also need to add allies to the forcheck check. to exclude protected allies
// from the king's potential moves.
	genCoordinates(forCheck) {
		const bTargets = Bishop.prototype.genCoordinates.call(this, forCheck);
		const rTargets = Rook.prototype.genCoordinates.call(this, forCheck);
		const potentialMoves = bTargets.concat(rTargets);
		return potentialMoves;
	}
}
