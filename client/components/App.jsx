import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'

const App = () => (
  <div className='app-container section'>
    <Nav />
    <Route exact path='/' component={Home} />
    <Footer />

  </div>
)

export default App
