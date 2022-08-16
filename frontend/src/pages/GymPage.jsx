import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getGyms, reset } from '../features/gyms/gymSlice'
import GymItem from '../components/GymItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'
import ScrollToTop from 'react-scroll-to-top'

function GymPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const gymQueryParams = {
    gym: query.get('gym'),
    region: query.get('region')
  }
 
  const gymParamsArray = Object.entries(gymQueryParams);

  const filteredGymParamsArray = gymParamsArray.filter((subArray) => {
    return subArray[1] !== null;
  });

  const filteredGymQueryParams = Object.fromEntries(filteredGymParamsArray);

  const { gyms, isLoading, isError, message } = useSelector(
    (state) => state.gyms
  )
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    dispatch(getGyms(filteredGymQueryParams));

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  const { gym, region } = gymQueryParams;
  return (
    <>
    <ScrollToTop smooth />
      <section className='heading'><h1>{gym ? gym : "All"} {region} Gyms & Community Centers</h1></section>
      <div class="flex-parent jc-center">
        <button className='submit-btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section class="container2">
      {gyms.length > 0 ? (
        <table class="content-table">
          <thead>
            <tr>
              <th>Gym</th>
              <th>Name</th>
              <th>Address</th>
              <th>Zip</th>
              <th>Region</th>
              <th className="phone">Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {gyms.map((gym) => (
                <GymItem key={gym._id} gym={gym} />
              ))}
          </tbody>

        </table>
          ) : (
            <h3>No matching gyms found.</h3>
      )}
      </section>
    </>
  )
}

export default GymPage