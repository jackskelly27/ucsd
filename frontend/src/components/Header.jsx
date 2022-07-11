import React from 'react'

function Header() {
  return (
    <div class="blue">
      <a href="https://health.ucsd.edu/specialties/primary-care/family-medicine/pages/default.aspx" target="_blank" rel="noopener noreferrer">
      <img class = "img-left" src="/UCSDLogo-new.jpg" alt="UCSD Logo" />
      </a>
      <h1 class= "logoheader">Physical Activity Resources Near You</h1>
      <a href="https://www.exerciseismedicine.org/" target="_blank" rel="noopener noreferrer">
      <img class = "img-right" src="/EIMLogo-new.jpg" alt="EIM Logo" />
      </a>
    </div>
  )
}

export default Header