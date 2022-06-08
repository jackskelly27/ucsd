import React from 'react'
import '../App.css'

const today = new Date();

function Footer() {
  return (
    <div className="footer">
      <h5>UC San Diego Health &copy; {today.getFullYear()}</h5>
    </div>
  )
}

export default Footer