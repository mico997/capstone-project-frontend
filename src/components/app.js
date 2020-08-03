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
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
    this.handleUnSuccesfulLogin = this.handleUnSuccesfulLogin.bind(this)
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Navigation />
          <Content />


          

          <Footer />
          
        </BrowserRouter>
      </div>
    );
  }
}


