import BoardState from './boardstate';

require('./chess.css');
require('./piece');

const $ = require('jquery');

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
	console.log(BoardState.state);
}
setup();

$('.column').click(function () {
	const chosenPiece = BoardState.state[$(this).attr('id')[0]][$(this).attr('id')[1]];
	$(this).addClass('lighty-uppy-piece');
	chosenPiece.getTargetCoordinates();
});
