import { connect } from 'react-redux'
import { editCatogory } from '../actions'
import React from 'react'
import CheckboxGroup from 'react-checkbox-group';

class CategoryFilter extends React.Component {
    constructor(props){
        super(props)
        this.handle_changed = this.handle_changed.bind(this)
    }

    handle_changed(array){
        this.props.dispatch(editCatogory(array))
    }

    render(){
        return(
            <CheckboxGroup name="category" onChange={this.handle_changed}>
                {
                Checkbox => (
                    <div>
                        <Checkbox value="穀物類"/>穀物類
                        <Checkbox value="肉類"/>肉類
                        <Checkbox value="澱粉類"/>澱粉類
                        <Checkbox value="水果類"/>水果類
                        <Checkbox value="蔬菜類"/>蔬菜類
                    </div>
                )
            }
            </CheckboxGroup>
        )
    }
}

CategoryFilter = connect()(CategoryFilter)

export default CategoryFilter
