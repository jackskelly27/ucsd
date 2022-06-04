import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function GymForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let gymQueryString;

    if (data.gym === 'all') {
      gymQueryString = '';
    } else {
      gymQueryString = `gym=${data.gym}`;
    }

    navigate(`/gyms?${gymQueryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("gym")} defaultValue={"all"}>
        <option value="all" disabled>Gym</option>
        <option value="YMCA">YMCA</option>
        <option value="Chuze Fitness">Chuze Fitness</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default GymForm