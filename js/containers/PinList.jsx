import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../components/ResultList'
import { togglePin } from '../actions'


const getPinResults = (immutable_list) => {
    return immutable_list.filter(ele => ele.get('pinned') == true)
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getPinResults(state.pinResults)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggle_pin: (id) => {
            dispatch(togglePin(id))
        }
    }
)

const PinList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default PinList
