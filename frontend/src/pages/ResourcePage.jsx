import React, { useEffect } from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getResources, reset } from '../features/resources/resourceSlice'
import ResourceItem from '../components/ResourceItem'
import {useNavigate} from 'react-router-dom'

function ResourcePage() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { resources, isLoading, isError, message } = useSelector(
    (state) => state.resources
  )
  
  function filterType() {
    dispatch(getResources({ type: 'YouTube Channel'}))
  }

  function resetType() {
    dispatch(getResources())
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getResources())
    

    if(!isError) {

      dispatch(reset())

    }

  }, [isError, message, dispatch])

  if (isLoading) {
    return (<><h5>Loading...</h5></>);
  }

  return (
    <>
      <section className='heading'><h1>Digital Resources!</h1></section>
      <div class="flex-parent jc-center">
        <button className='btn' onClick={filterType}>Filter By YouTube Channel</button>
        <button className='btn' onClick={resetType}>Reset Type</button>
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