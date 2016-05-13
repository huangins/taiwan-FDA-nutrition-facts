import { connect } from 'react-redux'
import { editTarget } from '../actions'
import TargetInput from '../components/TargetInput'
import React from 'react'
import {  } from 'react-bootstrap'


class TargetForm extends React.Component {

    render(){
        return(
            <TargetInput edit_target={(target) => { this.props.dispatch(editTarget(target)) }} entity="calories" />
        )
    }
}

TargetForm = connect()(TargetForm)

export default TargetForm
