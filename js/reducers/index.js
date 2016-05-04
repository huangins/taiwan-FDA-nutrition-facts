import visibilityFilter from './visibilityFilter'
import pinResults from './pinResults'
import {combineReducers} from 'redux'

const nutritionFactsApp = combineReducers({
    pinResults,
    visibilityFilter
})

export default nutritionFactsApp
