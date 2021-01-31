import React from 'react'
import { createBrowserHistory as history } from 'history'
import { BrowserRouter as  Router } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import './assets/styles/App.scss'
import ScrollToTop from './components/scroll-to-top'

function App() {
  return (
    <Router history={history()}>
      <ScrollToTop>
        <MainLayout />
      </ScrollToTop>
    </Router>
  )
}

export default App
