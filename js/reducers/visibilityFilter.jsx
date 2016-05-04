import {Map, List} from 'immutable'

const initState = Map({
    keyword: null,
    categories: List([])
})

const visibilityFilter = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEYWORD':
            return state.set('keyword', action.keyword)

        case 'EDIT_CATEGORY':
            return state.set('categories', List(action.categories))
        default:
            return state

    }
}

export default visibilityFilter
