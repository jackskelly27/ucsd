import React from 'react'

function GymItem({gym}) {
  return (
    <tr>
      <td>{gym.gym}</td>
      <td>{gym.name}</td>
      <td>{gym.address}</td>
      <td>{gym.zip}</td>
      <td>{gym.neighborhood}</td>
      <td>{gym.phone}</td>
    </tr>
    )
  }

export default GymItem