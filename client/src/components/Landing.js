import React, { useState } from 'react'
import '../App.css'



const Landing = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleUsernameChange(event){
    setUsername(event.target.value)
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }
  function handleConfirmChange(event){
    setConfirm(event.target.value)
  }
  
  function handleLoginSubmit(e){
    e.preventDefault()
    console.log("Yes!")
    setUsername("")
    setPassword("")
    setConfirm("")
  }
  
  return (
    <div className="login">
      <h1>Sign Up for Readit!</h1>
      <form onSubmit={handleLoginSubmit}>
        <label for="email"><b>Email: </b></label>
        <input type="text" placeholder="Enter Email" value={username} onChange={handleUsernameChange} id="email" required></input>
        <br/>
        <br/>
        <label for="psw"><b>Password: </b></label>
        <input type="text" placeholder="Enter Password" value={password} onChange={handlePasswordChange} id="psw" required></input>
        <br/>
        <br/>
        <label for="psw-repeat"><b>Confirm Password: </b></label>
        <input type="text" placeholder="Confirm Password" value={confirm} onChange={handleConfirmChange} id="psw-confirm" required></input>
        <br/>
        <p>By creating an account you agree to our Terms & Privacy</p>
        <button type="submit" className="registerbtn">Register</button>
      </form>

      <div className="signin">
        <p>Already have an account? Sign in</p>
      </div>
    </div>
  )
}

export default Landing