import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


import Navigation from "./navigation/navigation";
import Content from "./navigation/nav-link-routes";
import Footer from "./navigation/footer";
import Body from "./pages/home-body";


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }
  
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          {this.state.loggedInStatus}
          <Navigation />
          <Content />



          <Body />


        


          <Footer />

          
        </BrowserRouter>
        
      </div>
    );
  }
}


