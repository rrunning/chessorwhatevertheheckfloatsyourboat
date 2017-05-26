import BoardState from './boardstate';

export default class HelperFunctions {
	static isEmpty(row, col) {
		return !(BoardState.state[row][col]);
	}
}
