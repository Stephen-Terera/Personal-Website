import './App.css';
import './media.css';
import React from 'react';
import bitmoji from './unnamed.jpg';

function AboutMe(){
  return(
    <body>
      <img src={bitmoji} alt="Bitmoji" className="pic"/>
      <div className="aboutMe">
        <p className="bio">My name is Stephen Terera. I am a Zimbabwean student currently enrolled at Nottingham Trent University.
          After getting my degree I want to be a software engineer. This is why I am studying computer science. I have had a passion for
          computer science and all things computer science since high school and took it both at IGCSE and at A Level. I achieved an A grade for both.
          <br/> I created this website to showcase some of the projects I have made as part of my journey to becoming an I.T professional.

        </p>
      </div>
    </body>
  )
}
export default AboutMe;
