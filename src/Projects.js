import './App.css';
import './media.css';
import React,{useState} from 'react';
import Nav from "./Nav";
import Tile from './Tile.js'
import icon from './web-development.png';
import { Helmet } from 'react-helmet';
import spelling from './images/spelling-bee.png';
import map from './images/map.png';
import gym from './images/gym.png';
import blocker from './images/blocker.png';
import dictionary from './images/dictionary.png';
import pingPong from './images/ping-pong.png';
import diary from './images/diary.png';
import bookStore from './images/book-shop.png';



function Projects(){



  return(
    <div>

      <body>
      <div className="logo">
        <h3 className="projects-head">Projects</h3>
      </div>


      <div>
        <Tile src={map} info={"Map "}/>

        <Tile src={gym}
          info={"Gym Management System "}
           projectName = {<h2>Gym Management system</h2>}
           moreInfo={<p>This was a project written in C++. The system is a simple gym Management allowing the user to sign in , add , remove , update a memeber.Members can also book one of the gym's facilities.The program makes use of a MYSQL database to store all the information. It is a command line project.<br/>
           The gym icon used was taken from:<a href="https://www.flaticon.com/free-icons/gym" title="gym icons">Gym icons created by Freepik - Flaticon</a><br/>
           If you would like to see the code for this project ...<a href="https://github.com/Stephen-Terera/MyGym">Click here </a>
            </p>}
         />

         <Tile src={spelling}
            info={"Spelling Game "}
            projectName={<h2> Spelling Game</h2>}
            moreInfo ={<p> This project was written in Python.This is an educational spelling game for children. The child which is the user will hear a word. The child will then have to
              input the spelling of the word. Get it wrong and the word is repeated. Get it correct and the program will move onto the next word.At any point the child can see the correct
              spelling of the word.I submitted this project as part of my first term project for university and received a good grade for it as well. Although not complicated I feel
              the project helped me grasp the concepts of coding. The game could have been improved by being a GUI game but that could be improvement for another time.<br/>
               The spelling bee icon was taken from: <a href="https://www.flaticon.com/free-icons/bee" title="bee icons">Bee icons created by Freepik - Flaticon</a><br/>
               To see the code you may:<a href="https://github.com/Stephen-Terera/SpellingGame"> Click here</a>
              </p>}
         />

         <Tile src={blocker}
           info={"Website blocker "}
           projectName={<h2>Website blocker</h2>}
           moreInfo={<p> This project was written in Python.The website blocker takes a website that the user wants to set aside or not use for a particular amount of
             time. No matter what browser is used that selected website or websites will not be able to be accessed. This program could be able to help with
             productivity similar to how the focus setting on iphones work. The program was written on and for a windows pc , I did not have the chance to test it
             on a Mac or Linux device.The program makes use of the admininstrator proviledges on a windows device.<br/>
             The blocker icon was taken from: <a href="https://www.flaticon.com/free-icons/blocker" title="blocker icons">Blocker icons created by Smashicons - Flaticon</a><br/>
             The code for the project can be <a href="https://github.com/Stephen-Terera/websiteBlocker"> seen here </a>
              </p>}
         />

         <Tile src ={dictionary}
            info={"Dictionary"}
            projectName ={<h2> Dictionary</h2>}
            moreInfo={<p> The project was written in Python.The program makes use of a json file used as database with words and their meaning. The user will be able to enter
              a word and the program will return the meaning of that word.If a word is entered and it is incorrectly typed in the program will be able to make a suggestion as
              to what the word may be.Not all the words in the dicitonary are actually part of the database as this was a project to work on my skills rather than to make a
              commercial working dicitonary application.<br/>
              The dictionary icon was taken from:<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon.</a><br/>
              The code for the project can be <a href="https://github.com/Stephen-Terera/Dictionary"> seen here.</a>
              </p>}
         />

         <Tile src={pingPong}
            info={"Ping Pong"}
            projectName={<h2> Ping Pong Game </h2>}
            moreInfo = {<p>This project was written in GDScript. This was an attempt to start game developing. I read that Godot was a good place to start and the resources for
              this project were taken from a Godot course. The course was a bit outdated and required me to read and understand GDscript.The game is a classic ping pong game with the
              ball being hit from one side to another until the one player misses the ball and a point is awarded. The game is a two player game with one player using the direction arrow
              keys and the other player using letter keys A and W.<br/>
              The ping pong game icon was taken from:<a href="https://www.flaticon.com/free-icons/ping-pong" title="ping pong icons">Ping pong icons created by Freepik - Flaticon</a><br/>
              To code for the project can be <a href="https://github.com/Stephen-Terera/pingPong"> seen here.</a>
              </p>}
         />

         <Tile src={diary}
             info={"Journal Website"}
             projectName ={<h2> Journal Website</h2>}
             moreInfo={<p> This website was made using simple HTML and CSS. I used it to document the extra-curricular activites that I took part in during my first term at
               university. I actually handed in this website as part of one of my modules that dealt with individual development and the aim of the module was to push us to develop
               ourselves as individuals outside the lecture theatres. I completed about 20+ hours of individual development in the first term and was awarded a first for
               the module.<br/>
               The journal/ diary icon was taken from: <a href="https://www.flaticon.com/free-icons/journal" title="journal icons">Journal icons created by Freepik - Flaticon</a><br/>
               The  code for this website can be <a href="https://github.com/Stephen-Terera/JournalWebsite"> seen here </a>
               </p>}
         />

         <Tile src={bookStore}
            info={"Book store"}
            projectName = {<h2> Book Store</h2>}
            moreInfo = {<p> This was a project written in python and used the tkinter GUi framework.The program makes use of a database that stores information on a particular
              book such as name, title, year and ISBN. The user of the program will be able to perform functions such as adding a new book to the collection or removing one.
              You will also be able to search for a book using one of the fields provided.
              </p>}
         />












      </div>

      </body>

    </div>

  )
}
export default Projects;
