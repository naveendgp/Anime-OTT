import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../UserContext"
import { useState } from "react"

export const  Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] =  useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const onSignin = async (e) => {
    
    try{

      await signIn(email,password)
      navigate("/")

    }catch (e){
      setError(e.message)
      console.log(e.message)
    }
  }


    return (
         <div className="signdiv">
     

      <h4 style={{color:'gray',marginTop:'10px'}}>Not a member? <Link to='/signin'>Create account</Link></h4>

      <div className="signupinput">

      

        <div className="emailpass">
          <div className="emailContainer"><input type="text" placeholder="Email" className="emailid" onChange={e => (setEmail(e.target.value))}   /></div>
          <div className="emailContainer"><input type="password" placeholder="password" className="emailid" onChange={e => (setPassword(e.target.value))}  /></div>
        </div>
      </div>
      <div>
       <button onClick={onSignin} className="createacc" >Sign in</button>

       <h3 style={{marginLeft:'135px',marginTop:'20px'}}>Other Credentials</h3>
       </div>

       <div className="othercred">
       </div>
    </div>
    )
}