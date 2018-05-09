// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Elements from "../../presentational/Elements.js";
import Element from "../../presentational/Element.js";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.scss";

type Props = {
	posts: {
		mode: string,
		items: Array<{
			href: string,
			data: Array<{
				nasa_id: string,
				description: string,
				media_type: string,
				title: string
			}>,
			links: Array<{ href: string }>
		}>
	}
};

class Posts extends Component<Props> {
	renderPosts = () => {
		const { posts } = this.props;
		let { mode, items } = posts;
		return !_.isEmpty(items) ? (
			items.map((value, key) => {
				if (mode === "image" && value.data[0].media_type === "image") {
					if (!(value.data[0].description === value.data[0].title)) {
						return (
							<Link
								key={value.data[0].nasa_id}
								to={{
									pathname: `post/:${value.data[0].nasa_id}`,
									state: { ...value }
								}}
							>
								<Element
									classy="post post--image"
									img={value.links[0].href}
									desc={value.data[0].description}
									title={value.data[0].title}
								/>
							</Link>
						);
					} else if (value.data[0].description === value.data[0].title) {
						return (
							<Link
								key={value.data[0].nasa_id}
								to={{
									pathname: `post/:${value.data[0].nasa_id}`,
									state: { ...value }
								}}
							>
								<Element
									classy="post post--image"
									key={value.data[0].nasa_id}
									img={value.links[0].href}
									title={value.data[0].title}
								/>
							</Link>
						);
					}
				} else if (mode === "video" && value.data[0].media_type === "video") {
					let videoImage = "/img/video.png";
					if (!(value.data[0].description === value.data[0].title)) {
						return (
							<Element
								classy="post post--video"
								key={value.data[0].nasa_id}
								img={videoImage}
								desc={value.data[0].description}
								title={value.data[0].title}
							/>
						);
					} else if (value.data[0].description === value.data[0].title) {
						return (
							<Element
								classy="post post--video"
								key={value.data[0].nasa_id}
								img={videoImage}
								title={value.data[0].title}
							/>
						);
					}
				}
			})
		) : (
			<div className="post post--empty">
				<img src="/img/not_found.jpg" alt="" />
			</div>
		);
	};

	render() {
		return <Elements>{this.renderPosts()}</Elements>;
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};
export default connect(mapStateToProps)(Posts);
