import React from 'react'
import "../Styles/Section4.css"
import Content1 from "../assets/Content1.jpg"
import Content2 from "../assets/Content2.jpg"
import Content3 from "../assets/Content3.jpg"

export const Section4 = () => {
  return (
    <div>
        <div className="con">
            <div className="con-1">
                <div className="one">
                    <h5>01.</h5>
                    <h1 className='font-bold text-5xl'>CHOOSE THE</h1>
                    <h1 className='font-bold text-5xl'>HELMET MODEL</h1>
                    <h4 className='text-2xl my-2.5'>Start the building Process</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat laborum obcaecati explicabo? Ullam quod ipsa, earum deserunt nisi beatae consequatur nulla at accusantium unde maiores ex qui, placeat neque!</p>
                </div>
                <div className="two">
                    <img src={Content1} alt="" />
                </div>
                </div>
                <div className="con2">
                <div className="two">
                    <img src={Content2} alt="" />
                </div>
                <div className="one">
                    <h5>02.</h5>
                    <h1 className='font-bold text-5xl'>CUSTOMIZE</h1>
                    <h1 className='font-bold text-5xl'>YOUR HELMET</h1>
                    <h4 className='text-2xl py-2.5'>Give your Style to the Product</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat laborum obcaecati explicabo? Ullam quod ipsa, earum deserunt nisi beatae consequatur nulla at accusantium unde maiores ex qui, placeat neque!</p>
                </div>
                </div>
                <div className="con3">
                <div className="one">
                    <h5>03.</h5>
                    <h1 className='font-bold text-5xl'>CONFIRM AND</h1>
                    <h1 className='font-bold text-5xl'>ADD TO CART</h1>
                    <h4 className='text-2xl py-2.5'>Finishing the Purchase</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat laborum obcaecati explicabo? Ullam quod ipsa, earum deserunt nisi beatae consequatur nulla at accusantium unde maiores ex qui, placeat neque!</p>
                </div>
                <div className="two">
                    <img src={Content3} alt="" />
                </div>
                </div>
            </div>
        </div>
  )
}
export default Section4;
