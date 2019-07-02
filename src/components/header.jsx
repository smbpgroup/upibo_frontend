import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
const Header = () =>{
    return(
        
            <div className="header">
                <div className="logo">
                    <Link to="">
                        <img src={Logo}/>
                        Lost my name
                    </Link>
                    
                </div>
                <div className="header-navigation">
                    <ul>
                        <li><Link to="">Create</Link></li>
                        <li><Link to="">Blog</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
    
    )
}
export default Header