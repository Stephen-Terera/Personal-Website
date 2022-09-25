import './App.css';
import Home from './Home.js'
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <nav>
      <ul className="top-nav">
        <li class="first-nav"> <a href="./">Home</a></li>
        <li class="sec-nav"><a href="./Projects"> Projects</a></li>
        <li class="last-nav"><a href="./AboutMe">About me </a></li>
      </ul>
    </nav>
  )
}

export default Nav;
