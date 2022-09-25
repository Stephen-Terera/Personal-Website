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
import Home from './Home.js';
import AboutMe from './AboutMe.js';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Stephen Terera</title>
        <link rel="icon" href={icon}/>
      </Helmet>
      <body>

        <Router>
        <Nav />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
        </Routes>
        </Router>

        <div>
          <Footer/>
        </div>


        <script type = "text/javascript" src="./Project-loop.js"></script>
      </body>
    </div>
  );
}

export default App;
