import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage'
import FrontPage from './pages/FrontPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ResourcePage from './pages/ResourcePage'
import GymPage from './pages/GymPage'
import ScrollToTop from './components/Scroll/scrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <body>
          <Header />
          <Routes>
            <Route path='/' element={<FrontPage />} />
            <Route path='/activities' element={<ActivityPage />} />
            <Route path='/resources' element={<ResourcePage />} />
            <Route path='/gyms' element={<GymPage />} />
          </Routes>
          <Footer />
        </body>
      </Router>
    </>
    )
}

export default App;