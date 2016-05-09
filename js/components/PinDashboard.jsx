import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Grid, Row, Col } from 'react-bootstrap'
import { BarChart } from 'rd3'
import TitleNumberBlock from './dashboard/TitleNumberBlock'
import PieChartDistribution from './dashboard/PieChartDistribution'


const entity_list = ['unit_calories', 'unit_carbs', 'unit_fat', 'unit_protein', 'unit_water']
const get_sum_from_array_object = (key, array) => {
	let sum = 0
	array.forEach(ele => sum = sum+Number(ele.get(key)))
	return Math.round(sum*100)/100
}

const get_category_count_data = (array) => {
	let barData = {
		name: '種類'
	}

	// make category map(an object)
	let category_map = array.reduce((pV, cV, cI) => {
		if(pV[cV.get('category')] === undefined){
			pV[cV.get('category')] = 1
		}else{
			pV[cV.get('category')] = pV[cV.get('category')]+1
		}
		return pV
	}, {})

	let values = []
	for(let i in category_map){
		values.push({x: i, y: category_map[i]})
	}

	barData['values'] = values
	return [barData]
}

const barData = [
	{
		name: '種類',
		values: [
			{x: '水果類', y:1},
			{x: '菇類', y:2},
			{x: '肉類', y:3}
		]
	}
]


const PinDashboard = ({results}) => {
	const sum_map = entity_list.reduce((pV, cV, cI) => {
		pV[cV] = get_sum_from_array_object(cV, results)
		return pV
	}, {})


    return(
    	<div className="pin-dashborad">
			<Row>
				<Col md={6} className="block">
					<PieChartDistribution
						title="蛋白質分布"
						array={results}
						entity="unit_protein"
					 />
				</Col>
				<Col md={6}  className="block">
	    			<BarChart
	    				data={get_category_count_data(results)}
	    				height={300}
	    				title='種類'
						yAxisTickCount={2}
	    			/>
	    		</Col>
			</Row>
			<Row>
				<Col md={12} className="block">
					<TitleNumberBlock title={'熱量總和'} sum_number={sum_map['unit_calories']} unit='kcal' />
				</Col>
			</Row>
			<Row>
	    		<Col md={3} className="block">
	    			<TitleNumberBlock title={'蛋白質總和'} sum_number={sum_map['unit_protein']} unit='g' />
	    		</Col>
				<Col md={3} className="block">
	    			<TitleNumberBlock title={'脂肪總和'} sum_number={sum_map['unit_fat']} unit='g' />
	    		</Col>
	    		<Col md={3} className="block">
	    			<TitleNumberBlock title={'碳水化合物總和'} sum_number={sum_map['unit_carbs']} unit='g' />
	    		</Col>
				<Col md={3} className="block">
	    			<TitleNumberBlock title={'水分總和'} sum_number={sum_map['unit_water']} unit='g' />
	    		</Col>
			</Row>
    	</div>
	)
}

PinDashboard.propTypes = {
    results: ImmutablePropTypes.list.isRequired
}

export default PinDashboard
