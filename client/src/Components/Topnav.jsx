import { UserAuth } from "../UserContext"
import {  useNavigate } from "react-router-dom"

export const Topnav = (props) => {

    const {user,logout} = UserAuth()
    const navigate = useNavigate()

    const signout = async () =>{

        try{
            await logout()
            navigate("/login")
            console.log("You are logged out")
        }catch (e){
            console.log(e.message)
        }
    }
    
    return (
        <div>
            <div className="topnav">
                <ul>
                    <div className="searchcomp">
                        <input type="text" className="search" placeholder="Search..."
                        onChange={props.onChange}/>
                    </div>
                    <li><button onClick={signout} className="logout">logout</button></li>
                </ul>
               
            </div>
        </div>
    )
}