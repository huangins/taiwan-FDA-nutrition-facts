import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

const TogglePin = ({ onClick, expanded }) => (
    expanded ? <FontAwesome name="arrow-down" size="2x" onClick={(e) => {
                    e.preventDefault()
                    onClick()
            }} />
            : <FontAwesome name="arrow-right" size="2x" onClick={(e) => {
                    e.preventDefault()
                    onClick()
            }} />
)

TogglePin.proptypes = {
    onClick: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired
}

export default TogglePin
