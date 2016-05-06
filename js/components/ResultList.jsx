import React, {PropTypes} from 'react'
import SingleResult from './SingleResult'

const ResultList = ({results, toggle_pin}) => {
    if (results==[]){
        return
    }

    return (
        <div>
            {results.map(result =>
                    <SingleResult
                        key={result.get('id')}
                        result={result}
                        toggle_pin={() => toggle_pin(result.get('id'))}
                    />
                )
            }
        </div>
    )
}


ResultList.proptypes = {
    results: PropTypes.array.isRequired,
    toggle_pin: PropTypes.func.isRequired,
}

export default ResultList
