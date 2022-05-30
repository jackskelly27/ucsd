import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities, reset } from '../features/activities/activitySlice'
import ActivityItem from '../components/ActivityItem'

function ActivityPage() {
  const dispatch = useDispatch()

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
    dispatch(getActivities())
    

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
      <button className='btn btn-left' onClick={filterNeighborhood}>Filter By Little Italy Neighborhood</button>
      <button className='btn btn-right' onClick={resetNeighborhood}>Reset Neighborhood</button>

      <section>
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
            <h3>You have not set any goals</h3>
      )}
      </section>
    </>
  )
}

export default ActivityPage