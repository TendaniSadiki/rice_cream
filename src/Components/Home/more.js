import React , { useState } from 'react';
import {CgQr} from 'react-icons/cg';

import bottomPic from '../images/bottomflower.png';
import Details from "../details";
import Ingredient from "../method";
import Direction from "../direction";

function More() {

   const [activeBtn, setActiveBtn] = useState(0);
     const toogle=(index) =>{ 
       setActiveBtn(index)
    }
  return (
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
            <li onClick={()=>toogle(0)} className={activeBtn === 0 ? 'activebtn' : "activebtn2" }><span>Details</span></li>
            <li onClick={()=>toogle(1)} className={activeBtn === 1 ? 'activebtn' : "activebtn2" }><span>Ingredients</span></li>
            <li onClick={()=>toogle(2)} className={activeBtn === 2 ? 'activebtn' : "activebtn2" }><span>Direction</span></li>
        </ul>
    </div>
    <div className="bottomContent">
        <div className="leftBottom">
        <img src={bottomPic}></img>
        </div>
        <div className="rightBottom">
            {
                ( activeBtn === 0 ? <Details /> : activeBtn === 1 ? <Ingredient /> : <Direction /> )
            }
         
        </div>

    </div>
    </div>
  )
}

export default More