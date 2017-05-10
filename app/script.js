import Rook from './rook';

require('./chess.css');
require('./piece');

const $ = require('jquery');

const boardState = [
	[new Rook(0, 0, 'black'),
		[],
		[],
		[],
		[],
		[],
		[],
		new Rook(0, 7, 'black')],
	// [new Pawn(1, 0, 'black'),
	// 	new Pawn(1, 1, 'black'),
	// 	new Pawn(1, 2, 'black'),
	// 	new Pawn(1, 3, 'black'),
	// 	new Pawn(1, 4, 'black'),
	// 	new Pawn(1, 5, 'black'),
	// 	new Pawn(1, 6, 'black'),
	// 	new Pawn(1, 7, 'black')],
	[new Array(8)],
	[new Array(8)],
	[new Array(8)],
	[new Array(8)],
	[new Array(8)],
	[new Array(8)],
	// [new Pawn(6, 0, 'white'),
	// 	new Pawn(6, 1, 'white'),
	// 	new Pawn(6, 2, 'white'),
	// 	new Pawn(6, 3, 'white'),
	// 	new Pawn(6, 4, 'white'),
	// 	new Pawn(6, 5, 'white'),
	// 	new Pawn(6, 6, 'white'),
	// 	new Pawn(6, 7, 'white')],
	[new Rook(0, 0, 'white'),
		[],
		[],
		[],
		[],
		[],
		[],
		new Rook(0, 7, 'white')],,
];

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
			if (boardState[i][j]) {
				$(`#${i}${j}`).html(String.fromCharCode(parseInt(boardState[i][j].image, 16)));
			}
		}
	}
}
function squareIsWhite(row, col) {
	return (row + col) % 2 === 0;
}
function setup() {
	buildBoard();
	console.log(boardState);
}
setup();
