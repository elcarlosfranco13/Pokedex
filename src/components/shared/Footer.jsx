import React from 'react'
import "./styles/footer.css"
import pikachuRun from "./images/pikachuRun.gif"


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__red'>
        <div className='footer__black'></div>
        <div className='footer__circle'></div>
        <div className='footer__img'>
          <img className='img__footer' src={pikachuRun} alt="" />
        
        </div>
      </div>

    </footer>
  )
}

export default Footer