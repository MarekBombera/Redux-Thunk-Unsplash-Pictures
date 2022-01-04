import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "./searchBar";
import Pictures from "./pictures";
import "../styles/styles.css";

const App = () => {
	const state = useSelector((state) => state);

	return (
		<>
			<div className="app__searchBar">
				<SearchBar />
			</div>
			<div className="app__pictures">
				{state.searchPicture === null ? <div>Loading</div> : <Pictures />}
			</div>
		</>
	);
};

export default App;
