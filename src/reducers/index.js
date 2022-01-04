import { combineReducers } from "redux";

const searchPicture = (term = null, action) => {
	switch (action.type) {
		case "SEARCH_TERM":
			return action.payload;

		default:
			return term;
	}
};

export default combineReducers({
	searchPicture,
});
