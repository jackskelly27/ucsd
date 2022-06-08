import React from 'react'

function GymItem({gym}) {
  return (
    <tr>
      <td>{gym.gym}</td>
      <td>{gym.name}</td>
      <td>{gym.address}</td>
      <td>{gym.zip}</td>
      <td>{gym.region}</td>
      <td>{gym.phone}</td>
      <td>{gym.site}</td>
    </tr>
    )
  }

export default GymItem