import React from 'react'

function ResourceItem({resource}) {
  var url = `${resource.site}`;
  return (
    <tr>
      <td>{resource.channel}</td>
      <td>{resource.type}</td>
      <td>{resource.cost}</td>
      <td>{resource.time}</td>
      <td>{resource.notes}</td>
      <td><a href={url} id="click" target="_blank" rel="noopener noreferrer">Link</a></td>
    </tr>
  )
}

export default ResourceItem