import React, { Component } from "react";
import Search from "../Search";
import Posts from "../Posts";
import { Container } from "semantic-ui-react";

class App extends Component {
	render() {
		return (
			<Container className="app">
				<Search />
				<Posts />
			</Container>
		);
	}
}
export default App;
