import React, { Component } from 'react'

import GlobalStyle from './assets/stylesheets/global'
import Main from './pages/main'

class App extends Component {
  render () {
    return (
      <div className="App">
        <GlobalStyle />
        <Main />
      </div>
    )
  }
}

export default App
