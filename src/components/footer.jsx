import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-top row"> 
                {/* <div className="row"> */}
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                        <Link to=""><img src={Logo}/></Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                        <Link to="">Create</Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                        <Link to="">Blog</Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                        <Link to="">Contact Us</Link>
                    </div>
                {/* </div> */}
            </div>
            <div className="footer-bottom row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 bottom-left">
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