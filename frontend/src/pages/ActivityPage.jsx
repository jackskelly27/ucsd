import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities, reset } from '../features/activities/activitySlice'
import ActivityItem from '../components/ActivityItem'

function ActivityPage() {
  const dispatch = useDispatch()

  const { activities, isLoading, isError, message } = useSelector(
    (state) => state.activities
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getActivities())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  return (
    <>
      <section className='heading'><h1>Activities!</h1></section>

      <section>
      {activities.length > 0 ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Neighborhood</th>
            <th>Address</th>
            <th>Cost</th>
          </tr>
              {activities.map((activity) => (
                <ActivityItem key={activity._id} activity={activity} />
              ))}
            </table>
          ) : (
            <h3>You have not set any goals</h3>
      )}
      </section>
    </>
  )
}

export default ActivityPage