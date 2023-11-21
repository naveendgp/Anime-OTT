import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Topnav } from "../Components/Topnav";
import { SideNav } from "../Components/SideNav";
import { EpisodeList } from "../Components/episodelist"
import { Watchnext } from "../Components/whatchnext"

const Animecon = () => {

    const location = useLocation()
    
    return (
      <div>
        <SideNav />
        <Topnav />

        <div className="animecontent">
          <div className="videPlayer">
            <div>
              <ReactPlayer
                width={"900px"}
                height={"500px"}
                controls
                url={"https://youtu.be/VQGCKyvzIM4"}
              />
            </div>
            <div className="animeDesc">
              <div className="descriptionanime">
                <h1>{location.state.name}</h1>
                <ul style={{ display: "flex", marginTop: "20px" }}>
                  <h3>{location.state.desc}</h3>
                  <h3 style={{ marginLeft: "30px" }}>
                    {location.state.season}
                  </h3>
                </ul>

                <div style={{ marginTop: "10px" }}>
                  <p>
                    Ever since the death of his father, the burden of supporting
                    the family has fallen upon Tanjirou Kamado's shoulders.
                    Though living impoverished on a remote mountain, the Kamado
                    family are able to enjoy a relatively peaceful and happy
                    life
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <EpisodeList />
          </div>
        </div>
        <div>
          <Watchnext />
        </div>
      </div>
    );
}

export default Animecon