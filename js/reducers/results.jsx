import {List} from 'immutable'

const results = (state=List([]), action) => {
    switch (action.type) {
        case 'ADD_PIN':
            return state.push(action.id)
        case 'DELETE_PIN':
            return state.filter(ele => ele.get('id') !== action.id)
        default:
            return state
    }
}

export default results
