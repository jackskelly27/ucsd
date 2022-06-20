import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getResources, reset } from '../features/resources/resourceSlice'
import ResourceItem from '../components/ResourceItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'
import ScrollToTop from 'react-scroll-to-top'

function ResourcePage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const resourceQueryParams = {
    type: query.get('type'),
    costNote: query.get('costNote'),
    sort: ["channel", "1"]
  }

  console.log('resourceQueryParams', resourceQueryParams);
 
  const resourceParamsArray = Object.entries(resourceQueryParams);

  console.log('resourceParamsArray', resourceParamsArray);

  const filteredResourceParamsArray = resourceParamsArray.filter((subArray) => {
    return subArray[1] !== null;
  });

  const filteredResourceQueryParams = Object.fromEntries(filteredResourceParamsArray);

  console.log('filteredResourceQueryParams', filteredResourceQueryParams);

  const { resources, isLoading, isError, message } = useSelector(
    (state) => state.resources
  )
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getResources(filteredResourceQueryParams));

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  const { type, costNote} = resourceQueryParams;
  return (
    <>
      <ScrollToTop smooth />
      <section className='heading'><h1>{type ? type : "All"} {costNote} Digital Resources</h1></section>
      <div class="flex-parent jc-center">
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section class="container2">
      {resources.length > 0 ? (
        <table class="content-table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Time</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
                <ResourceItem key={resource._id} resource={resource} />
              ))}
          </tbody>

        </table>
          ) : (
            <h3>You have no digital resources.</h3>
      )}
      </section>
    </>
  )
}

export default ResourcePage