import React from 'react';
import '../App.css'
import ActivityForm from '../components/ActivityForm';
import ResourceForm from '../components/ResourceForm';
import GymForm from '../components/GymForm';
import SimpleSlider from '../components/SimpleSlider';


function FrontPage() {
  return (
    <>
    <div>
      <SimpleSlider />
    </div>
    <div className="container4">
      <div className="card2">
        <span className="k7">Please enjoy the free to low-cost resources collected below. Remember, you live in San Diego! Find your favorite local coastline, park, or urban space to get out and move your body.</span>
        <img src="Box1.png" alt="Welcome" height="160"/>
      </div>  
      <div className="card2">
        <span className="k7">Over 65? <a href="http://tools.silversneakers.com" target="_blank" rel="noopener noreferrer" class="emphasized">You may be eligible for a free program, Silver Sneakers, click here to find out</a>.</span>
        <img src="Box2.png" alt="Silver Sneakers" height="160"/>
      </div>
    </div>
    <div className="container">
      <div className="card">
        <h2>Physical Activities</h2>
        <img src="ActivitiesImage.png" alt="Physical Activities" height="140"/>
        <span className="k6">Explore the locations to walk, run, bike, swim, hike, dance, play sports, do yoga, etc. around San Diego!</span>
        <ActivityForm />
      </div>
      <div className="card">
        <h2>Digital Resources</h2>
        <img src="DigitalResourcesNew.png" alt="Digital Resources" height="140"/>
        <span className="k6">Discover YouTube channels, fitness apps, and cable channels to assist with exercise on your own time and in your own space.</span>
        <ResourceForm />
      </div>
      <div className="card">
        <h2>Gyms</h2>
        <img src="GymsImage.png" alt="Gyms" height="140"/>
        <span className="k6">Search gyms and community centers around town to find a convenient location near you.</span>
        <GymForm />
      </div>
    </div>
    <div className="container6">
      <div className="card3">
        <div>
        <img src="Box3New.png" alt="Welcome" height="300"/>
        </div>
        <div className="box3">
        <h3>Tips to stay active…(Consejos de como mantenerse activo cuando….)</h3>
        <ul>
          <li><a href="https://exerciseismedicine.org/wp-content/uploads/2021/04/EIM_Rx-for-Health_Sit-Less-Move-More.pdf" target="_blank" rel="noopener noreferrer">when you sit a lot during your day</a>  <a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/Sie%CC%81ntate-menos.-Mue%CC%81vete-ma%CC%81s..pdf" target="_blank" rel="noopener noreferrer">(cuando se siente mucho durante el día)</a></li>
          <li><a href="https://www.exerciseismedicine.org/assets/page_documents/Rx%20for%20health%20-%20staying%20active%20even%20when%20feeling%20frail.pdf" target="_blank" rel="noopener noreferrer">when you feel frail</a>  <a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/09/Rx-for-health-staying-active-even-when-feeling-frail.pdf" target="_blank" rel="noopener noreferrer">(cuando se sienta frágil)</a></li>
          <li><a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/EIM_Rx-for-Health_Being-Active-with-Your-Young-Child.pdf" target ="_blank" rel="noopener noreferrer">with your young child</a> <a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/Estar-activo-con-tu-hijo-pequeno.pdf" target="_blank" rel="noopener noreferrer">(con un hijo pequeño)</a></li>
          <li><a href="https://www.exerciseismedicine.org/eim-in-action/health-care/resources/rx-for-health-series/" target="_blank" rel="noopener noreferrer">when you have a medical condition</a> <a href="https://www.exerciseismedicine.org/eim-in-action/health-care/resources/rx-for-health-series/" target="_blank" rel="noopener noreferrer">(cuando tenga una condición médica)</a></li>
          <li><a href="https://drive.google.com/file/d/0Bx04Z0HzLIqBQm1abmdoaXJlQW1rQ1BRZ25od2FWNnQtbkdJ/view?resourcekey=0-6jwL6CjGrUd0kdCPHlfkVg" target="_blank" rel="noopener noreferrer">UC San Diego Physical Activity Manual</a> <a href="https://drive.google.com/file/d/1a40dex3BE3kiVxG5Wi6814FThKozJw8X/view" target="_blank" rel="noopener noreferrer">(UC San Diego manual de actividades físicas)</a></li>
        </ul>
        </div>
      </div> 
    </div>
    </>
  )
}

export default FrontPage
