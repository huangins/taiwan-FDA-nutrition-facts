import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'
import { Row, Col } from 'react-bootstrap'

const App = () => (
	<div>
		<Row>
			<Col xs={10} xsOffset={1}>
				<PinDashboardList />
			</Col>
		</Row>
		<Row>
			<Col xs={10} xsOffset={1}>
				<CategoryFilter />
				<KeywordFilter />
				<PinList />
				<VisibleResultList />
			</Col>
		</Row>
	</div>
)

export default App
