import React from 'react'
import HeroSlider from '../components/HeroSlider';
import Navbar from '../components/Navbar.jsx';
import "../Styles/Home.css"
import Hero4 from "../components/Hero4.jsx";
import Hover from '../components/Hover.jsx';
import Section4 from '../components/Section4.jsx';
import Model from '../components/Model.jsx';
import Divider from '../components/Divider.jsx';
import Latest from '../components/Latest.jsx';
import logo from "../assets/Logo2.png";
import Visa from '../assets/Visa.png';
import Skrill from '../assets/Skrill1.png';
import western from '../assets/western.png';
import paypal from '../assets/Paypal.png';
import payoneer from '../assets/Payoneer.png';
import Discover from '../assets/Discover.png';

export const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSlider />
    <Model />
    <Hero4 />
    <Hover />
    <Section4 />
    <Divider/>
    <Latest/>
    <div className=" bg-[#Fa4315]  py-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6 ">
    

    <div className="text-white text-center md:text-left">
      <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
      <p className="mt-2 text-lg">Get updates directly to your inbox!</p>
    </div>


    <div className="flex items-center rounded overflow-hidden py-10">
      <input
        type="email"
        placeholder="Enter your email here"
        className="px-16 h-10 bg-white text-black focus:outline-none rounded-md"
      />
      <button className=" bg-[#Fa4315] text-white flex items-center justify-center">
        <i className="bi bi-envelope-at bg-wh"></i>
      </button>
    </div>

  </div>
</div>

    <footer>
      <div className="container flex flex-row flex-wrap justify-between items-start bg-gray-900 p-10 py-8 gap-8 max-md:flex-col max-md:items-center w-auto max-md:w-auto">

  {/* 1️⃣ Logo & Info */}
  <div className="flex flex-col gap-4 w-1/4 text-gray-500">
    <img src={logo} alt="Logo" className="h-32 object-contain" />
    <p className="text-gray-300">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptatum exercitationem rem.
    </p>
    <ul className="flex flex-col gap-2">
      <li className="flex items-center gap-2">
        <svg className="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span>568 The Bebop Avenue, CA</span>
      </li>
      <li className="flex items-center gap-2">
        <svg className="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <span>+923482081187</span>
      </li>
      <li className="flex items-center gap-2">
        <svg className="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <a href="mailto:info@tricksterhelmets.com">info@tricksterhelmets.com</a>
      </li>
    </ul>
  </div>

  {/* 2️⃣ Sitemap */}
  <div className="flex flex-col gap-4 w-1/6 text-gray-500">
    <h2 className="text-xl font-bold">SITEMAP</h2>
    <hr className="bg-[#fa4315] w-7 border-2 border-[#fa4315]" />
    <ul className="flex flex-col gap-2">
      {["Home","About US","Shop","Our Blog","Contact","Your Account","FAQs","Return Policy"].map((item)=>(
        <li key={item} className="flex items-center gap-1">
          <svg className="w-4 h-4 text-[#fa4315]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* 3️⃣ Company */}
  <div className="flex flex-col gap-4 w-1/6 text-gray-500">
    <h2 className="text-xl font-bold">COMPANY</h2>
    <hr className="bg-[#fa4315] w-7 border-2 border-[#fa4315]" />
    <ul className="flex flex-col gap-2">
      {["Shipping Policy","International Shipping","Affiliates","Our Sponsors","Privacy Policy","Terms and Conditions","Pay on Arrival"].map((item)=>(
        <li key={item} className="flex items-center gap-1">
          <svg className="w-4 h-4 text-[#fa4315]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* 4️⃣ Quick Contact */}
  <div className="flex flex-col gap-4 w-1/3">
    <h2 className="text-xl font-bold">QUICK CONTACT</h2>
    <hr className="bg-[#fa4315] w-7 border-2 border-[#fa4315]" />
    <p className="text-gray-500">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nihil sunt suscipit fuga sint, ut cupiditate delectus.
    </p>
    <form className="flex flex-col gap-3">
      <input type="email" placeholder="Email" className="bg-gray-700 rounded p-2" />
      <textarea placeholder="Message" className="bg-gray-700 rounded h-36 p-2"></textarea>
      <button className="bg-[#fa4315] rounded w-full h-10 font-bold">Send Message</button>
    </form>
  </div>
</div>

      <div className="footer-bottom flex max-md:flex-col  max-md:justify-center max-md:items-center  bg-gray-900 text-white w-full p-10 max-md:p-6">
        <h4 className='text-gray-300 text-xl font-bold pl-3 pt-3 max-md:p-2'>Payment Methods:</h4>
        <ul className='flex max-md:flex-col justify-evenly max-md:justify-center max-md:items-center w-full'>
          <li>
            <img src={paypal} alt="" className='w-20 h-20 object-contain'/></li>
          <li>
            <img src={western} alt="" className='w-20 h-20 object-contain' />
          </li>
          <li>
            <img src={Visa} alt="" className='w-20 h-20 object-contain' />
          </li>
          <li>
            <img src={payoneer} alt="" className='w-20 h-20 object-contain' />
          </li>
          <li>
            <img src={Discover} alt="" className='w-20 h-20 object-contain' />
          </li>
          <li>
            <img src={Skrill} alt=""  className='w-20 h-20 object-contain'/>
          </li>
        </ul>
      </div>
      <div className="final-layer flex max-md:flex-col bg-gray-700 justify-between max-md:justify-center">
        <div className="flex justify-center items-center pl-20">
          <h4 className='text-white'><span className='text-[#fa4315] font-bold'>THE TRICKSTER</span>|All rights Reserved 2026</h4>
        </div>
        <div className="flex pr-20 icons">
          <ul className='flex'>
            <li>
              <div className="w-10 h-10 border-l border-r  border-gray-500 flex justify-center items-center hover:bg-[#fa4315] transition-colors duration-300">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                </svg>
                </div></li>
            <li>
              <div className="w-10 h-10 border-l border-r border-gray-500 flex justify-center items-center hover:bg-[#fa4315] transition-color duration-300">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                      </svg></div>
            </li>
            <li>
              <div className="w-10 h-10 border-l border-r border-gray-500 flex justify-center items-center hover:bg-[#fa4315] transition-color duration-300">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
              </svg></div>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    </>
  )
}
export default Home