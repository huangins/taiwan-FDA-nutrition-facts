import React, {PropTypes} from 'react'
import { Row } from 'react-bootstrap'
import Name from './Name'
import DetailCard from './DetailCard'

class SingleResult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: false
        }
        this.expand = this.expand.bind(this)
    }

    expand(){
        this.setState(
            {
                expanded: !this.state.expanded
            }
        )
    }

    render(){
        if(this.state.expanded){
            return(
                <div>
                    <Name text={this.props.result.get('name')} onClick={this.expand} />
                    <DetailCard result={this.props.result} />
                </div>
            )
        }
        return(
            <div>
                <Name text={this.props.result.get('name')} onClick={this.expand} />
            </div>
        )

    }
}

SingleResult.proptypes = {
    result: PropTypes.object.isRequired
}

export default SingleResult
