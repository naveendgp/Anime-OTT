  import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {

    const[isHover,setHover] = useState(false)
    const navigate = useNavigate()

    const plus = <FontAwesomeIcon icon={faPlus} size="10xl"/>
    const play = <FontAwesomeIcon icon={faPlay} size="sm" />;
    const mouseEnter = () => {  
        setHover(true)
    }

    const mouseLeave = () => {
        setHover(false)
    }

    const Navigate = () => {
      navigate('/animecon',{state : {name:props.name,desc:props.desc,year:props.year,season:props.season}})
    }

    return (
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="card">
        {isHover ? (
          <div className="cardHover">
            <div>
              <img className="cardHoverPost" src={props.img} alt={props.alt} />
            </div>
            <div className="cardhoverwatch">
              <button onClick={Navigate}>
                <span>{play}</span> <span className="watchSpan">Watch Now</span>
              </button>
              <button  className="addlist">
                <span>{plus}</span>
              </button>
            </div>
            <div className="cardhoverdesc">
              <p>
                {props.year} <span>•</span>
              </p>
              <p>
                {props.season} <span>•</span>
              </p>
              <p>Drama</p>
            </div>
            <div className="hoverDesct">
              <h5>
                Tanjiro embarks upon a perilous journey to find a cure and
                avenge those he's lost.
              </h5>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <img className="cardPoster" src={props.img} alt={props.alt} />
            </div>

            <div className="cardDesc">
              <h3>{props.name}</h3>
              <h4>{props.secondname}</h4>
              <h5>{props.desc}</h5>
            </div>
          </div>
        )}
      </div>
    );
}