import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";


export const Cardmax = (props) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);




    const play = <FontAwesomeIcon icon={faPlay} />


    return (

            <div>
                
                    <div className="cardmax">
                    <img className="cardbanner" src={props.Bannerurl} alt="" />
                <div className="title">
                    <img className="cardlogo" src="https://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png" alt="" />
                    <h4>{props.name}</h4>
                    <div className='cardmaxDesc' style={{display:'flex'}}>
                        <li>{props.year} |</li>
                        <li> {props.seasons} |</li>
                        <li>{props.genre}</li>
                        
                    </div>
                    
                    <h5 style={{fontFamily:'Poppins'}}>{props.desc}</h5>
                    <div className="watchnow">
                     <button> <span>{play}</span> <p>Watch Now</p></button>
                    </div>
                </div>
                </div>
            
                
               
            
            </div>
    )
}

