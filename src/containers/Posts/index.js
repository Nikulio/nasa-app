import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from "lodash"


class Posts extends Component {
	
	renderPosts = () => {
		const {posts} = this.props;
		let {mode, items} = posts;
		console.log("--- items", items)
		return !(_.isEmpty(items)) ? items.map((value, key) => {
			console.log("--- posts.mode", mode)
			if ( mode === "image" && value.data[0].media_type === "image") {
				return (
					<div className="post post--image" key={value.data[0].nasa_id}>
						<div className="post-title">
							{value.data[0].description}
						</div>
						<div className="post-image">
							<img src={value.links[0].href} alt=""/>
						</div>
					</div>
				)
			} else if (mode === "video" && value.data[0].media_type === "video" ) {
				return (
					<div className="post post--video" key={value.data[0].nasa_id}>
						<div className="post-title">
							{value.data[0].description}
						</div>
						<div className="post-image">
							<img src={value.links[0].href} alt=""/>
						</div>
					</div>
				)
			}
		}) : (
			<div>No posts</div>
		)
	};
	
	render() {
		const {posts} = this.props;
		return (
			<div>
				{this.renderPosts()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};
export default connect(
	mapStateToProps,
)(Posts);
