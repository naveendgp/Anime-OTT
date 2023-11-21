import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faHouse } from '@fortawesome/free-solid-svg-icons'
import { faClock,faCircleUser } from '@fortawesome/free-regular-svg-icons'




export const SideNav = () => {

    /* Icons */
    const home = <FontAwesomeIcon icon={faHome} size={"sm"}/>
    const homeout = <i class="bi bi-house"></i>
    const later = <FontAwesomeIcon icon={faClock} />
    const Trending = <FontAwesomeIcon icon={faFire} />
    const profile = <FontAwesomeIcon icon={faCircleUser}/>


    


    return(
        <div>   
            <div  style={{width: "5em" }} className="SideNav">
                <h3  style={{color:"Red"}}>Itachi</h3>
                <ul className="sideElements">
                    <Link to="/" className="link" >{home} </Link>
                    <Link to="/trending" className="link">{Trending} </Link>
                    <Link to="/watchList" className="link">{later} </Link>
                    <Link to="/watchList" className="link">{profile} </Link>
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    )
}