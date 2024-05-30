import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <div className="container">
            <div className='logo'>
                <img src="./public/cozy.svg" alt="" />
            </div>
            <ul className='links'>
                <li><Link to={"/"}>SHOP</Link></li> 
               <li><Link to={"/"}>COLLECTIVE</Link></li>  
               <li><Link to={"/"}>DESIGNERS</Link></li>  
                <li><Link to={"/"}>ABOUT US</Link></li> 
                <li><Link to={"/"}>CONTACT</Link></li> 
            </ul>
            <div className="icons">
                <div> <img src="./public/menu.svg" alt="" /></div>
              <div>  <img src="./public/search.svg" alt="" /></div>
            <Link to={"/cart"}>
            <div  className='cart'>   <img  src="./public/cart.svg" alt="" /></div>
            </Link>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar