import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nutritionFactsApp from './reducers'
import App from './components/App'

// style
import '../scss/main'

let store = createStore(nutritionFactsApp)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
