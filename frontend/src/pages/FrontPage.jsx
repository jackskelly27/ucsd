import React from 'react';
import '../App.css'
import ActivityForm from '../components/ActivityForm';
import ResourceForm from '../components/ResourceForm';
import GymForm from '../components/GymForm';

function FrontPage() {
  return (
    <>
    <div className="card">
    <img src="RotatingImage4.png" alt="A Rotating" height="300"></img>
    <p>(Carousel of 5 images will be above this picture in it's stead)</p>
    </div>
    <span className="k5">Please enjoy the free to low-cost resources collected below. Remember, you live in San Diego! Find your favorite local coastline, park, or urban space to get out and move your body. If you're 65+, <a href="http://tools.silversneakers.com" target="_blank" rel="noopener noreferrer" class="emphasized">you may be eligible for a free program, Silver Sneakers, click here to find out</a>.</span>
    <div className="container">
      <div className="card">
        <h3>Physical Activities</h3>
        <img src="ActivitiesImage.png" alt="Physical Activities" height="100"/>
        <span className="k6">Explore the locations to walk, run, bike, swim, hike, dance, play sports, do yoga, etc. around San Diego!</span>
        <ActivityForm />
      </div>
      <div className="card">
        <h3>Digital Resources</h3>
        <img src="ResourcesImage.png" alt="Digital Resources" height="120"/>
        <span className="k6">Discover YouTube channels, fitness apps, and cable channels to assist with exercise on your own time and in your own space.</span>
        <ResourceForm />
      </div>
      <div className="card">
        <h3>Gyms</h3>
        <img src="GymsImage.png" alt="Gyms" height="110"/>
        <span className="k6">Search gyms and community centers around town to find a convenient location near you.</span>
        <GymForm />
      </div>
    </div>
    </>
  )
}

export default FrontPage
