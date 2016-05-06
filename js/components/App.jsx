import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'

const App = () => (
	<div>
		<CategoryFilter />
		<KeywordFilter />
		<PinList />
		<VisibleResultList />
	</div>
)

export default App
