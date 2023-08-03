import React from 'react'
import './Navbar.css'
import flogo from '../../images/flogo.png'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-logo">
                <a href='#'>
                <img alt="logo" src={flogo} width={100}/>
                </a>
            </div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul className='i-list'>
                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true}>
                    <li>Testimonial</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                    <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
            <div className='btn'>
            <a href='tel:+91-96674-13707'>
            <button className="button">
                Call Us
            </button>

            </a>

            </div>
        </div>
    </div>
  )
}

export default Navbar
