import React, { Component } from "react";
import Search from "../Search";
import Posts from "../Posts";
import FullPost from "../../presentational/FullPost";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => {
						return (
							<Container className="app">
								<Search />
								<Posts />
							</Container>
						);
					}}
				/>
				<Route path="/post" component={FullPost} />
			</Switch>
		);
	}
}
export default App;
