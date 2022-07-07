import React from 'react'
import '../App.css'

const today = new Date();

function Footer() {
  return (
    <div className="footer">
      <h2>Connect with us!</h2>
      <div className="container5">
      <a href="https://www.facebook.com/UCSDPrimaryCareFamilyMedicineLaJolla" alt="Facebook" class="fa fa-facebook" id="click" target="_blank" rel="noopener noreferrer"> </a>
      <a href="https://twitter.com/UCSDHealth?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" alt="Twitter" class="fa fa-twitter" id="click" target="_blank" rel="noopener noreferrer"> </a>
      <a href="https://www.instagram.com/ucsdhealth/" alt="Twitter" class="fa fa-instagram" id="click" target="_blank" rel="noopener noreferrer"> </a>
      </div>
      <h6>Matthew Kelly & Caroline Duffy &copy; {today.getFullYear()}</h6>
    </div>
  )
}

export default Footer