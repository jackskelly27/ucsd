import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage'
import FrontPage from './pages/FrontPage'
import Header from './components/Header'
import ResourcePage from './pages/ResourcePage'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<FrontPage />} />
            <Route path='/activities' element={<ActivityPage />} />
            <Route path='/resources' element={<ResourcePage />} />
          </Routes>
        </div>
      </Router>
    </>
    )
}

export default App;