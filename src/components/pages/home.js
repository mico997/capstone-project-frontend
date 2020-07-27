import React, { Component } from 'react';
import Body from "../in-page-Components/home-body";


import Carousel from "../in-page-components/carousel/carousel";


export default class Home extends Component {
    
    
   render() {
    return (
        <div>
            <h1>Home</h1>
            <Carousel />

            <Body />
            
        </div>
    )
   }
}