import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'
import { Row, Col, Tab, Nav, NavItem } from 'react-bootstrap'

const App = () => (
	<Tab.Container defaultActiveKey={2} id="uncontrolled-tab-example">
	<Row className="app-container">
		<Col xs={2} className="navbar">
			<Nav bsStyle="pills" stacked>
				<NavItem eventKey={1}>
				Dashboard
				</NavItem>
				<NavItem eventKey={2}>
				Form
				</NavItem>
			</Nav>
		</Col>
		<Col xs={10} className="tab-page">
			<Tab.Content animation>
				<Tab.Pane eventKey={1} title="Dashboard">

							<PinDashboardList />

				</Tab.Pane>
				<Tab.Pane eventKey={2} title="Form">

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

				</Tab.Pane>
			</Tab.Content>
		</Col>
	</Row>
	</Tab.Container>
)

export default App
