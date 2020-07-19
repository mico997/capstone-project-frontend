import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


import Navigation from "./navigation/navigation";
import Content from "./navigation/page-content";


export default class App extends Component {
  constructor() {
    super()

     this.state = {
          LoggedInStatus: "NOT_LOGGED_IN"
      }
}
  render() {
    return (
      <div className='container'>
        {this.state.LoggedInStatus}
        <BrowserRouter>

          <h1>Welcome to My Shopping Website. Hope you get a great user-experience!</h1>
          <Navigation />
          <Content />
          
        </BrowserRouter>
        
      </div>
    );
  }
}


