import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <Link to="">
                    <img src={Logo}/>
                </Link>
            </div>
            <div className="header-navigation">
                <ul>
                    <li><Link to=""><i className="fa fa-gift"></i> Product</Link></li>
                    <li><Link to=""><i className="fa fa-book"></i> Book</Link></li>
                    <li><Link to=""><i className="fa fa-phone"></i> Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header