import React from 'react'
import { connect } from 'react-redux'
import { togglePin } from '../actions'
import PinComputationWindow from '../components/PinComputationWindow'


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
    }
)

const PinComputationList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PinComputationWindow)

export default PinComputationList
