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
                        <Checkbox value="堅果與種子類"/>堅果與種子類
                        <Checkbox value="菇類"/>菇類
                        <Checkbox value="豆類"/>豆類
                        <Checkbox value="魚貝類"/>魚貝類
                        <Checkbox value="蛋類"/>蛋類
                        <Checkbox value="乳品類"/>乳品類
                        <Checkbox value="油脂類"/>油脂類
                        <Checkbox value="糖類"/>糖類
                        <Checkbox value="嗜好性飲料類"/>嗜好性飲料類
                        <Checkbox value="調味料及香辛料類"/>調味料及香辛料類
                        <Checkbox value="糕餅點心類"/>糕餅點心類
                        <Checkbox value="加工調理食品類"/>加工調理食品類
                    </div>
                )
            }
            </CheckboxGroup>
        )
    }
}

CategoryFilter = connect()(CategoryFilter)

export default CategoryFilter
