const initialState = {
	searchQuery: '',
};

const searchQueryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_SEARCHQUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
};

export default searchQueryReducer;
