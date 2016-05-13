import visibilityFilter from './visibilityFilter'
import pinResults from './pinResults'
import targetState from './targetState'
import {combineReducers} from 'redux'

const nutritionFactsApp = combineReducers({
    pinResults,
    visibilityFilter
})

export default nutritionFactsApp
