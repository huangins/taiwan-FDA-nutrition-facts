import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../components/ResultList'
import { togglePin } from '../actions'
const data = require('../../test_nutrition')
const search_content = require('raw!../../search_content.txt')

const getIdFromKeyword = (keyword) => {
    var left_patt = '<(\\d+)_[^<]*'
    var right_patt = '[^>]*>'

    if(!keyword.trim()){
        keyword = null
    }
    var regex = new RegExp(left_patt + keyword + right_patt, 'g')

    let result = []
    let matches

    while (matches = regex.exec(search_content)) {
        result.push(matches[1].toString());
    }

    return result
}

const getVisibleResults = (keyword, categories) => {
    // keyword is a string
    let result = []

    let result_list = getIdFromKeyword(keyword)
    result_list.forEach((ele) => {
        // add id in the object(result)
        let d = data[ele]
        d.id = Number(ele)
        result.push(d)
    })
    if(categories.size>0){
        console.log(categories)
        result = result.filter(ele => (categories.indexOf(ele.category)!= -1))
    }


    return result
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getVisibleResults(state.visibilityFilter.get('keyword'), state.visibilityFilter.get('categories'))
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggle_pin: (id) => {
            dispatch(togglePin(id))
        },
    }
)

const VisibleResultList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default VisibleResultList
