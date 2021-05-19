import React, {useState}from 'react'
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from 'react-router-dom';


function Login() {
    const history=useHistory("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [number, setNumber] = useState("")

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }


    const register = e => {
        e.preventDefault();

       auth.createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           if(auth){
               history.push("/home")
           }
          alert("Account Created")
       }
       )
       .catch(error => alert(error.message))
}

    return (
        <div className="loginn">
        <div className="admin_login">
        <h1>Admin</h1>
        </div>
        <div className="login_container">
          <div className="login__containerForm">
            <h1>Sign-in</h1>
            <form>
           
                    <h3>E-mail</h3>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h3>Mobile Number</h3>
                    <input type="tel" value={number} onChange={e=>setNumber(e.target.value)}/>

                    <h3>Password</h3>
                    <input type='password'  value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}  className="login_button">Sign In</button>
                    
                    <button type='submit'  onClick={register} className="createaccount_button">Create New Account</button>
                </form>

        </div>
        </div>
        </div>
    )
}

export default Login
