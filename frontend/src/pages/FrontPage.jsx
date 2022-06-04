import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import '../App.css'

function FrontPage() {
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
    return;
  };

  return (
    <>
    <p className="container2 k5">This will be a paragraph, etc. with a description, etc.</p>
    <div className="container">
      <div className="card">
        <Link to="/activities" className="btn link">Activities</Link>
        {/*"handleSubmit" will validate your inputs before invoking "onSubmit" */}

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
      </div>
      <div className="card">
        <Link to="/resources" className="btn link">Digital Resources</Link>
      </div>
      <div className="card">
        <Link to="/gyms" className="btn link">Gyms</Link>
      </div>
    </div>
    </>
  )
}

export default FrontPage
