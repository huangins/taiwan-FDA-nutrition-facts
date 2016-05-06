import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Row } from 'react-bootstrap'

const PinComputationWindow = ({results}) => {
    let sum = 0
    results.forEach(ele => sum = sum+Number(ele.get('unit_calories')))

    return <h3>熱量總和：{sum}</h3>
}

PinComputationWindow.propTypes = {
    results: ImmutablePropTypes.list.isRequired
}

export default PinComputationWindow
