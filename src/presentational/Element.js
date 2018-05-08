//@flow
import * as React from "react"
import { Card, Icon } from 'semantic-ui-react'


const extra = (
	<a>
		<Icon name='user' />
		16 Friends
	</a>
)

type Props = {
	classy: string,
	img : string,
	desc : string,
	title: string,
	key: string
}


const Elements = ({classy, img, desc, title, key}:Props) => {
	return (
		<Card
			className={classy}
			key={key}
			image={img}
			header={title}
			// meta='Friend'
			description={desc}
			extra={extra}
		/>
	)
}

export default Elements


