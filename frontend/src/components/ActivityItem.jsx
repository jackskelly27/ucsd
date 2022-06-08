import React from 'react'

function ActivityItem({activity}) {
  return (
    <tr>
      <td>{activity.name}</td>
      <td>{activity.type}</td>
      <td>{activity.description}</td>
      <td>{activity.location}</td>
      <td>{activity.zip}</td>
      <td>{activity.region}</td>
      <td>{activity.cost}</td>
      <td>{activity.when}</td>
      <td>{activity.phone}</td>
      <td>{activity.site}</td>
      <td>{activity.email}</td>
      <td>{activity.scheduled}</td>
      <td>{activity.setting}</td>
    </tr>
  )
}

export default ActivityItem