import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Row, Col } from 'react-bootstrap'
import { PieChart } from 'rd3'

const PieChartDistribution = ({title, array, entity}) => {
    const data = array.map((ele) => (
        {
            label: ele.get('name'),
            value: ele.get(entity)
        }
    )).toJS()

    return(
        <PieChart
            data={data}
            width={300}
            height={150}
            radius={30}
            innerRadius={10}
            sectorBorderColor="white"
            title={title}
            valueTextFormatter={val => ('')}
         />
    )
}

PieChartDistribution.propTypes = {
	title: PropTypes.string.isRequired,
	array: ImmutablePropTypes.list.isRequired,
	entity: PropTypes.string.isRequired
}

export default PieChartDistribution
