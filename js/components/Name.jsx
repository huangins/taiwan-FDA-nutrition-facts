import React, {ProtoTypes} from 'react'

Name = ({text}) => (
    <span>{text}</span>
)

Name.prototypes = {
    text: ProtoTypes.string.idRequired
}

export default Name
