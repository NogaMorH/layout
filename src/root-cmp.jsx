import React from 'react'
import { Routes, Route } from 'react-router'

import './assets/styles/main.scss'
import { Home } from './pages/home'

export class RootCmp extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route key='/home' element={<Home />} path='/'></Route>
        </Routes>
      </div>
    )
  }
}
