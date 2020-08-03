import React, { Component } from 'react'

import Cover from '../../../static/assets/N95-hard-mask.jpg'
import Cool from '../../../static/assets/n95-cool-mask.jpg'
import Yahh from '../../../static/assets/n95-yahh-mask.jpg'
import Unique from '../../../static/assets/n95-unique-mask.jpg'
import Special from '../../../static/assets/n95-unique-mask2.jpg'
import Respirator from '../../../static/assets/n95-respirator-mask.jpg'
import Coverage from '../../../static/assets/n95-respirator-face-mask.jpg'
import New from '../../../static/assets/n95-new-mask.jpg'
import Super from '../../../static/assets/n95-super-mask-set.jpg'
import CarouselMain from '../in-page-components/carousel/carousel'



const Spacer = () => {
    return (
        <div className="spacer">

        </div>
    );
};

const Images = [ 
    {
        photo: {Cover}
    }, 
    {
        photo: {Cool}
    }, 
    {
        photo: {Yahh }
    },
    {
        photo: {Unique }
    },
    { 
        photo: {Special }
    },
    {
        photo: {Respirator  }
    },
    {
        photo: {Coverage }
    }, 
    {
        photo: {New }
    }, 
    {
        photo: {Super }
    }

    
]


 
export default class Home extends Component {
    
    
   render() {
    return (
        <div className="main-carousel-wrapper">
            <h1>Home</h1>

            <CarouselMain />


            <Spacer />

            <div className="body-wrapper">
               <div className="body">
                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Cover} alt="N95 Hard Mask" />
                         </div>
                    </div>

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Cool} alt="N95 Hard Mask" />
                         </div>
                    </div>

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Super} alt="N95 Hard Mask" />
                         </div>
                         

                    </div>
               </div>

               <div className="spacer">

               </div>

               <div className="body">
                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Yahh} alt="N95 Hard Mask" />
                         </div>

                    </div>

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={New} alt="N95 Hard Mask" />
                         </div>

                    </div>

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Coverage} alt="N95 Hard Mask" />
                         </div>

                    </div>
               </div>

               <div className="spacer">

               </div>

               <div className="body">
                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Special} alt="N95 Hard Mask" />
                         </div>

                    </div>

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Respirator} alt="N95 Hard Mask" />
                         </div>

                    </div>
                    

                    <div className="square">
                         <div className="img-wrapper">
                              <img src={Unique} alt="N95 Hard Mask" />
                         </div>

                    </div>
               </div>
           </div>


            <Spacer />

        </div>

    )
   }
}
