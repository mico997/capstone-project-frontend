import React, { Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "./slider";

import Cover from '../../../../static/assets/N95-hard-mask.jpg'
import Cool from '../../../../static/assets/n95-cool-mask.jpg'
import Yahh from '../../../../static/assets/n95-yahh-mask.jpg'
import Unique from '../../../../static/assets/n95-unique-mask.jpg'
import Special from '../../../../static/assets/n95-unique-mask2.jpg'
import Respirator from '../../../../static/assets/n95-respirator-mask.jpg'
import Coverage from '../../../../static/assets/n95-respirator-face-mask.jpg'
import New from '../../../../static/assets/n95-new-mask.jpg'
import Super from '../../../../static/assets/n95-super-mask-set.jpg'



const landingData = [Cover, Cool, Yahh, Unique, Special, Respirator, Coverage, New, Super]


const LeftArrow = () => {

    return(
        <div className="backArrow">
            <FontAwesomeIcon icon="chevron-left" />
        </div>
    )
}


const RightArrow = () => {
    return(
        <div className="forwardArrow">
            <FontAwesomeIcon icon="chevron-right" />
        </div>
    )
}

export default class Carousel extends Component {
   constructor(props) {
        super(props)

         this.state = {
             activeIndex: 0,
             length: landingData.length
              
          }
   }

   goToPrevSlide() {
       let index = this.state.activeIndex;
       let length = this.state.length;

       if (index < 1) {
           index = length - 1;
       }
       else {
           index--;
       }
       this.setState({
           activeIndex: index
       });
   }

   goToNextSlide() {
       let index = this.state.activeIndex;
       let length = this.state.length;

       if (index === length -1) {
           index - 0
       }
       else {
           index++;
       }
       this.setState({
           activeIndex: index
       });
   }



   render() {
       return (
           <div className='main-carousel-wrapper'>

               <div className="carousel-wrapper">
                   <a className="carousel-arrow" onClick={this.props.goToPrevSlide}><LeftArrow /> </a> 

               <Slider />

                   <a className="carousel-arrow" onClick={this.props.goToNextSlide}><RightArrow /> </a>



               </div>

           </div>
       )
   }
}