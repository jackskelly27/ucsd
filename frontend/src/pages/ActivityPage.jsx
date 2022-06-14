import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities, reset } from '../features/activities/activitySlice'
import ActivityItem from '../components/ActivityItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'
import ScrollToTop from 'react-scroll-to-top'

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

  // const filteredArrayTest = activityParamsArray.filter((subArray) => {
  //   return (subArray[1] === null && subArray[0] !== "costNote");
  // });

  const filteredActivityQueryParams = Object.fromEntries(filteredActivityParamsArray);
  //const filteredParamsTest=Object.fromEntries(filteredArrayTest);
  //const header=Object.keys(filteredParamsTest);

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
      <ScrollToTop smooth />
      <section className='heading'><h1>{region ? region : "All"} {description} {costNote} {setting} Activities!</h1></section>
      <div className="flex-parent jc-center">
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section className="container2">
      {activities.length > 0 ? (
        <table class="content-table">
          <thead>
            <tr>
              <th>Name</th>
              {/* {header.map((key,index) => (
                <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))} */}
              <th>Region</th>
              <th>Description</th>
              <th>Scheduled</th>
              <th>Setting</th>
              <th>Location</th>
              <th>Zip</th>
              <th>Cost</th>
              <th>When</th>
              <th>Phone</th>
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