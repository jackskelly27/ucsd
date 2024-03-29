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
          <option value="all" disabled>Activity</option>
          <option value="Badminton">Badminton</option>
          <option value="Basketball">Basketball</option>
          <option value="Biking">Biking</option>
          <option value="Dance">Dance</option>
          <option value="Hiking">Hiking</option>
          <option value="Pickleball">Pickleball</option>
          <option value="Running">Running</option>
          <option value="Strength Training">Strength Training</option>
          <option value="Swimming">Swimming</option>
          <option value="Tennis">Tennis</option>
          <option value="Walking">Walking</option>
          <option value="Yoga">Yoga</option>
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
          <option value="all" disabled>Timing</option>
          <option value="On Your Own Time">On Your Own Time</option>
          <option value="Scheduled Time">Scheduled Time</option>
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
        <input type="submit" className="submit-btn" value="Find"/>
      </tr>
    </form>
  )
}

export default ActivityForm