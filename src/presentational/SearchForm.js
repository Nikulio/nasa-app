//@flow

import React from "react";

type Props = {
	title: string,
	inputHandle: (value: SyntheticInputEvent<>) => mixed,
	radioChangeHandle: (value: SyntheticInputEvent<>) => mixed,
	submitHandle: (value: SyntheticEvent<>) => mixed
};

const SearchForm = ({
	title,
	inputHandle,
	radioChangeHandle,
	submitHandle
}: Props) => {
	return (
		<div>
			<h1>{title}</h1>
			<form action="#" id="search-form">
				<input type="text" id="searchInput" onChange={inputHandle} />
				<input
					type="radio"
					name="radio-button"
					value="image"
					defaultChecked={true}
					onChange={radioChangeHandle}
				/>{" "}
				Image
				<input
					type="radio"
					name="radio-button"
					value="video"
					onChange={radioChangeHandle}
				/>{" "}
				Video
				<input type="submit" value="Go" onClick={submitHandle} />
			</form>
		</div>
	);
};

export default SearchForm;
