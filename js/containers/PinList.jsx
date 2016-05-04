import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../components/ResultList'
import { addPin, deletePin } from '../actions'
const data = require('../../test_nutrition')

const getPinResults = (immutable_list) => {
    let result = immutable_list.map(x => data[x.toString()])

    return result
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getPinResults(state.pinResults)
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

const PinList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default PinList
