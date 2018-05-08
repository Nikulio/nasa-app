//@flow

import React from "react";
import { Header, Radio, Form, Button } from "semantic-ui-react";

type Props = {
	title: string,
	inputHandle: (value: SyntheticInputEvent<>) => mixed,
	radioChangeHandle: (value: string) => mixed,
	submitHandle: (value: SyntheticEvent<>) => mixed,
	loader: boolean,
	mode?: string
};

const SearchForm = ({
	title,
	inputHandle,
	radioChangeHandle,
	submitHandle,
	loader,
	mode
}: Props) => {
	return (
		<div>
			<Header as="h1" textAlign="center">
				{title}
			</Header>
			<Form action="#" id="search-form" loading={loader}>
				<input
					type="text"
					placeholder="Type your search request here"
					id="searchInput"
					onChange={inputHandle}
				/>
				<div className="filter">
					<div className="filter__elem">
						<Form.Field>
							<Radio
								slider
								type="radio"
								name="radio-button"
								value="image"
								label="Image"
								checked={mode === "image"}
								onChange={(e, { value }) => radioChangeHandle(value)}
							/>
						</Form.Field>
					</div>
					<div className="filter__elem">
						<Form.Field>
							<Radio
								slider
								type="radio"
								name="radio-button"
								value="video"
								label="Video"
								checked={mode === "video"}
								onChange={(e, { value }) => radioChangeHandle(value)}
							/>
						</Form.Field>
					</div>
				</div>
				<Button icon="send" type="submit" onClick={submitHandle} />
			</Form>
		</div>
	);
};

export default SearchForm;
