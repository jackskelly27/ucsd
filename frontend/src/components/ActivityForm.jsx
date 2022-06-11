import React from 'react'
//dependences: react-hook-form
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {convertSelectionsToQueryString} from '../utils'

function ActivityForm() {
    //redirect user to activities page with the correct parameter when form is submitted
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

      const queryString = convertSelectionsToQueryString(data);
      
      navigate(`/activities?${queryString}`);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("region")} defaultValue={"all"}>
        <option value="all" disabled>Region</option>
        <option value="Central Coast">Central Coast</option>
        <option value="East">East</option>
        <option value="North Coastal">North Coastal</option>
        <option value="North Inland">North Inland</option>
        <option value="San Diego-Central">San Diego-Central</option>
        <option value="South Bay">South Bay</option>
        </select>
        <select {...register("description")} defaultValue={"all"}>
        <option value="all" disabled>Description</option>
        <option value="Badmitton">Badmitton</option>
        <option value="Running">Running</option>
        <option value="Strength Training">Strength Training</option>
        <option value="Walking">Walking</option>
        </select>
        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default ActivityForm