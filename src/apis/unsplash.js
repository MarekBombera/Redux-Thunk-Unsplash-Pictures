import axios from "axios";

export const onSearchSubmit = (term) => {
	return axios.get("https://api.unsplash.com/search/photos", {
		params: { query: term },
		headers: {
			Authorization: "Client-ID UNSPLASH_API_GOES_HERE",
		},
	});
};
