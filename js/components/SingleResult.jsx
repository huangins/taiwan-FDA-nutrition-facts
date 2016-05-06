import React, {PropTypes} from 'react'
import { Row } from 'react-bootstrap'
import Name from './Name'
import DetailCard from './DetailCard'
import TogglePin from './TogglePin'

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
                    <Row>
                        <TogglePin pinned={this.props.result.get('pinned')} onClick={this.props.toggle_pin} />
                        <Name text={this.props.result.get('name')} onClick={this.expand} />
                    </Row>
                    <DetailCard result={this.props.result} />
                </div>
            )
        }
        return(
            <div>
                <Row>
                    <TogglePin pinned={this.props.result.get('pinned')} onClick={this.props.toggle_pin} />
                    <Name text={this.props.result.get('name')} onClick={this.expand} />
                </Row>
            </div>
        )

    }
}

SingleResult.proptypes = {
    result: PropTypes.object.isRequired,
    toggle_pin: PropTypes.func.isRequired
}

export default SingleResult
