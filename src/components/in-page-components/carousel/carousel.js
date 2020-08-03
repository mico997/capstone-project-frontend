import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'






export default class CarouselMain extends Component {
   render() {
       return (
            <div className="carousel">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/41q3XfxpmzL._AC_UY218_.jpg"
                    alt="N95 Model 9502"
                    />
                    <Carousel.Caption>
                    <h3>N95 Model 9502</h3>
                    <p>N95 Model 9502 Protective mask</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.fishersci.com/TFS-Assets/CCG/Dentec-Safety/product-images/1-S-DN5.jpg-650.jpg"
                    alt="N95 Air Respirator"
                    />

                    <Carousel.Caption>
                    <h3>N95 Air Respirator</h3>
                    <p>N95 Air Respirator, filter included. Peace with every breath you take!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSckwwCP70zBKq9uRmNHOhkploq5AW4YGB60w&usqp=CAU"
                    alt="N95 Most effective"
                    />

                    <Carousel.Caption>
                    <h3>N95 Most effective</h3>
                    <p>N95 full face mask. Very effective. Minimal air ciriculation garantueed</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}   