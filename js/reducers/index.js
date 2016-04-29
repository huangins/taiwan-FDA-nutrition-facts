import visibilityFilter from './visibilityFilter'
import results from './results'
import {combineReducers} from 'redux'

const nutritionFactsApp = combineReducers({
    results,
    visibilityFilter
})

export default nutritionFactsApp
