import React from 'react'
import {CgQr} from 'react-icons/cg';
function More() {
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
  )
}

export default More