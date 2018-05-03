import React, {Component} from "react"
import Search from "../Search"
import Posts from "../Posts"


class App extends Component {
	render() {
		return (
			<div className="app">
				<Search />
				<Posts />
			</div>
		)
	}
}
export default App