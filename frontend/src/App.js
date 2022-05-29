import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<ActivityPage />} />
          </Routes>
        </div>
      </Router>
    </>
    )
}

export default App;