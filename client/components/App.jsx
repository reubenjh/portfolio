import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

const App = () => (
  <div className='app-container section'>
    <Nav />
    <Route exact path='/' component={Home} />

    <hr />
    <div className='has-text-centered'>
      <i className="icon is-footer-icon fab fa-github fa-lg"></i><span>github</span>
      <div></div>
      <i className="icon is-footer-icon fab fa-linkedin-in fa-lg"></i><span>linkedin</span>
    </div>

  </div>
)

export default App
