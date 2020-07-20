import React, { Component } from 'react'

import Body from "./home-body";

export default class Home extends Component {
   render() {
    return (
        <div className="main-carousel-wrapper">
            <h1>Home</h1>

            <div className="carousel-wrapper">
                <p>Leave this space empty for carousel!</p>
            </div>



            <Body/>


            <div className="footer">


                <h2>This is the footer!!</h2>



            </div>



        </div>

    )
   }
}