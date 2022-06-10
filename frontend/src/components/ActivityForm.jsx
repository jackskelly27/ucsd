import React from 'react'
//dependences: react-hook-form
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function ActivityForm() {
    //redirect user to activities page with the correct parameter when form is submitted
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let regionQueryString;
        let descriptionQueryString;

    if (data.region === 'all' && data.description === 'all') {
      regionQueryString = '';
      descriptionQueryString = '';
      navigate(`/activities`);
    } else if (data.region === 'all' && data.description !== 'all') {
      regionQueryString = '';
      descriptionQueryString = `description=${data.description}`;
      navigate(`/activities?${descriptionQueryString}`);
    } else if (data.region !== 'all' && data.description === 'all') {
      regionQueryString = `region=${data.region}`;
      descriptionQueryString = '';
      navigate(`/activities?${regionQueryString}`);
    } else {
      regionQueryString = `region=${data.region}`;
      descriptionQueryString = `description=${data.description}`;
      navigate(`/activities?${regionQueryString}&${descriptionQueryString}`);
    }
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