import './App.css';
import './media.css';
import react from 'react';
import icon from './web-development.png';
import bitmoji from './unnamed.jpg';
import { Helmet } from 'react-helmet';
import CarouselComponent from "./components/Carousel/Carousel";
import Nav from "./Nav";
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route}   from 'react-router-dom';
import Projects from './Projects.js';


function Home(){
  return(
    <body>
      <div className="intro">
        <p className="intro-para">Hi!<br/> I'm Stephen. A computer science student and aspiring software engineer</p>
        <img src={bitmoji} alt="Bitmoji" className="pic"/>
      </div>
              <div className="project-demo">
                <p className="projects-head">Projects</p>
                <div className="carousel-wrapper">
                  <CarouselComponent />
                </div>
                <p className="See"><a href="/Projects" className="See">See more.... </a> </p>
              </div>


      </body>


  )
}
export default Home;
