import React from "react";
import './Offers.css';
import exclusive_image from '../Images/exclusive_image.jpg';

const Offers = ()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exculsive</h1>
                <h1>Offers for you</h1>
                <p>Only on best sellers products</p>
                {/* <button>Check Now</button> */}
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers;