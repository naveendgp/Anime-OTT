import {Link, useNavigate} from 'react-router-dom'
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from 'react'
import { UserAuth } from '../UserContext'

export const  Signin = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] =  useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const {createUser} = UserAuth(  )

    const Signup = async (e) => {
    
        try{
           await createUser(email,password)
           navigate("/")
        }
        catch (e){
            console.log(e.message)
            setError(e.message)
        }

    }
    return (
        <div className="signdiv">
            
            <h4 style={{color:'gray',marginTop:'10px'}}>Already a member? <Link to='/login'>login</Link></h4>

            <div className="signupinput">
           

            {/* input */}
            <div className="name">
            <div className="nameContainer"><input placeholder='First Name' type="text" className="first"   /></div>
             <div className="nameContainer"><input type="text" placeholder="Last Name" className="last"  /></div>
            </div>
                <div className="emailpass">
                <div className="emailContainer"><input type="text" placeholder="UserName" onChange={ e => (setEmail(e.target.value))} className="emailid" value={email} defaultValue='' /></div>
                <div className="emailContainer"><input type="password" placeholder="Password" onChange={ e => (setPassword(e.target.value))} className="emailid" value={password}  defaultValue='' /></div>
        </div>
        </div>
        <div>
        <button className="createacc" onClick={Signup}>Create account</button>

        <h3 style={{marginLeft:'135px',marginTop:'20px'}}>Other Credentials</h3>
        </div>

        <div className="othercred">
        </div>
        </div>
  )
}
    
