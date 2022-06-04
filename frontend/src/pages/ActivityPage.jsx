import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities, reset } from '../features/activities/activitySlice'
import ActivityItem from '../components/ActivityItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'

function ActivityPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const neighborhood = query.get('neighborhood');

  const { activities, isLoading, isError, message } = useSelector(
    (state) => state.activities
  )
  
  function filterNeighborhood() {
    dispatch(getActivities({ neighborhood: 'Little Italy'}))
  }

  function resetNeighborhood() {
    dispatch(getActivities())
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    if (!neighborhood) {
      dispatch(getActivities());
    } else {
      dispatch(getActivities({neighborhood}));
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
      <section className='heading'><h1>Activities!</h1></section>
      <div className="flex-parent jc-center">
        <button className='btn' onClick={filterNeighborhood}>Filter By Little Italy Neighborhood</button>
        <button className='btn' onClick={resetNeighborhood}>Reset Neighborhood</button>
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section className="container2">
      {activities.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Neighborhood</th>
              <th>Address</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
                <ActivityItem key={activity._id} activity={activity} />
              ))}
          </tbody>

        </table>
          ) : (
            <h3>You have no activities.</h3>
      )}
      </section>
    </>
  )
}

export default ActivityPage