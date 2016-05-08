import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Row, Col } from 'react-bootstrap'
import { BarChart } from 'rd3'
import TitleNumberBlock from './dashboard/TitleNumberBlock'

const entity_list = ['unit_calories', 'unit_carbs', 'unit_fat', 'unit_protein', 'unit_water']
const get_sum_from_array_object = (key, array) => {
	let sum = 0
	array.forEach(ele => sum = sum+Number(ele.get(key)))
	return Math.round(sum*100)/100
}

const = get_category_count_data = (array) => {
	let barData = {
		name: '種類'
	}

	array = array.reduce((pV, cV, cI) => {
		if(pV[cV.get('category')] === undefined){
			pV[cV.get('category')] = 1
		}else{
			pV[cV.get('category')] = 
		}
		
	}, {})
	array = []
}

const barData = [
	{
		name: '種類',
		values: [
			{x: '水果類', y:3},
			{x: '菇類', y:2},
			{x: '肉類', y:5}
		]
	}
]


const PinDashboard = ({results}) => {
	const sum_map = entity_list.reduce((pV, cV, cI) => {
		pV[cV] = get_sum_from_array_object(cV, results)
		return pV
	}, {})


    return(
    	<Row className="pin-dashborad">
    		<Col md={12}>
    			<BarChart
    				data={barData}
    				width={500}
    				height={300}
    				title='種類'
    			/>
    		</Col>
    		<Col md={12}>
	    		<TitleNumberBlock title={'熱量總和'} sum_number={sum_map['unit_calories']} unit='kcal' />
    		</Col>
    		<Col md={6}>
    			<TitleNumberBlock title={'水分總和'} sum_number={sum_map['unit_water']} unit='g' />
    		</Col>
    		<Col md={6}>
    			<TitleNumberBlock title={'蛋白質總和'} sum_number={sum_map['unit_protein']} unit='g' />
    		</Col>
    		<Col md={6}>
    			<TitleNumberBlock title={'脂肪總和'} sum_number={sum_map['unit_fat']} unit='g' />
    		</Col>
    		<Col md={6}>
    			<TitleNumberBlock title={'碳水化合物總和'} sum_number={sum_map['unit_carbs']} unit='g' />
    		</Col>
    	</Row>
	)
}

PinDashboard.propTypes = {
    results: ImmutablePropTypes.list.isRequired
}

export default PinDashboard
