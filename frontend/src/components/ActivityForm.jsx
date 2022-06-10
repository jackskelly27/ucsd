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

    if (data.region === 'all') {
      regionQueryString = '';
    } else {
      regionQueryString = `region=${data.region}`;
    }

    navigate(`/activities?${regionQueryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("region")} defaultValue={"all"}>
        <option value="all" disabled>Region</option>
        <option value="Central Coast">Central Coast</option>
        <option value="East">East</option>
        <option value="National City">National City</option>
        <option value="North Central">North Central</option>
        <option value="North Coastal">North Coastal</option>
        <option value="North Inland">North Inland</option>
        <option value="San Diego-Central">San Diego-Central</option>
        <option value="South Bay">South Bay</option>
        </select>
        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default ActivityForm