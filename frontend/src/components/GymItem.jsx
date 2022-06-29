import React from 'react'

function GymItem({gym}) {
  var url = `${gym.site}`;
  return (
    <tr>
      <td>{gym.gym}</td>
      <td>{gym.name}</td>
      <td>{gym.address}</td>
      <td>{gym.zip}</td>
      <td>{gym.region}</td>
      <td>{gym.phone}</td>
      <td><a href={url} id="click" target="_blank" rel="noopener noreferrer">Link</a></td>
    </tr>
    )
  }

export default GymItem