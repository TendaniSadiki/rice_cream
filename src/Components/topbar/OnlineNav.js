import React from 'react'
import './topbar.css'

/*Online Nav Bar*/
//Topbar Icons
import {NavLink} from 'react-router-dom'
import {CgArrowLeft} from 'react-icons/cg';
import {CgArrowRight} from 'react-icons/cg';
import {CgSearch} from 'react-icons/cg';
import {CgShoppingBag} from 'react-icons/cg';



function OnlineNav(props) {
    //Topbar navlinks Online
    return (
        <div>
            <div className="linksContainer">  
                <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><button><i> <CgArrowLeft/> </i></button></span>
                </NavLink>
                <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><button><i ><CgArrowRight/></i></button></span>
                </NavLink>
                <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><div><input type="search" placeholder="Search"></input><i><CgSearch/></i></div></span>
                </NavLink>
                <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><div><i ><CgShoppingBag/></i></div></span>
                </NavLink>
                <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><div><i class="bi bi-grid"></i></div></span>
                </NavLink>
            
                   
            </div>
        </div>
    )
}

export default OnlineNav
