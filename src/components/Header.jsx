import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
      const token = localStorage.getItem("token");     
      
    return (
        <>   
<header className="">
  <div className="nav-container">
    <div className="logo">
      <img src='/healthcarelogo.jpg' alt='healthcare logo' width='100px' height='80px'/>
    </div>

   
    <nav className="nav-links">
      <Link to="/" >Home</Link> 
      <Link to="/finddoctor">Find Doctor</Link> 
      <Link to="/about">About</Link>     
    </nav>

 
    <div className="nav-actions">
      <a href="#" className="btn outline">Create Account</a>
      {!token && <Link to="/login" className='btn outline'>Login</Link> }   
      <a href="#" className="btn admin">Admin Login</a>
    </div>

  </div>
</header>

        </>
    )
}

export default Header
