import React from 'react';
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
    <div className="container4 sourceSansPro">
      <div className="card2">
        <p className="box1-2p">Please enjoy the free to low-cost resources collected below. Remember, you live in San Diego! Find your favorite local coastline, park, or urban space to get out and move your body.</p>
        <img src="Box1-resized.jpg" alt="Welcome" height="180"/>
      </div>  
      <div className="card2">
        <p className="box1-2p">Over 65? <a href="http://tools.silversneakers.com" target="_blank" rel="noopener noreferrer" class="emphasized">You may be eligible for a free program, Silver Sneakers, click here to find out</a>.</p>
        <img src="Box2-resized.jpg" alt="Silver Sneakers" height="180"/>
      </div>
    </div>
    <div className='container'>
        <div className='card'>
            <h3 className="openSans">Physical Activities</h3>
            <img src="Activities-resized.jpg" alt="Physical Activities" height="180"/>
            <span className="k6 sourceSansPro">Explore the locations to walk, run, bike, swim, hike, dance, play sports, do yoga, etc. around San Diego!</span>
            <ActivityForm />
        </div>
        <div className="card">
            <h3 className="openSans">Digital Resources</h3>
            <img src="Resources-resized.jpg" alt="Digital Resources" height="180"/>
            <span className="k6 sourceSansPro">Discover YouTube channels, fitness apps, and cable channels to assist with exercise on your own time and in your own space.</span>
            <ResourceForm />
        </div>
        <div className="card">
            <h3 className="openSans">Gyms & Community Centers</h3>
            <img src="Gyms-resized.jpg" alt="Gyms" height="180"/>
            <span className="k6 sourceSansPro">Search gyms and community centers around town to find a convenient location near you.</span>
            <GymForm />
        </div>
    </div>
    <div className="container6">
      <div className="card3">
        <div>
        <img src="Box3-resized.jpg" alt="Welcome" height="300"/>
        </div>
        <div className="box3">
        <h3 className="sourceSansPro">Tips to stay active???&nbsp;&nbsp;&nbsp;&nbsp;(Consejos de como mantenerse activo???)</h3>
        <ul className="openSans">
          <li><a href="https://exerciseismedicine.org/wp-content/uploads/2021/04/EIM_Rx-for-Health_Sit-Less-Move-More.pdf" target="_blank" rel="noopener noreferrer">when you sit a lot during your day</a> &nbsp;&nbsp;&nbsp;<a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/Sie%CC%81ntate-menos.-Mue%CC%81vete-ma%CC%81s..pdf" target="_blank" rel="noopener noreferrer">(cuando se siente mucho durante el d??a)</a></li>
          <li><a href="https://www.exerciseismedicine.org/assets/page_documents/Rx%20for%20health%20-%20staying%20active%20even%20when%20feeling%20frail.pdf" target="_blank" rel="noopener noreferrer">when you feel frail</a> &nbsp;&nbsp;&nbsp;<a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/09/Rx-for-health-staying-active-even-when-feeling-frail.pdf" target="_blank" rel="noopener noreferrer">(cuando se sienta fr??gil)</a></li>
          <li><a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/EIM_Rx-for-Health_Being-Active-with-Your-Young-Child.pdf" target ="_blank" rel="noopener noreferrer">with your young child</a>&nbsp;&nbsp;&nbsp;<a href="https://www.exerciseismedicine.org/wp-content/uploads/2021/04/Estar-activo-con-tu-hijo-pequeno.pdf" target="_blank" rel="noopener noreferrer">(con un hijo peque??o)</a></li>
          <li><a href="https://www.exerciseismedicine.org/eim-in-action/health-care/resources/rx-for-health-series/" target="_blank" rel="noopener noreferrer">when you have a medical condition</a>&nbsp;&nbsp;&nbsp;<a href="https://www.exerciseismedicine.org/eim-in-action/health-care/resources/rx-for-health-series/" target="_blank" rel="noopener noreferrer">(cuando tenga una condici??n m??dica)</a></li>
          <li><a href="https://drive.google.com/file/d/0Bx04Z0HzLIqBQm1abmdoaXJlQW1rQ1BRZ25od2FWNnQtbkdJ/view?resourcekey=0-6jwL6CjGrUd0kdCPHlfkVg" target="_blank" rel="noopener noreferrer">UC San Diego Physical Activity Manual</a>&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1a40dex3BE3kiVxG5Wi6814FThKozJw8X/view" target="_blank" rel="noopener noreferrer">(UC San Diego manual de actividades f??sicas)</a></li>
        </ul>
        </div>
      </div> 
    </div>
    </>
  )
}

export default FrontPage
