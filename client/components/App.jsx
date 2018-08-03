import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'

const App = () => (
  <div className='app-container section'>
    <Nav />


    <h1>Hello World</h1>
    {/* <Route exact path="/" component={ComponentToRender} /> */}
  </div>
)

export default App
