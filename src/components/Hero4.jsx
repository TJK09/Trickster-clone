import React from 'react'
import Content1 from "../assets/Content1.jpg";
import "../Styles/Hero4.css";

export const Hero4 = () => {
  return (
    <div>
         <div className="top">
          <h4>
            TAKE A PEEK TO THE
          </h4>
          <h1>
            HELMET FEATURES
          </h1>
          <hr />
        </div>
        <div className="split-box">
          <div className="first">
            <div className="box">
                <h2>
                    <i class="bi bi-check2"></i>
                    Ultra Dubarability
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, deleniti assumenda saepe dolore.</p>
            </div>
            <div className="box">
                <h2>
                    <i className="bi bi-check2"></i>
                    Water Resistant
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, deleniti assumenda saepe dolore.</p>
            </div>
            <div className="box">
                <h2>
                    <i className="bi bi-check2"></i>
                    Super Comfort
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, deleniti assumenda saepe dolore.</p>
            </div>
            <div className="box">
                <h2>
                    <i className="bi bi-check2"></i>
                    Special Designs
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, deleniti assumenda saepe dolore.</p>
            </div>
          </div>
          <div className="second">
            <div className="image">
              <img src={Content1} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Hero4