import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home"
import Auth from "../auth/auth";
import Register from "../auth/register";
import Cart from "../authpages/cart";
import About from "../pages/about";
import N95Mask from "../pages/n95mask";




export default function Content() {
   return (
       <div>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route  
                    path="/login" 
                    render={props => (
                        <Auth 
                            {...props}
                            handleSuccesfulLogin={props.handleSuccesfulLogin}
                            handleUnSuccesfulLogin={props.handleUnSuccesfulLogin}
                        />
                    )} 
                    />
               <Route  path="/register" component={Register} />
               <Route  path="/cart" component={Cart} />
               <Route  path="/about" component={About} />
               <Route  path="/n95mask" component={N95Mask} />
           </Switch>
           
       </div>
   )
}