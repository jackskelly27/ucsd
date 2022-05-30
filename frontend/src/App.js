import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage'
import FrontPage from './pages/FrontPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<FrontPage />} />
            <Route path='/activities' element={<ActivityPage />} />
          </Routes>
        </div>
      </Router>
    </>
    )
}

export default App;

// const API_URL = '/api/goals/'

// class App extends React.Component {

//   state = {
//     activities: []
//   }
  
//   getActivities = () => {
//     axios.get(API_URL)
//       .then((response) => {
//         const data = response.data;
//         this.setState({ activities: data})
//       })
//       .catch(() => {
//         console.log("Error");
//       });
//   };

//   componentDidMount = () => {
//     this.getActivities();
//   }

//   render() {
//     return(
//       <div>
//         <h1>Welcome to my App</h1>
//       </div>
//     );
//   }
// }

// export default App;
