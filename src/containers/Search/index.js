// @flow

import * as React from "react";
import { connect } from "react-redux";
import { searchAction, changeMode } from "../../actions";
import SearchForm from "../../presentational/SearchForm";

type State = {
	inputValue: string
};

type Props = {
	searchAction: (inputValue?: string) => mixed,
	changeMode: (val?: string) => mixed
};

class Search extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			inputValue: ""
		};
	}

	handleSubmit = (e: SyntheticEvent<>) => {
		e.preventDefault();
		let { inputValue } = this.state;
		this.props.searchAction(inputValue);
	};

	handleRadioChange = (e: SyntheticInputEvent<>) => {
		this.props.changeMode(e.target.value);
	};

	inputHandle = (e: SyntheticInputEvent<>) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		return (
			<SearchForm
				title="NASA Search"
				inputHandle={this.inputHandle}
				radioChangeHandle={this.handleRadioChange}
				submitHandle={this.handleSubmit}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = {
	searchAction,
	changeMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
