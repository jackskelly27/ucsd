import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function GymForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let gymQueryString;
        let regionQueryString;

    if (data.gym === 'all' && data.region === 'all') {
        gymQueryString = '';
        regionQueryString = '';
        navigate(`/gyms`);
      } else if (data.gym === 'all' && data.region !== 'all') {
        gymQueryString = '';
        regionQueryString = `region=${data.region}`;
        navigate(`/gyms?${regionQueryString}`);
      } else if (data.gym !== 'all' && data.region === 'all') {
        gymQueryString = `gym=${data.gym}`;
        regionQueryString = '';
        navigate(`/gyms?${gymQueryString}`);
      }
      else {
        gymQueryString = `gym=${data.gym}`;
        regionQueryString = `region=${data.region}`;
        navigate(`/gyms?${gymQueryString}&${regionQueryString}`);
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("gym")} defaultValue={"all"}>
          <option value="all" disabled>Gym</option>
          <option value="YMCA">YMCA</option>
          <option value="Chuze Fitness">Chuze Fitness</option>
        </select>
        <select {...register("region")} defaultValue={"all"}>
          <option value="all" disabled>Region</option>
          <option value="Central">Central</option>
          <option value="East">East</option>
          <option value="South">South</option>
          <option value="North Central">North Central</option>
          <option value="North Inland">North Inland</option>
          <option value="North Coastal">North Coastal</option>
          <option value="National City">National City</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default GymForm