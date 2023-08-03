import React from 'react'
import './Hero.css'
import hero from '../../images/hero.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import vector1 from  '../../images/Vector1.png'
import vector2 from  '../../images/Vector2.png'


function Hero() {
  return (
    <div className='h-wrapper'>
        <div className="h-left">
          <div className="h-name">
            <span>Gulmohar Digitech Pvt. Ltd.</span>
            <span>Public Relations Firm in Sector 2<br></br>
Opening at 9:30 AM tomorrow</span>
            <span>We have a great team of Professionals which will Help you Grow your Business Exponentially.</span>
          </div>
            <a href='https://www.google.com/maps/dir//Gulmohar+Digitech+Pvt.+Ltd./data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce554de00aa15:0x654a9f56901f7dd4!2m2!1d77.3150639!2d28.5863551'  target="_blank">
            <button className='button h-button'>Get Direction </button>

            </a>
            <div className="h-icons">
              <a href='https://www.facebook.com/GulmoharDigitechPvtLtd/'  target="_blank"><img src={facebook}></img></a>
              <a href='https://www.instagram.com/gulmohar.digitech/'  target="_blank"><img src={instagram}></img></a>
              <a href='https://twitter.com/gulmohardigitec?lang=en'  target="_blank"><img src={twitter}></img></a>
            </div>
        </div>
        <div className="h-right">
          <img src={vector2}/>
          <div className="image-container">
            <img src={hero}></img>
          </div>
        </div>
    </div>
  )
}

export default Hero
