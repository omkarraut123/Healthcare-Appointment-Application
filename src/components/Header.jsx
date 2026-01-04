import React from 'react'


function Header() {
    return (
        <>   
<header className="">
  <div className="nav-container">
    <div className="logo">
      <img src='/healthcarelogo.jpg' alt='healthcare logo' width='100px' height='80px'/>
    </div>

   
    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="#">Find Doctor</a>
      <a href="#">About</a>
    </nav>

 
    <div className="nav-actions">
      <a href="#" className="btn outline">Create Account</a>
      <a href="#" className="btn outline">Login</a>
      <a href="#" className="btn admin">Admin Login</a>
    </div>

  </div>
</header>

        </>
    )
}

export default Header
