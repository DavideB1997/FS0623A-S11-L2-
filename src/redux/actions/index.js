export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_TO_SEARCHQUERY = 'ADD_TO_SEARCHQUERY';

export const addToFavouriteAction = (fav) => {
	return {
		type: ADD_TO_FAVOURITE,
		payload: fav,
	};
};

export const removeFromFavouriteAction = (fav) => {
	return {
		type: REMOVE_FROM_FAVOURITE,
		payload: fav,
	};
};

export const addToSearchQueryAction = (search) => {
	return {
		type: ADD_TO_SEARCHQUERY,
		payload: search,
	};
};

export const getSearchAction = async (baseEndpoint, query) => {
	try {
		const response = await fetch(baseEndpoint + query + '&limit=20');
		if (response.ok) {
			const { data } = await response.json();
			return data;
		} else {
			alert('Error fetching results');
		}
	} catch (error) {
		console.log(error);
	}
};
