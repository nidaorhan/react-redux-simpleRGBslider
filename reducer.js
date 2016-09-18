const 
	CHANGE_COLOR = 'CHANGE_COLOR';

const initialState = {
	red : 26,
	green : 46,
	blue : 125,
}

export default function reducer( state = initialState, action ){
	switch (action.type) {
		case CHANGE_COLOR:
			let temp = {};
			temp[action.data.colorType] = action.data.colorValue;
			return Object.assign( {}, state, temp )
			break;
		default:
			return state
			break;
	}
}

export const changeColor = (data) => { // { colorType : 'red', colorValue : 123 }
	return {
		type : CHANGE_COLOR,
		data
	}
}