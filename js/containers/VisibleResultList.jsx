import React from 'react'
import { connect } from 'react-redux'

import ResultList from '../components/ResultList'
import { addPin, deletePin } from '../actions'
const data = require('../../nutrition')
const search_content = require('raw!../../search_content.txt')

const getIdFromKeyword = (keyword) => {
    var left_patt = '<(\\d+)_[^<]*'
    var right_patt = '[^>]*>'
    var keyword = keyword
    var regex = new RegExp(left_patt + keyword + right_patt, 'g')

    let result = []
    let matches

    while (matches = regex.exec(search_content)) {
        result.push(matches[1].toString());
    }

    return result
}

const getVisibleResults = (keyword) => {
    // keyword is a string
    let result = []

    let result_list = getIdFromKeyword(keyword)
    result_list.forEach((ele) => {
        let d = data[ele]
        d.id = Number(ele)
        result.push(d)
    })

    return result
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getVisibleResults(state.visibilityFilter.get('keyword'))
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        add_pin: (id) => {
            dispatch(addPin(id))
        },
        delet_pin: (id) => {
            dispatch(deletePin(id))
        }
    }
)

const VisibleResultList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default VisibleResultList
