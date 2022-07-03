import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {convertSelectionsToQueryString} from '../utils'

function ResourceForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

      const queryString = convertSelectionsToQueryString(data);
      
      navigate(`/resources?${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <tr>
        <select {...register("type")} defaultValue={"all"}>
          <option value="all" disabled>Type</option>
          <option value="App">App</option>
          <option value="Cable Show">Cable Show</option>
          <option value="YouTube Channel">YouTube Channel</option>
        </select>
      </tr>
      <tr>
        <select {...register("costNote")} defaultValue={"all"}>
          <option value="all" disabled>Cost</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </tr>
      <br></br>
      <tr>
        <input type="submit" className="submit-btn" value="Find" />
      </tr>
    </form>
  )
}

export default ResourceForm