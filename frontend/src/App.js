import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage'
import FrontPage from './pages/FrontPage'
import Header from './components/Header'
import ResourcePage from './pages/ResourcePage'
import GymPage from './pages/GymPage'

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
            <Route path='/gyms' element={<GymPage />} />
          </Routes>
        </div>
      </Router>
    </>
    )
}

export default App;