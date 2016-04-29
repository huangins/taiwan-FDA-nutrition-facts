import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import SingleResult from 'SingleResult'

const ResultList = ({results}) => (
    <div>
        {results.map(result =>
                <SingleResult
                    result={result}
                />
            )
        }
    </div>
)

ResultList.proptypes = {
    results: ProtoTypes.array.isRequired
}

export default ResultList
