//@flow

import React from "react";
import { Header, Radio, Form, Button } from "semantic-ui-react";

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
			<Header as="h1" textAlign="center">
				{title}
			</Header>
			<Form action="#" id="search-form">
				<input
					type="text"
					placeholder="Type your search request here"
					id="searchInput"
					onChange={inputHandle}
				/>
				<div className="filter">
					<div className="filter__elem">
						<Radio
							slider
							type="radio"
							name="radio-button"
							value="image"
							defaultChecked={true}
							onChange={radioChangeHandle}
						/>Image
					</div>
					<div className="filter__elem">
						<Radio
							slider
							type="radio"
							name="radio-button"
							value="video"
							onChange={radioChangeHandle}
						/>Video
					</div>
				</div>
				<Button icon="send" type="submit" onClick={submitHandle} />
			</Form>
		</div>
	);
};

export default SearchForm;
