import React, { useState, useEffect } from "react";
import { searchTerm } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const SearchBar = () => {
	const [debouncedValue, setDebouncedValue] = useState("dogs");
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const dispatchSearchPicture = bindActionCreators(searchTerm, dispatch);

	const handleSubmit = (e) => {
		setDebouncedValue(e.target.value);
	};

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			dispatchSearchPicture(debouncedValue);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [debouncedValue]);

	return (
		<>
			<input
				onChange={(e) => handleSubmit(e)}
				placeholder="Search pictures..."
			></input>
		</>
	);
};

export default SearchBar;
