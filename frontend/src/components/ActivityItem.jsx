import React from 'react'

function ActivityItem({activity}) {
  return (
    <div className='goal'>
        <div>
            {new Date(activity.createdAt).toLocaleString('en-us')}
        </div>
        <h2>{activity.name}</h2>
    </div>
  )
}

export default ActivityItem