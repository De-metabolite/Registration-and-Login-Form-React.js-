import React from 'react'
import './LoginSignUp.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
 const LoginSignUp = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
                <div className="input">
                <img src={person_icon} alt="Person-icon" />
                <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                <img src={email_icon} alt="email-icon" />
                <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                <img src={password_icon} alt="password-icon" />
                <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost password? <span>Click Here</span></div>
            <div className="submit-container">
                <div className="submit">SignUp</div>
                <div className="submit">Login</div>
            </div>

           
        
    </div>
  )
}
export default LoginSignUp

