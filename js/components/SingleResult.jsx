import React, {ProtoTypes} from 'react'
import { Row } from 'react-bootstrap'
import Name from './Name'
import DetailCard from './DetailCard'

class SingleResult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: False
        }
        this.expand = this.expand.bind(this)
    }

    expand(){
        this.setState(
            {
                expanded: !expanded
            }
        )
    }

    render(){
        if(expanded){
            return(
                <div>
                    <Name text={result.name} />
                    <DetailCard />
                </div>
            )
        }
        return(
            <div>
                <Name />
            </div>
        )

    }
}

SingleResult.prototypes = {
    result: ProtoTypes.string.isRequired
}

export default SingleResult
