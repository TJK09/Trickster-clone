import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx';
import Home  from './pages/Home.jsx';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />

    </Routes>
    </>
  )
}

export default App
