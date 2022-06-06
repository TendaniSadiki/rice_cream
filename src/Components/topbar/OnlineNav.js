import React from 'react'
import './topbar.css'

/*Online Nav Bar*/
//Topbar Icons
import {NavLink} from 'react-router-dom'
import {CgHome} from "react-icons/cg";
function OnlineNav(props) {
    //Topbar navlinks Online
    return (
        <div>
            <div className="linksContainer">  
                    <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><i><CgHome/>Home</i></span>
                    </NavLink>
                    <div id="horizontalScroll">
            <span><i class="fas fa-arrow-left" onclick="left()" id="scrollLeft"></i></span>
            <span><i class="fas fa-arrow-right" onclick="right()" id="scrollRight" ></i></span>
         </div>
            </div>
        </div>
    )
}

export default OnlineNav
