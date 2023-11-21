import { SideNav } from "../Components/SideNav"
import { Topnav } from "../Components/Topnav"

export const  WatchList = () => {

    return (
        <div>
            <SideNav/>
            <Topnav/>
            <div className="main">
                <h3>WatchList Page</h3>
            </div>
        </div>
    )
}