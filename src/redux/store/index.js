import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchQueryReducer from '../reducers/Seach';
import favouriteReducer from '../reducers/favourite';

const bigReducer = combineReducers({
	favourite: favouriteReducer,
	search: searchQueryReducer,
});

const store = configureStore({
	reducer: favouriteReducer,
});

export default store;
