import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
            e.preventDefault();
            if(email === "") {
                alert("Please enter email.");
                return;
            }else if(password === ""){
                alert("Please enter password.");
                return;
            }else{
                if(email.toLocaleLowerCase() === "test@test.com" && password === "Demo@123"){
                    localStorage.setItem("token","#iT&*Hg12h4j133");
                    navigate("/");
                }else{
                    alert("Incorrect Credentials.")
                }
                
            }
    }

    return (
        <>
<div className="login-wrapper">
  <div className="login-card">

    <h2 className="login-title">Login</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email ID</label>
        <input type="email" placeholder="Enter email" name='email' value={email} onChange={ (e) => setEmail(e.target.value)}/>
      </div>

      
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" name='password' value={password} onChange={ (e) => setPassword(e.target.value)}/>
      </div>
     
      <button className="login-btn" type='submit'>Login</button>
    </form>

  </div>
</div>

        </>
    )
}

export default Login
