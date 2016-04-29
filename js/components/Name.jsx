import React, {ProtoTypes} from 'react'

Name = ({text, onClick}) => (
    <span onClick={onClick}>{text}</span>
)

Name.prototypes = {
    text: ProtoTypes.string.idRequired,
    onClick: ProtoTypes.func.isRequired
}

export default Name
