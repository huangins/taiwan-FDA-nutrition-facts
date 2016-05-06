import { fromJS } from 'immutable'
let data = require('../../test_nutrition_records')

// add pinned status
data = data.map(ele => {
        ele.pinned = false
        return ele
})

let initState = fromJS(data)

const results = (state, action) => {
    state = initState
    switch (action.type) {
        case 'TOGGLE_PIN':
            if(state.include(action.id)){
                return state.filter(ele => ele.get('id') !== action.id)
            }
            return state.push(action.id)
        default:
            return state
    }
}

export default results
