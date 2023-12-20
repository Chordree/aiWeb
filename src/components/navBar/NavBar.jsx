import { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navBar.css'
import logo from '../../assets/logo.svg'

const Menu = ()=> (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatAi">What is GPTX</a></p>
    <p><a href="#possibility">Abbey's AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Latest</a></p>
  </>
)


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='ai__navbar'>
          <div className='ai__navbar-links'>
            <div className='ai__navbar-links_logo'>
              <img src={logo} alt="navLogo" />
            </div>
            <div className='ai__navbar-links_container'>
              <Menu/>
            </div>
          </div>
          <div className='ai__navbar-sign'>
              <p> Log in</p>
              <button> Sign up </button>
          </div>
          <div className='ai__navbar-menu'>
              {toggleMenu ?
                <RiCloseLine color='white' size={27} onClick={()=> setToggleMenu(false)}/>:
                <RiMenu3Line size={27} color='aliceblue' onClick={()=> setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className='ai__navbar-menu_container scale-up-center'>
                <div className='ai__navbar-menu_container-links'>
                  <Menu/>
                </div>
                <div className='ai__navbar-menu_container-links-sign'>
                  <p> Log in</p>
                  <button> Sign up </button>
                </div>
              </div>
            )}
          </div>
        </div>
    )
  }
  
  export default Navbar

// make a menu componet later on 
// check out svg link below later on
//http://www.w3.org/2000/svg