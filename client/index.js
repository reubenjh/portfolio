import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './components/App'

import store from './store'

import './sass/main.scss'
 
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
