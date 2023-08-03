import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='c-wrapper' id='Contact'>
        <div className="c-container">
            <div className="c-heading">
              <span>Get in Touch</span>
              <span>Contact Us</span>
            </div>
            <div className="c-form">
            <form>
            <input type='text' name='name' placeholder='Name'/>
            <input type='email' name='email' placeholder='Email'/>
            <textarea name='message' placeholder='Write your message' rows={10}></textarea>
            <button className="button" type='submit'>Submit</button>
          </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
