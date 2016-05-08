import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'

const App = () => (
	<div>
		<PinDashboardList />
		<CategoryFilter />
		<KeywordFilter />
		<PinList />
		<VisibleResultList />
	</div>
)

export default App
