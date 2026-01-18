import React from 'react'
import '../Styles/Divider.css'

export const Divider = () => {
  return (
    <div>
        <div className="main">
            <div className="red">
                <div className="content-main">
                <h1>25</h1>
                <h3>% <br />OFF</h3>
                <h2>CUSTOM <br /> HELMETS</h2>
                </div>
                <div className="content-second">
                <h3>REDEEMING THIS CODE: CPN8F529</h3>
                <p>* code valid untill 08/12/2015 only for custom products</p>
                <button>BUILD YOURS NOW!</button>
                </div>
            </div>
            <div className="black">
                <div className="content-main">
                <h1>SALE</h1>
                <h2>BLACK <br /> FRIDAY</h2>
                </div>
                <div className="content-second">
                <h3>AMAZING DISCOUNTS ALL DAY LONG!</h3>
                <p>* code valid untill 08/12/2015</p>
                <button>CHECK ALL DEALS!</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Divider;