import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';
import logo from '../assets/Logo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () =>{

        setIsOpen(!isOpen);
    }
    
  return (
    <div className='navbar'>
        <div className="starter">
            <div className="nav-icons">
                <ul className="actions-list-left">
                    <li className="action-list-item">
                        <div className="social-link ">
                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </li>
                    <li className="action-list-item">
                        <div className="social-link">
                            <a href="">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </div>
                    </li>
                    <li className="action-list-item">
                        <div className="social-link">
                            <a href="">
                                <i className="bi bi-google"></i>
                            </a>
                        </div>
                    </li>
                    <li className="action-list-item">
                        <div className="social-link">
                            <a href="">
                                <i className="bi bi-vimeo"></i>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="actions-list-left">
                    <li className="action-list-item">
                        <a href="">
                            <span className="text-4xl">ENG</span>
                        </a>
                    </li>
                    <li className="action-list-item">
                        <a href="">
                            <span className="text-4xl">USD</span>
                        </a>
                    </li>
                    <li className="action-list-item">
                        <a href="">
                            <span className="text-4xl">MY ACCOUNT</span>
                        </a>
                    </li>
                    <li className="action-list-item">
                        <a href="">
                            <span className="text-4xl">WISHLIST</span>
                        </a>
                    </li>
                    <li className="action-list-item">
                        <a href="">
                            <span className="text-4xl">LOGOUT</span>
                        </a>
                    </li>
                    <li className="actions-list-item">
                        <form action="" className="search-bar">
                            <input type="text" placeholder='Search your Products here' />
                            <button className="search-buttons">
                                <i className='bi bi-search'></i>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <header className='navbar-wrapper'>
            <nav className='container  bg-white mx-auto flex items-center justify-between px-6 py-4 '>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <Link to='home'>HOME</Link>
                        </li>
                        <li>
                            <Link to='home'>ABOUT</Link>
                        </li>
                        <li>
                            <Link to='home'>OUR BLOG</Link>
                        </li>
                        <li>
                            <Link to='home'>FEATURES</Link>
                        </li>
                        <li>
                            <Link to='home'>CONTACTS</Link>
                        </li>
                    </ul>
                    <div className='cart-icon'>
                        <i className='bi bi-cart'></i>
                    </div>
                    
            </nav>
        </header>
    </div>
  )
}
export default Navbar