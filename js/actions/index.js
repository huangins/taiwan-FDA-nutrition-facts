export const setSearchKeyword = (keyword) => (
    {
        type: 'SET_SEARCH_KEYWORD',
        keyword
    }
)

export const editCatogory = (categories) => (
    {
        type: 'EDIT_CATEGORY',
        categories
    }
)

export const togglePin = (id) => (
    {
        type: 'TOGGLE_PIN',
        id
    }
)

export const filterNoUnit = () => (
    {
        type: 'FILTER_NO_UNIT'
    }
)
