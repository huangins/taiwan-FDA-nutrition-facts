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

export const addPin = (id) => (
    {
        type: 'ADD_PIN',
        id
    }
)

export const deletePin = (id) => (
    {
        type: 'DELETE_PIN',
        id
    }
)
