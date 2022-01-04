import React from "react";
import { useSelector } from "react-redux";

const Pictures = () => {
	const state = useSelector((state) => state);

	const renderPictures = state.searchPicture.data.results.map((result) => {
		return (
			<div key={result.id}>
				<img src={result.urls.regular} alt={result.alt_description}></img>
			</div>
		);
	});

	return <>{renderPictures}</>;
};

export default Pictures;
