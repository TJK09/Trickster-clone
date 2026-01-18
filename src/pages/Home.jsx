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
import letter from '../components/letter.jsx';

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
    <div className="bg-brand h-32 py-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
    
    {/* Left text */}
    <div className="text-white text-center md:text-left">
      <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
      <p className="mt-2 text-lg">Get updates directly to your inbox!</p>
    </div>

    {/* Right input + icon */}
    <div className="flex items-center bg-white rounded overflow-hidden shadow-md">
      <input
        type="email"
        placeholder="Enter your email here"
        className="px-4 py-2 text-black focus:outline-none"
      />
      <button className="px-4 py-2 bg-[#Fa4315] text-white flex items-center justify-center border-2 w-full h-32">
        <i className="bi bi-envelope-at"></i>
      </button>
    </div>

  </div>
</div>

    </>
  )
}
export default Home