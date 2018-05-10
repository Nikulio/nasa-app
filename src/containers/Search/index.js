// @flow

import * as React from "react";
import { connect } from "react-redux";
import { searchAction, changeMode } from "../../actions";
import SearchForm from "../../presentational/SearchForm";
import "./index.scss";

type State = {
	inputValue: string
};

type Props = {
	searchAction: (inputValue?: string) => mixed,
	changeMode: (val?: string) => mixed,
	loader: {
		loader: boolean
	},
	mode: string
};

class Search extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			inputValue: ""
		};
	}

	handleSubmit = (e : SyntheticEvent<>) => {
		e.preventDefault();
		let { inputValue } = this.state;
		this.props.searchAction(inputValue);
	};

	handleRadioChange = (val: string) => {
		this.props.changeMode(val);
	};

	inputHandle = (e: SyntheticInputEvent<>) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		const { loader, mode } = this.props;
		return (
			<SearchForm
				loader={!!loader.loader}
				title="NASA Search"
				inputHandle={this.inputHandle}
				radioChangeHandle={this.handleRadioChange}
				submitHandle={this.handleSubmit}
				mode={mode}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		loader: state.loader,
		mode: state.posts.mode
	};
}

const mapDispatchToProps = {
	searchAction,
	changeMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
