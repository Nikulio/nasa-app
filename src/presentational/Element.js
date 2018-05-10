//@flow
import * as React from "react";
import { Card, Icon } from "semantic-ui-react";

 
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
		/>
	);
};

export default Element;
