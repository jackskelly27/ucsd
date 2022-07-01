import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {convertSelectionsToQueryString} from '../utils'

function GymForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
      
      const queryString = convertSelectionsToQueryString(data);
      
      navigate(`/gyms?${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <tr>
        <select {...register("gym")} defaultValue={"all"}>
          <option value="all" disabled>Gym</option>
          <option value="24-Hour Fitness">24-Hour Fitness</option>
          <option value="Boys and Girls Club">Boys and Girls Club</option>
          <option value="Chuze Fitness">Chuze Fitness</option>
          <option value="Crunch Fitness">Crunch Fitness</option>
          <option value="Grossmont Adult Education">Grossmont Adult Education</option>
          <option value="Jewish Community Center">Jewish Community Center</option>
          <option value="LA Fitness">LA Fitness</option>
          <option value="Poway Adult School">Poway Adult School</option>
          <option value="Salvation Army">Salvation Army</option>
          <option value="YMCA">YMCA</option>
        </select>
      </tr>
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
      <br></br>
      <tr>
        <input type="submit" className="submit-btn" />
      </tr>
    </form>
  )
}

export default GymForm