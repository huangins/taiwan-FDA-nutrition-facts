import React, {PropTypes} from 'react'
import SingleResult from './SingleResult'

const ResultList = ({results, toggle_pin}) => (
    <div>
        {results.map(result =>
                <SingleResult
                    key={result.id}
                    result={result}
                    toggle_pin={() => toggle_pin(result.id)}
                />
            )
        }
    </div>
)

ResultList.proptypes = {
    results: PropTypes.array.isRequired,
    toggle_pin: PropTypes.func.isRequired,
}

export default ResultList
