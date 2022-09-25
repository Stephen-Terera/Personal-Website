import React from "react";
import calculator from "./images/calculator.png"
import gym from "./images/gym.png";
import blocker from "./images/blocker.png";
import dictionary from "./images/dictionary.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function CarouselComponent() {
    return (
      <div className="carousel-wrapper">
         <Carousel infiniteLoop useKeyboardArrows autoPlay ariaLabel showThumbs={false} showIndicators = {false}>
             <div>
                 <img src={calculator}/>
                 <p className = "caption" >Calculator Desktop App</p>
             </div>
             <div>
                 <img src= {gym}/>
                  <p className="caption">Gym Management System</p>
             </div>
             <div>
                 <img src= {blocker}/>
                  <p className="caption">Website blocker</p>
             </div>
             <div>
                 <img src= {dictionary}/>
                  <p className="caption">Dictionary</p>
             </div>
         </Carousel>
     </div>
    );
}
