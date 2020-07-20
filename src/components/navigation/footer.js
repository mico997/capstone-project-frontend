import React from 'react'
import { NavLink } from "react-router-dom";


export default function Footer() {
   return (
        <div className="footer-wrapper">
            <div className="footer-nav-wrapper">
                <div className="footer-nav-links">
                    <NavLink exact to="/" activeClassName="active-nav-link">
                        Home
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/about" activeClassName="active-nav-link">
                        About
                    </NavLink>
                </div>
                
                <div className="footer-nav-links">
                    <NavLink to="/electronics" activeClassName="active-nav-link">
                        Electronics
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/n95mask" activeClassName="active-nav-link">
                        N95 Mask
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/cart" activeClassName="active-nav-link">
                        Cart
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/my-account" activeClassName="active-nav-link">
                        My-Account
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/notifications" activeClassName="active-nav-link"> 
                        Notification
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/sell" activeClassName="active-nav-link">
                        Sell
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/login" activeClassName="active-nav-link">
                        Login
                    </NavLink>
                </div>

                <div className="footer-nav-links">
                    <NavLink to="/register" activeClassName="active-nav-link">
                        Register
                    </NavLink>
                </div>
            </div>

        
            <div className="footer">
                <h2>This is the footer!!</h2>
                <div class="copyright-wrapper">
                    &copy; 2020 Mask4All &#124; All rights reserved
                </div>
            </div>
        </div>
   )
}