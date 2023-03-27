import React from 'react'

function ContactMe() {
  return (
    <div className="contact-container div-margin">
        <div className="contact-title">
            <h2>Contact Me</h2>
        </div>
        <div className="contact-info">
            <div className="contact-form">
                <form>
                    <input className="first-name" placeholder="First Name"></input>
                    <input className="second-name" placeholder="Last Name"></input>
                    <input className="email" placeholder="Email"></input>
                    <input className="message" placeholder="Type Your Message Here"></input>
                    <button className="submit-button" >Submit</button>
                </form>
            </div>

            <div className="contact-details">
                <h1>Sebastian Amariei</h1>
                <h2>Full Stack Developer</h2>
                <h3>Phone</h3>
                <h4>07949192870</h4>
                <h3>Email</h3>
                <h4>Sebastianamariei02@gmmail.com</h4>
            </div>
        </div>
    </div>
  )
}

export default ContactMe
