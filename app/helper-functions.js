import BoardState from './boardstate';

export default class HelperFunctions {
	static isEmpty(row, col) {
		return !(BoardState.state[row][col]);
	}
	static highlightMoves(potentialMoves) {
		potentialMoves.forEach((potentialMove) => {
			document.getElementById(`${potentialMove.row}${potentialMove.col}`).classList.add('highlight-moves');
		});
	}
	static isEnemy(row, col, color) {
		const foo = BoardState.state[row][col];
		return foo.color !== color;
	}
}
