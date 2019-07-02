import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-top">
                <ul>
                    <li><Link to="">Lostby name</Link></li>
                    <li><Link to="">Create</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                </ul>
            </div>
            <div className="footer-bottom row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 bottom-left">
                    ©Copyright lostmy.name 2012. All rights reserved
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 bottom-right">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><Link to="">Terms & Conditions</Link></div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><Link to="">Privacy Policy</Link></div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"><Link to="">About Us</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer