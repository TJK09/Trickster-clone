import React from 'react'
import "../Styles/Latest.css"
import Content1 from "../assets/Content1.jpg";
import Content2 from "../assets/Content2.jpg";
import Content3 from "../assets/Content3.jpg";

const Latest = () => {
  return (
    <div>
        <div className="latest-container ">
            <div className="latest-main">
                <h4>THE TRICKSTER</h4>
                <h1>LATEST ARRIVALS</h1>
            </div>
            <div className="latest-second">
                <div className="latest1">
                    <div className="latest-img">
                    <img src={Content1} alt="" />
                    </div>
                    <h3>THE GOLDEN EAGLE</h3>
                    <h5>FOR EXTREME CONDITION</h5>
                    <div className="latest-pricing">
                        <ul>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star"></i></li>
                        </ul>
                        <h3>$140</h3>
                    </div>
                </div>
                 <div className="latest1">
                    <div className="latest-img">
                    <img src={Content2} alt="" /></div>
                    <h3>THE GOLDEN EAGLE</h3>
                    <h5>FOR EXTREME CONDITION</h5>
                    <div className="latest-pricing">
                        <ul>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star"></i></li>
                        </ul>
                        <h3>$140</h3>
                    </div>
                </div>
                 <div className="latest1">
                    <div className="latest-img">
                    <img src={Content3} alt="" /></div>
                    <h3>THE GOLDEN EAGLE</h3>
                    <h5>FOR EXTREME CONDITION</h5>
                    <div className="latest-pricing">
                        <ul>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star"></i></li>
                        </ul>
                        <h3>$140</h3>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Latest