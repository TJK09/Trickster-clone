import React from 'react'
import '../Styles/Model.css';
import Content1 from "../assets/Content1.jpg";
import Content2 from "../assets/Content2.jpg";
import Content3 from "../assets/Content3.jpg";
import hero3 from "../assets/hero3-img.png";
import img from '../assets/hero3-alt.jpg';

export const Model = () => {
  return (
    <div>
    <div className="head">
      <h1>
        Standout Models
      </h1>
    </div>
    <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-4 p-4 content">
      <div className="content-writing">
        <img src={Content1} alt="" className='w-full h-auto rounded-lg grid-item'/>
        <h1>
          GladiatorX
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        </div>
        <div className="content-writing">
        <img src={Content2} alt="" className='w-full h-auto rounded-lg grid-item'/>
        <h1>
          Fire
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        </div>
        <div className="content-writing">
        <img src={Content3} alt="" className='w-full h-auto rounded-lg grid-item'/>
        <h1>
          DragonV
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </p>
          </div>
      </div> 
      <div className="hero3">
        <h4>
          MULTIPURPOSE PRODUCT BUILDER
        </h4>
        <h1>
          WELCOME TO THE TRICKSTER
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam harum reprehenderit atque. Odit, ratione in. Dolore praesentium, incidunt corrupti dignissimos cupiditate id eius quae perspiciatis alias voluptate expedita vero nesciunt.
        </p>
        <div className="hero3-img">
          <img src={hero3} alt="ALT" />
        </div>
      </div>
      <div className="crafted">
        <div className="crafted-first">
         <h1>
            CHECK OUR <span>CRAFTED ITEMS</span> 
          </h1>
          <h3>
            Carefully Designed by Experted Artist
          </h3>
        </div>
        <div className="crafted-second">
          <button>START BROWSING
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Model;
