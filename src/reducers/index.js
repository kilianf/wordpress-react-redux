const reduce = (state = [], action) => {
		
	switch (action.type) {
		case 'GET_JSON' :
			return {
				...state,
				data: action.payload
			}
		default: 
			return state
	}
}

export default reduce;