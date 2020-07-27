import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";




import Navigation from "./navigation/navigation";
import Content from "./navigation/nav-link-routes";
import Footer from "./navigation/footer";

library.add(faChevronLeft, faChevronRight)


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

          

          <Footer />
          
        </BrowserRouter>
      </div>
    );
  }
}


