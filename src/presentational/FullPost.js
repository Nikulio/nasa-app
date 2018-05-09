import React, { Component } from "react";
import { Header } from "semantic-ui-react";
const FullPost = props => {
	console.log(props.location.state);
	let { data, links, href } = props.location.state;
	return (
		<div className="full-post">
			<Header as="h1" align="center">
				{data[0].title}
			</Header>
			<div className="full-post__image">
				<img src={links[0].href} alt="" />
			</div>
			<div className="full-post__created">{data[0].date_created}</div>
			<div className="full-post__desc">{data[0].description}</div>
		</div>
	);
};

export default FullPost;
