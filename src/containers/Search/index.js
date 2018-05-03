import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchAction, changeMode} from "../../actions"


class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue : ""
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let {inputValue} = this.state;
		this.props.searchAction(inputValue);
	};
	
	handleRadioChange = (e) => {
		this.props.changeMode(e.target.value)
	};
	
	render() {
		return (
			<div>
				<h1>NASA Search</h1>
				<form action="#" id="search-form">
					<input type="text" id="searchInput" onChange={(e) => this.setState({inputValue : e.target.value})}/>
					<input type="radio" name="radio-button" value="image" defaultChecked={true} onChange={this.handleRadioChange}/> Image
					<input type="radio" name="radio-button" value="video" onChange={this.handleRadioChange}/> Video
					<input type="submit" value="Go" onClick={this.handleSubmit}/>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = {
	searchAction,
	changeMode
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(Search);
