import { onSearchSubmit } from "../apis/unsplash";

export const searchTerm = (term) => async (dispatch) => {
	const response = await onSearchSubmit(term);

	dispatch({ type: "SEARCH_TERM", payload: response });
};
