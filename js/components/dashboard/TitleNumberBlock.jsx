import React, {PropTypes} from 'react'

const TitleNumberBlock = ({title, sum_number, unit}) => (
	<div className="sum-number">
		<p className="title">{title}</p>
		<p className="number">{sum_number}{' '}{unit}</p>
	</div>
)

TitleNumberBlock.propTypes = {
	title: PropTypes.string.isRequired,
	sum_number: PropTypes.number.isRequired,
	unit: PropTypes.string.isRequired
}

export default TitleNumberBlock
