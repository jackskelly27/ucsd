import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {convertSelectionsToQueryString} from '../utils'

function ActivityForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

      const queryString = convertSelectionsToQueryString(data);
      
      navigate(`/activities?${queryString}`);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <tr>
        <select {...register("region")} defaultValue={"all"}>
          <option value="all" disabled>Region</option>
          <option value="Central Coast">Central Coast</option>
          <option value="East">East</option>
          <option value="North Coastal">North Coastal</option>
          <option value="North Inland">North Inland</option>
          <option value="San Diego-Central">San Diego-Central</option>
          <option value="South Bay">South Bay</option>
        </select>
      </tr>
      <tr>
        <select {...register("description")} defaultValue={"all"}>
          <option value="all" disabled>Description</option>
          <option value="Badmitton">Badmitton</option>
          <option value="Running">Running</option>
          <option value="Strength Training">Strength Training</option>
          <option value="Walking">Walking</option>
        </select>
      </tr>
      <tr>
        <select {...register("costNote")} defaultValue={"all"}>
          <option value="all" disabled>Cost</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </tr>
      <tr>
        <select {...register("scheduled")} defaultValue={"all"}>
          <option value="all" disabled>Scheduled</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </tr>
      <tr>
        <select {...register("setting")} defaultValue={"all"}>
          <option value="all" disabled>Setting</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </tr>
      <br></br>
      <tr>
        <input type="submit" className="submit-btn" />
      </tr>
    </form>
  )
}

export default ActivityForm