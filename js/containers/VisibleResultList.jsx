import React from 'react'
import { connect } from 'react-redux'

const data = require('../../test_nutrition.json')
const search_content = require('../../search_content')

const getIdFromKeyword = (keyword) => {
    var left_patt = '<(\\d+)_[^<]*'
    var right_patt = '[^>]*>'
    var keyword = keyword
    var regex = new RegExp(left_patt + keyword + right_patt, 'g')

    let result = []
    let matches

    while (matches = regex.exec(text)) {
        result.push(matches[1]);
    }

    return result
}
