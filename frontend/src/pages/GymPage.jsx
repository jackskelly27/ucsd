import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getGyms, reset } from '../features/gyms/gymSlice'
import GymItem from '../components/GymItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'

function GymPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const gym = query.get('gym');
  const neighborhood = query.get('neighborhood');

  const { gyms, isLoading, isError, message } = useSelector(
    (state) => state.gyms
  )
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    if (!gym && !neighborhood) {
      dispatch(getGyms());
    } else if (!gym && neighborhood) {
      dispatch(getGyms({neighborhood}));
    } else if (gym && !neighborhood) {
      dispatch(getGyms({gym}));
    } else {
      dispatch(getGyms({neighborhood, gym}));
    }
    

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  return (
    <>
      <section className='heading'><h1>{gym ? gym : "All"} {neighborhood} Gyms!</h1></section>
      <div class="flex-parent jc-center">
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section class="container2">
      {gyms.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Gym</th>
              <th>Name</th>
              <th>Address</th>
              <th>Zip</th>
              <th>Neighborhood</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {gyms.map((gym) => (
                <GymItem key={gym._id} gym={gym} />
              ))}
          </tbody>

        </table>
          ) : (
            <h3>You have no gyms.</h3>
      )}
      </section>
    </>
  )
}

export default GymPage