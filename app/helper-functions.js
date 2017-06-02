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
	static addToPotentialMoves(potentialMoves, row, col) {
		potentialMoves.push({
			row,
			col,
		});
	}
	static isHighlighted(targetRow, targetCol) {
		return document.getElementById(`${targetRow}${targetCol}`).classList.contains('highlight-moves');
	}
	static movePiece(piece, trgtRow, trgtCol) {
		if (this.isHighlighted(trgtRow, trgtCol)) {
			this.movePieceDOM(piece, trgtRow, trgtCol);
			this.movePieceBS(piece, trgtRow, trgtCol);
			console.log(BoardState.state);
		} else {
			alert("This doesn't work");
		}
	}
	static movePieceBS(piece, trgtRow, trgtCol) {
		BoardState.state[piece.row][piece.col] = null;
		BoardState.state[trgtRow][trgtCol] = piece;
		piece.row = trgtRow;
		piece.col = trgtCol;
	}
	static movePieceDOM(piece, trgtRow, trgtCol) {
		const imgLocation = document.getElementById(`${piece.row}${piece.col}`).innerHTML;
		document.getElementById(`${piece.row}${piece.col}`).innerHTML = '';
		document.getElementById(`${trgtRow}${trgtCol}`).innerHTML = imgLocation;
	}
}
