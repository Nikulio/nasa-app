//@flow
import * as React from "react"


type Props = {
	children?: React.Node,
}
const Elements = (props:Props) => {
	return (
		<div className="posts">
			{props.children}
		</div>
	)
}

export default Elements


