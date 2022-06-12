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

  const activityQueryParams = {
    region: query.get('region'),
    description: query.get('description'),
    costNote: query.get('costNote'),
    scheduled: query.get('scheduled'),
    setting: query.get('setting')
  }
 
  const activityParamsArray = Object.entries(activityQueryParams);

  const filteredActivityParamsArray = activityParamsArray.filter((subArray) => {
    return subArray[1] !== null;
  });

  const filteredActivityQueryParams = Object.fromEntries(filteredActivityParamsArray);

  const { activities, isLoading, isError, message } = useSelector(
    (state) => state.activities
  )
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    dispatch(getActivities(filteredActivityQueryParams));

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  const { region, description, costNote, setting } = activityQueryParams;
  return (
    <>
      <section className='heading'><h1>{region ? region : "All"} {description} {costNote} {setting} Activities!</h1></section>
      <div className="flex-parent jc-center">
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section className="container2">
      {activities.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Zip</th>
              <th>Region</th>
              <th>Cost</th>
              <th>When</th>
              <th>Phone</th>
              <th>Site</th>
              <th>Email</th>
              <th>Scheduled</th>
              <th>Setting</th>
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