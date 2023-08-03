import React from 'react'
import flogo from '../../images/flogo.png'
import './Footer.css'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="f-container">
            <div className="f-left">
                <a href='#'><img src={flogo} width={120}/></a>
            </div>
            <div className="f-right">
                <span className='txt1'>Address</span>
                <span className='txt2'>B-24, B Block, Sector 2, Noida, Uttar Pradesh 201301</span>
                <div className="f-menu">
                    <Link spy={true} to='Services' smooth={true}>
                    <span>Services</span>
                    </Link>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>About Us</span>
                    <Link spy={true} to='Contact' smooth={true}>
                    <span>Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
