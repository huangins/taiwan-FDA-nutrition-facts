import { fromJS } from 'immutable'
let data = require('../../test_nutrition_records')

// add pinned status
data = data.map(ele => {
        ele.pinned = false
        return ele
})

let initState = fromJS(data)

const pinResult = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_PIN':
            if(state.get('id') !== action.id){
                return state
            }
            return state.set('pinned', !state.get('pinned'))
        default:
            return state

    }
}

const pinResults = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_PIN':
            return state.map(ele => pinResult(ele, action))
        default:
            return state
    }
}

export default pinResults
