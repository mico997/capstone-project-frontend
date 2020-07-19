import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navigation (props) {
   return (
       <div>
           <div>
               <NavLink exact to="/">
                   Home
               </NavLink>
           </div>

           <div>
               <NavLink to="/about">
                   About
               </NavLink>
           </div>
           <div>
               <NavLink to="/electronics">
                   Electronics
               </NavLink>
           </div>
           <div>
               <NavLink to="/n95mask">
                   N95 Mask
               </NavLink>
           </div>
           <div>
               <NavLink to="/login">
                   Login
               </NavLink>
           </div>
           <div>
               <NavLink to="/register">
                   Register
               </NavLink>
           </div>
           <div>
               <NavLink to="/cart">
                   Cart
               </NavLink>
           </div>
           <div>
               <NavLink to="/my-account">
                   My-Account
               </NavLink>
           </div>
           <div>
               <NavLink to="/notifications">
                   Notification
               </NavLink>
           </div>
           <div>
               <NavLink to="/sell">
                   Sell
               </NavLink>
           </div>
           
       </div>
   )
}