import React from 'react'

function ResourceItem({resource}) {
  return (
    <tr>
      <td>{resource.channel}</td>
      <td>{resource.type}</td>
      <td>{resource.cost}</td>
      <td>{resource.time}</td>
      <td>{resource.notes}</td>
    </tr>
  )
}

export default ResourceItem