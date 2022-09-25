import React,{useState} from 'react';
import map from './images/map.png';
import Popup from './Popup';

function Tile(props){

  const [isOpen, setIsOpen] = useState(false);

 const togglePopup = () => {
   setIsOpen(!isOpen);
  }



    return(
      <div className="tile">

        <img src={props.src} className="tile-image" />
        <p className="write-up"> {props.info}<br/>
        <input  type="button" className="popup-button" value="Read more"  onClick={togglePopup} />
        </p>
        {isOpen && <Popup
          content={<>
       <img src={props.src} className = "popup-image" /><br/>
       <b className = "Tile-header">{props.projectName}</b>
       <p className = "more-info">{props.moreInfo}</p>
     </>}
     handleClose={togglePopup}
     />}
      </div>

    )

}
export default Tile;
