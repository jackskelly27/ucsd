import React from 'react'
//dependences: react-hook-form
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function ActivityForm() {
    //redirect user to activities page with the correct parameter when form is submitted
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let neighborhoodQueryString;

    if (data.neighborhood === 'all') {
      neighborhoodQueryString = '';
    } else {
      neighborhoodQueryString = `neighborhood=${data.neighborhood}`;
    }

    navigate(`/activities?${neighborhoodQueryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("neighborhood")} defaultValue={"all"}>
        <option value="all" disabled>Neighborhood</option>
        <option value="Balboa">Balboa</option>
        <option value="La Jolla">La Jolla</option>
        <option value="North County">North County</option>
        <option value="Coronado">Coronado</option>
        <option value="Mission Beach">Mission Beach</option>
        <option value="Little Italy">Little Italy</option>
        <option value="Scripps Miramar Ranch">Scripps Miramar Ranch</option>
        <option value="Downtown">Downtown</option>
        <option value="Torrey Pines">Torrey Pines</option>
        <option value="Pacific Beach">Pacific Beach</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default ActivityForm