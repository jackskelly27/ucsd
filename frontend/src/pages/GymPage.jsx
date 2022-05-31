import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getGyms, reset } from '../features/gyms/gymSlice'
import GymItem from '../components/GymItem'
import {useNavigate} from 'react-router-dom'

function GymPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { gyms, isLoading, isError, message } = useSelector(
    (state) => state.gyms
  )
  
  function filterGym() {
    dispatch(getGyms({ gym: 'YMCA'}))
  }

  function resetGym() {
    dispatch(getGyms())
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getGyms())
    

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  return (
    <>
      <section className='heading'><h1>Get Gyms!</h1></section>
      <div class="flex-parent jc-center">
        <button className='btn' onClick={filterGym}>Filter By YMCA</button>
        <button className='btn' onClick={resetGym}>Reset Gym</button>
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