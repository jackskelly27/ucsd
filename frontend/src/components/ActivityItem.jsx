import React from 'react'

function ActivityItem({activity}) {
  return (
    <tr>
      <td>{activity.name}</td>
      <td>{activity.type}</td>
      <td>{activity.description}</td>
      <td>{activity.neighborhood}</td>
      <td>{activity.address}</td>
      <td>{activity.cost}</td>
    </tr>
  )
}

export default ActivityItem