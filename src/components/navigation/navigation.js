import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navigation() {

   return (
       <div className="nav-wrapper">
           <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="active-nav-link">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about" activeClassName="active-nav-link">
                        About
                    </NavLink>
                </div>
                
                

                <div className="nav-link-wrapper">
                    <NavLink to="/n95mask" activeClassName="active-nav-link">
                        N95 Mask
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/cart" activeClassName="active-nav-link">
                        Cart
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink to="/login" activeClassName="active-nav-link">
                        Login
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/register" activeClassName="active-nav-link">
                        Register
                    </NavLink>
                </div>
           </div>

           <div className="right-side">

               <div>
                   <button>Sign Up</button>
               </div>

               <div>
                   <button>Log In</button>
               </div>

           </div>
        </div>
    )
}