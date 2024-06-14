import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const Footing = () => {
  return (
    <div className='footer-main'>
        <div className="footer-submain">
        <div className="footerleft">
      <h1>metashot</h1><div className="footer-list">
       <div className="footer-leftlist">
        <li><a href="/">Our product</a></li>
        <li><a href="/">Our Services</a></li>
        <li><a href="/">Our Services</a></li>
        <li><a href="/">Our Services</a></li>
       </div>
       <div className="footer-rightlist">
       <li><a href="/">Our Services</a></li>
       <li><a href="/">Our Services</a></li>
       <li><a href="/">Our Services</a></li>
       <li><a href="/">Our Services</a></li>
       </div></div>
       <span><a href="https://www.facebook.com/" className='icons'><FaFacebook /></a></span>
       <span><a href="https://www.whatsapp.com/" className='icons'><IoLogoWhatsapp /></a></span>
       <span><a href="https://www.instagram.com/" className='icons'><RiInstagramFill /></a></span>
       <span><a href="https://www.youtube.com/" className='icons'><IoLogoYoutube /></a></span>
       <span><a href="https://www.facebook.com/" className='icons'><BsTwitterX /></a></span>

      
      </div>
      <div className="footer-right">
        <h4>interested in our product</h4>
        <input type="email" placeholder="Enter your email" /><button className="subscribe"><a href="/">Subscribe</a></button><br />
        <input type="checkbox" />by checking this box i agree to the terms and conditions
        
      </div>
      </div><br /><hr /><br />
      <span>privacy policy </span>|
      <span>privacy policy </span>|
      <span>privacy policy </span>|
      <span>privacy policy </span>|
      <span>privacy policy </span>|
      <span>privacy policy </span>|
      <p>Copyright 2022 metashot</p>
      <p>All Rights Reserved</p>
    </div>
  )
}

export default Footing
