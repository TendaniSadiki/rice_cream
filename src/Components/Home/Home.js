import "./home.css";
import More from "./more";
import {CgBookmark} from 'react-icons/cg';
import {CgCamera} from 'react-icons/cg';
import {CgAdd} from 'react-icons/cg';
import logo from '../images/logo.png';
import bottleImg from '../images/ricebottle.png';



export default function Home(){

    
    return(
         
        <div className="page">
        <br></br>
        <br></br>
        <br></br>
        <div className='leftContent'>
             <img className="logo" src={logo}></img>    
        </div>
        <div className="contentOver">
                <div className="circleContent">
                    
                </div>
                <img src={bottleImg} className="bottleImg" ></img>
        </div>
        <div className="homeContentRight">
           <More/>
        <div className="homeContentRightTwo">
            <ul>
                <li className="rightItems"><span><i><CgBookmark/></i><p>Save</p></span></li>
                <li className="rightItems"><span><i><CgCamera/></i><p>Intro</p></span></li>
                <li className="rightItems"><span><i><CgAdd/></i><p>Purchase</p></span></li>
            </ul>
            <ul>
                <li className="overRall">
                   
                </li>
            </ul>
        </div> 
        </div>  
        
            
           
        </div>
    );
}