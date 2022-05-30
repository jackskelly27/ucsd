import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function FrontPage() {
  return (
    <div class="container">
      <Link to="/activities" className="btn link">Activities</Link>
      <Link to="/resources" className="btn link">Digital Resources</Link>
    </div>
  )
}

export default FrontPage
