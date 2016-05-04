import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import SingleResult from './SingleResult'

const ResultList = ({results, add_pin, delete_pin}) => (
    <div>
        {results.map(result =>
                <SingleResult
                    key={result.id}
                    result={result}
                    add_pin={() => add_pin(result.index)}
                    delete_pin = {() => delete_pin(result.index)}
                />
            )
        }
    </div>
)

ResultList.proptypes = {
    results: PropTypes.array.isRequired,
    add_pin: PropTypes.func.isRequired,
    delete_pin: PropTypes.func.isRequired
}

export default ResultList
