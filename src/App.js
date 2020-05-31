// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '@gooddata/react-components/styles/css/main.css'

import HomePage from './pages/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    )
  }
}

export default App
