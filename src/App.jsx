import React from 'react'
import { createBrowserHistory as history } from 'history'
import { BrowserRouter as  Router } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import './assets/styles/App.scss'

function App() {
  return (
    <Router history={history()}>
      <MainLayout />
    </Router>
  )
}

export default App
