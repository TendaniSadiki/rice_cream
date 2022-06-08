import "./home.css";
import {CgQr} from 'react-icons/cg';
import {CgBookmark} from 'react-icons/cg';
import {CgCamera} from 'react-icons/cg';
import {CgAdd} from 'react-icons/cg';


export default function Home(){

    
    return(
         
        <div className="page">
        <br></br>
        <br></br>
        <br></br>
        <div className='leftContent'>
                 
        </div>
        <div className="contentOver">
                <div className="circleContent">

                </div>
        </div>
        <div className="homeContentRight">
            <div className="centeredContent">
            <h1>Rice Cream</h1>
            <p>
                Rice Extract Moisturing Cream with Organic Evening Primrose, Rice Bran Oil, <br></br>Shea Butter and Rice Callus Extract 80g.
            </p>
            <div className="priceContent">
            <h3>$19,00</h3>
            <span><i><CgQr/></i><small>Add discount code</small></span>
            </div>
            <div className="detailContent">
                <ul>
                    <li><span>Details</span></li>
                    <li><span>Ingredients</span></li>
                    <li><span>Direction</span></li>
                </ul>
            </div>
            <div className="bottomContent">
                <div className="leftBottom">
                <h1>I'm left</h1>
                </div>
                <div className="rightBottom">
                    <h1>I'm right</h1>
                </div>
            </div>
            </div>
        <div className="homeContentRightTwo">
            <ul>
                <li className="rightItems"><span><i><CgBookmark/></i><p>Save</p></span></li>
                <li className="rightItems"><span><i><CgCamera/></i><p>Intro</p></span></li>
                <li className="rightItems"><span><i><CgAdd/></i><p>Purchase</p></span></li>
            </ul>
            <ul>
                <li className="overRall"></li>
            </ul>
        </div> 
        </div>  
        
            
           
        </div>
    );
}