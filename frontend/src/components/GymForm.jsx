import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function GymForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let gymQueryString;
        let neighborhoodQueryString;

    if (data.gym === 'all' && data.neighborhood === 'all') {
        gymQueryString = '';
        neighborhoodQueryString = '';
        navigate(`/gyms`);
      } else if (data.gym === 'all' && data.neighborhood !== 'all') {
        gymQueryString = '';
        neighborhoodQueryString = `neighborhood=${data.neighborhood}`;
        navigate(`/gyms?${neighborhoodQueryString}`);
      } else if (data.gym !== 'all' && data.neighborhood === 'all') {
        gymQueryString = `gym=${data.gym}`;
        neighborhoodQueryString = '';
        navigate(`/gyms?${gymQueryString}`);
      }
      else {
        gymQueryString = `gym=${data.gym}`;
        neighborhoodQueryString = `neighborhood=${data.neighborhood}`;
        navigate(`/gyms?${gymQueryString}&${neighborhoodQueryString}`);
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("gym")} defaultValue={"all"}>
          <option value="all" disabled>Gym</option>
          <option value="YMCA">YMCA</option>
          <option value="Chuze Fitness">Chuze Fitness</option>
        </select>
        <select {...register("neighborhood")} defaultValue={"all"}>
          <option value="all" disabled>Neighborhood</option>
          <option value="Chula Vista">Chula Vista</option>
          <option value="Santee">Santee</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default GymForm