import React from 'react'
import { connect } from 'react-redux'
import ResultList from '../components/ResultList'
import { togglePin, increasePinnedAmount, decreasePinnedAmount } from '../actions'


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
        },
        increase_pinned_amount: (id) => {
            dispatch(increasePinnedAmount(id))
        },
        decrease_pinned_amount: (id) => {
            dispatch(decreasePinnedAmount(id))
        }
    }
)

const PinList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default PinList
