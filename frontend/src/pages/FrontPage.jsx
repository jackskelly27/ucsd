import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import ActivityForm from '../components/ActivityForm';
import ResourceForm from '../components/ResourceForm';
import GymForm from '../components/GymForm';

function FrontPage() {
  return (
    <>
    <p className="container2 k5">This will be a paragraph, etc. with a description, etc.</p>
    <div className="container">
      <div className="card">
        <Link to="/activities" className="btn link">Activities</Link>
        <ActivityForm />
      </div>
      <div className="card">
        <Link to="/resources" className="btn link">Digital Resources</Link>
        <ResourceForm />
      </div>
      <div className="card">
        <Link to="/gyms" className="btn link">Gyms</Link>
        <GymForm />
      </div>
    </div>
    </>
  )
}

export default FrontPage
