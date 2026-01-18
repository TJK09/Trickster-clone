import React from 'react'
import "../Styles/Hover.css";

export const Hover = () => {
  return (
    <div>
        <div className="container">
            <div className="first1">
                <i class="bi bi-patch-check"></i>
                <h3>BEST QUALITY</h3>
                <h1>PRODUCTS</h1>
                <hr />
            <div className="overlay">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum officiis placeat illo.</p>
            </div></div>
            <div className="second2">
                <i class="bi bi-hand-thumbs-up"></i>
                <h3>ONE YEAR</h3>
                <h1>GURANTEE</h1>
                <hr />
            <div className="overlay">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum officiis placeat illo.</p>
            </div></div>
            <div className="third3">
                <i class="bi bi-rocket-takeoff"></i>
                <h3>WORLDWIDE</h3>
                <h1>SHIPPING</h1>
                <hr />
                <div className="overlay">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum officiis placeat illo.</p>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Hover;
