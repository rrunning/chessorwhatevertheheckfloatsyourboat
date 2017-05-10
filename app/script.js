require('./chess.css');
require('./piece');
const $ = require('jquery');

const boardState = [
	new Array(8),
	new Array(8),
	new Array(8),
	new Array(8),
	new Array(8),
	new Array(8),
	new Array(8),
	new Array(8)
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
