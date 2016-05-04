import React, {PropTypes} from 'react'

const Name = ({text, onClick}) => (
    <span onClick={onClick}>{text}</span>
)

Name.proptypes = {
    text: PropTypes.string.idRequired,
    //onClick: PropTypes.func.isRequired
    onClick: PropTypes.func
}

export default Name
