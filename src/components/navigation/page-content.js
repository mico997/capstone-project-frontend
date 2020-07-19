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
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
               <Route exact path="/cart" component={Cart} />
               <Route exact path="/my-account" component={Account} />
               <Route exact path="/notifications" component={Notifications} />
               <Route exact path="/sell" component={Sell} />
               <Route exact path="/about" component={About} />
               <Route exact path="/electronics" component={Electronics} />
               <Route exact path="/n95mask" component={N95Mask} />
           </Switch>
           
       </div>
   )
}