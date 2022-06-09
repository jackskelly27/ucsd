import React from 'react';
import '../App.css'
import ActivityForm from '../components/ActivityForm';
import ResourceForm from '../components/ResourceForm';
import GymForm from '../components/GymForm';

function FrontPage() {
  return (
    <>
    <span className="k5">Please enjoy the free to low-cost resources collected below. Remember, you live in San Diego! Find your favorite local coastline, park, or urban space to get out and move your body. If you're 65+, <a href="http://tools.silversneakers.com" target="_blank" rel="noopener noreferrer" class="emphasized">you may be eligible for a free program, Silver Sneakers, click here to find out</a>.</span>
    <div className="container">
      <div className="card">
        <h3>Physical Activities</h3>
        <ActivityForm />
      </div>
      <div className="card">
        <h3>Digital Resources</h3>
        <ResourceForm />
      </div>
      <div className="card">
        <h3>Gyms</h3>
        <GymForm />
      </div>
    </div>
    </>
  )
}

export default FrontPage
