import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function FrontPage() {
  return (
    <>
    <p className="container2 k5">This will be a paragraph, etc. with a description, etc.</p>
    <div class="container">
      <Link to="/activities" className="btn link">Activities</Link>
      <Link to="/resources" className="btn link">Digital Resources</Link>
      <Link to="/gyms" className="btn link">Gyms</Link>
    </div>
    </>
  )
}

export default FrontPage
