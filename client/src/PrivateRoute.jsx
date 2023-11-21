import { Navigate } from "react-router-dom";
import { UserAuth } from "./UserContext";

const PrivateRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user){
        return <Navigate to="/Signin"/>
    }

    return children
}

export default PrivateRoute