import { connect } from 'react-redux'
import { setSearchKeyword } from '../actions'
import React from 'react'
import { Button } from 'react-bootstrap'

let KeywordFilter = ( {dispatch} ) => (
    <input type="text" onChange={
        (e) => {
            e.preventDefault()
            dispatch(setSearchKeyword(e.target.value))
        }
    }
    />
)

KeywordFilter = connect()(KeywordFilter)

export default KeywordFilter
