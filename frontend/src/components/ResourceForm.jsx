import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

// fix deploy, remove soon
function ResourceForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
      let typeQueryString;
      let costQueryString;

    if (data.type === 'all' && data.costNote === 'all') {
      typeQueryString = '';
      costQueryString = '';
      navigate(`/resources`);
    } else if (data.type === 'all' && data.costNote !== 'all') {
      typeQueryString = '';
      costQueryString = `costNote=${data.costNote}`;
      navigate(`/resources?${costQueryString}`);
    } else if (data.type !== 'all' && data.costNote === 'all') {
      typeQueryString = `type=${data.type}`;
      costQueryString = '';
      navigate(`/resources?${typeQueryString}`);
    }
    else {
      typeQueryString = `type=${data.type}`;
      costQueryString = `costNote=${data.costNote}`;
      navigate(`/resources?${typeQueryString}&${costQueryString}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("type")} defaultValue={"all"}>
        <option value="all" disabled>Type</option>
        <option value="YouTube Channel">YouTube Channel</option>
        <option value="App">App</option>
        </select>
        <select {...register("costNote")} defaultValue={"all"}>
          <option value="all" disabled>Cost</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        <input type="submit" className="submit-btn" />
    </form>
  )
}

export default ResourceForm