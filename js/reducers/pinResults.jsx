import {List} from 'immutable'

const results = (state=List([]), action) => {
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
