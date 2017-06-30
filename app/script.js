import BoardState from './boardstate';
import HelperFunctions from './helper-functions';
import Pawn from './pawn';
// import King from './king';

require('./chess.css');
require('./piece');

const $ = require('jquery');

(() => {
	let chosenPiece = null;
	let clickedCell = null;
	let turn = 'white';

	function addRow(i) {
		const newDiv = $('<div>', {
			id: `row${i}`,
			class: 'row'
		});
		$('#master-div').append(newDiv);
	}
	function addColumn(i, j) {
		const cellClass = (squareIsWhite(i, j) ? 'white-cell' : '');
		const newCol = $('<div>', {
			id: `${i}${j}`,
			class: `column ${cellClass}`
		});
		$(`#row${i}`).append(newCol);
	}
	function buildBoard() {
		for (let i = 0; i < 8; i++) {
			addRow(i);
			for (let j = 0; j < 8; j++) {
				addColumn(i, j);
				if (BoardState.state[i][j]) {
					$(`#${i}${j}`).html(String.fromCharCode(parseInt(BoardState.state[i][j].image, 16)));
				}
			}
		}
	}
	function squareIsWhite(row, col) {
		return (row + col) % 2 === 0;
	}
	function setup() {
		buildBoard();
	}
	setup();
	// This block of code needs to be deleted. It's just for debugging.
	$('document').ready(() => {
		$('#64').trigger('click');
		$('#44').click();
		$('#14').click();
		$('#24').click();
		$('#74').click();
		$('#64').click();
		$('#03').click();
		$('#36').click();
		$('#64').click();
		$('#55').click();
		$('#36').click();
		$('#37').click();
		// $('#54').click();
		// $('#53').click();
		// $('#26').click();
		// $('#56').click();
		// $('#75').click();
		// $('#42').click();
		// $('#05').click();
		// $('#32').click();
		// $('#74').click();
		// $('#64').click();
		// $('#04').click();
		// $('#15').click();
		// $('#64').click();
		// $('#54').click();
		// $('#36').click();
		// $('#46').click();
	});
	// end of debugging code.

	$('.column').click(function () {
		if (!chosenPiece) {
			chosenPiece = BoardState.state[$(this).attr('id')[0]][$(this).attr('id')[1]];
			if (chosenPiece.color === turn) {
				$(this).addClass('lighty-uppy-piece');
				HelperFunctions.highlightMoves(chosenPiece.genCoordinates());
			} else {
				resetTurn();
			}
		} else {
			// chosenPiece should be defined and we're now checking for a space to move to.
			// if (chosenPiece instanceof King) {
			// 	King.wouldBeInCheck(chosenPiece.row, chosenPiece.col, turn, allMoves, kingMoves);
			// }
			clickedCell = $(this).attr('id');
			HelperFunctions.movePiece(chosenPiece, Number(clickedCell[0]), Number(clickedCell[1]));
			resetTurn();
			changeTurn();
		}
	});

	function resetTurn() {
		if (chosenPiece instanceof Pawn) {
			chosenPiece.firstTurn = false;
		}
		clickedCell = null;
		chosenPiece = null;
		removeHighlights();
	}

	function changeTurn() {
		turn = turn === 'white' ? 'black' : 'white';
	}

	function removeHighlights() {
		$('.highlight-moves').removeClass('highlight-moves');
		$('.lighty-uppy-piece').removeClass('lighty-uppy-piece');
	}
})();
