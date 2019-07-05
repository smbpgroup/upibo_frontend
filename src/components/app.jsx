import React from 'react';
import { renderRoutes } from 'react-router-config'
import Header from './header.jsx'
import Footer from './footer.jsx'
const App = (props) =>{
    const { route, classes, theme } = props;
    
    return(
        <div className="wrap-content">
            <Header />
            <div className="main-content">
                {renderRoutes(route.routes)} 
            </div>
            <Footer />
        </div>
    )
}
export default App