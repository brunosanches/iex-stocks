import React, { Component } from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from './assets/stylesheets/global'
import Main from './pages/main'

import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Main />
      </Provider>
    )
  }
}

export default App
