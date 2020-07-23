import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home"
import Login from "../auth/login";
import Register from "../auth/register";
import Cart from "../authpages/cart";
import Account from "../authpages/my-account";
import Notifications from "../authpages/notifications";
import Sell from "../authpages/sell";
import About from "../pages/about";
import Electronics from "../pages/electronics";
import N95Mask from "../pages/n95mask";




export default function Content() {
   return (
       <div>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route  path="/login" component={Login} />
               <Route  path="/register" component={Register} />
               <Route  path="/cart" component={Cart} />
               <Route  path="/my-account" component={Account} />
               <Route  path="/notifications" component={Notifications} />
               <Route  path="/sell" component={Sell} />
               <Route  path="/about" component={About} />
               <Route  path="/electronics" component={Electronics} />
               <Route  path="/n95mask" component={N95Mask} />
           </Switch>
           
       </div>
   )
}