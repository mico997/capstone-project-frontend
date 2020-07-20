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


            <div className="spacer">
                
            </div>

            <Body/>


            <div className="footer">


                <h2>This is the footer!!</h2>

                <div class="copyright-wrapper">
                    &copy; 2020 Mask4All &#124; All rights reserved
                </div>



            </div>



        </div>

    )
   }
}