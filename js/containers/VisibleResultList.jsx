import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import ResultList from '../components/ResultList'
import { togglePin } from '../actions'


const getVisibleResults = (results, keyword, categories) => {
    // keyword is a string

    if(!keyword.trim()){
        return List([])
    }

    let result = results.filter(ele => (ele.get('all_name').indexOf(keyword) > -1))

    if(categories.size>0){
        result = result.filter(ele => (categories.indexOf(ele.get('category'))!= -1))
    }


    return result
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getVisibleResults(state.pinResults, state.visibilityFilter.get('keyword'), state.visibilityFilter.get('categories'))
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggle_pin: (id) => {
            dispatch(togglePin(id))
        }
    }
)

const VisibleResultList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default VisibleResultList
