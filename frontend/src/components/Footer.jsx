import React from 'react'
import '../App.css'

const today = new Date();

function Footer() {
  return (
    <div className="footer">
      <h6>Matthew Kelly, UCSD Copyright {today.getFullYear()}</h6>
    </div>
  )
}

export default Footer