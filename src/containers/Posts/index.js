// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

type Props = {
	posts: {
		mode: string,
		items: Array<{
			data: Array<{ nasa_id: string, description: string }>,
			links: Array<{ href: string }>
		}>
	}
};

class Posts extends Component<Props> {
	renderPosts = () => {
		const { posts } = this.props;
		console.log(posts);
		let { mode, items } = posts;
		console.log(items);
		return !_.isEmpty(items) ? (
			items.map((value, key) => {
				console.log(typeof value);
				if (mode === "image" && value.data[0].media_type === "image") {
					return (
						<div className="post post--image" key={value.data[0].nasa_id}>
							<div className="post-title">{value.data[0].description}</div>
							<div className="post-image">
								<img src={value.links[0].href} alt="" />
							</div>
						</div>
					);
				} else if (mode === "video" && value.data[0].media_type === "video") {
					return (
						<div className="post post--video" key={value.data[0].nasa_id}>
							<div className="post-title">{value.data[0].description}</div>
							<div className="post-image">
								<img src={value.links[0].href} alt="" />
							</div>
						</div>
					);
				}
			})
		) : (
			<div>No posts</div>
		);
	};

	render() {
		const { posts } = this.props;
		return <div>{this.renderPosts()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};
export default connect(mapStateToProps)(Posts);
