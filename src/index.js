import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import history from 'config/history'
import SearchPage from './searchPage'
import { Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <SearchPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
