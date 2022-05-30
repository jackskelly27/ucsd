import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function FrontPage() {
  return (
    <>
      <Link to="/activities" className="btn">Activities</Link>
    </>
  )
}

export default FrontPage
