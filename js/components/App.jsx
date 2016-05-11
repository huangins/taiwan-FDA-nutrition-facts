import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'

const App = () => (
	<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		<Tab eventKey={1} title="Dashboard">
			<Row className="tab-page">
				<Col xs={10} xsOffset={1}>
					<PinDashboardList />
				</Col>
			</Row>
		</Tab>
		<Tab eventKey={2} title="Form">
			<Row className="tab-page">
				<Col xs={10} xsOffset={1}>
					<KeywordFilter />
					<CategoryFilter />
					<Row>
						<Col md={6}>
							<VisibleResultList />
						</Col>
						<Col md={6}>
							<PinList />
						</Col>
					</Row>
				</Col>
			</Row>
		</Tab>
	</Tabs>
)

export default App
