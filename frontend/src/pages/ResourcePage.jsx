import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getResources, reset } from '../features/resources/resourceSlice'
import ResourceItem from '../components/ResourceItem'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '../utils'

function ResourcePage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const type = query.get('type');

  const { resources, isLoading, isError, message } = useSelector(
    (state) => state.resources
  )
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    if (!type) {
      dispatch(getResources());
    } else {
      dispatch(getResources({type}));
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
      <section className='heading'><h1>{type ? type : "All"} Digital Resources!</h1></section>
      <div class="flex-parent jc-center">
        <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
      </div>

      <section class="container2">
      {resources.length > 0 ? (
        <table>
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