import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.goFoodie} alt="" />
                <p> Redefining the experience of food for you. </p>
                <div className="footer-social-icons">
                    <a href=''><img src={assets.facebook_icon} alt="" /></a>
                    <a href='https://x.com/its_nikhil_9871' target='blank'><img src={assets.twitter_icon} alt="" /></a>
                    <a href='https://www.linkedin.com/in/nikhil-kumar-yadav-064507254/' target='blank'><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2> COMPANY </h2>
                <ul>
                    <li> Home </li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2> GET IN TOUCH </h2>
                <ul>
                    <li>+91-6289081605</li>
                    <li>thedecoderyadav020@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 © goFoodie.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
