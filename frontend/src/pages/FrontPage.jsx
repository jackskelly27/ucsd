import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function FrontPage() {
  return (
    <div class="container">
      <Link to="/activities" className="btn">Activities</Link>
    </div>
  )
}

export default FrontPage
