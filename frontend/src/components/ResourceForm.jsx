import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

// fix deploy, remove soon
function ResourceForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        let typeQueryString;

    if (data.type === 'all') {
      typeQueryString = '';
    } else {
      typeQueryString = `type=${data.type}`;
    }

    navigate(`/resources?${typeQueryString}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("type")} defaultValue={"all"}>
        <option value="all" disabled>Type</option>
        <option value="YouTube Channel">YouTube Channel</option>
        <option value="App">App</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default ResourceForm