
import React from 'react';
import {FaFacebook, FaInstagram}from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import './scss/socials.scss';

//import logo from './logo.png'; 


const Socials = () => {
    
  return (
   
    <section className='socials'>
        <ul className='socials__ul'>

            <li className='socials_ul__li'>
                <a href='www.instagram.com' className='socials_icon__anchor'><FaFacebook /></a>
            </li>
            <li className='socials_ul__li'>
                <a href='www.instagram.com' className='socials_icon__anchor'><FaInstagram /></a>
            </li>
            <li className='socials_ul__li'>
                <a href='www.twitter.com' className='socials_icon__anchor'><FaTwitter /></a>
            </li>
        </ul>
    </section>

   
  )
}

export default Socials
