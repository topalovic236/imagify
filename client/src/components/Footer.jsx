import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <div className="flex items-center justify-between gap-4 py-3 mt-20">

            <img src={assets.logo} alt="" width={150} />

            <p className="">Copyright Imagify 2025 | All rights reserved.</p>

            <div className="flex gap-2.5">
                <a href="https://www.facebook.com">
                    <img  className='cursor-pointer' src={assets.facebook_icon} alt="" width={35}/>
                </a>
                   
                <a href="https://www.instagram.com">
                    <img className='cursor-pointer' src={assets.instagram_icon} alt="" width={35}/>
                </a>
               
                <a href="https://www.x.com">
                    <img className='cursor-pointer' src={assets.twitter_icon} alt="" width={35}/>
                </a>
        
            </div>
        </div>
    )
}

export default Footer;