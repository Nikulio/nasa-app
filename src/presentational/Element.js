//@flow
import * as React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = <a>click here for more info</a>;

type Props = {
	classy: string,
	img: string,
	desc?: string,
	title: string
};

const Element = ({ classy, img, desc, title }: Props) => {
	return (
		<Card
			className={classy}
			image={img}
			header={title}
			description={desc}
			extra={extra}
		/>
	);
};

export default Element;
