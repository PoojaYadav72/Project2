 import { Link } from "react-router-dom"
 import "./NavbarStyle.css"

 import React from "react"

 export default function Navbar(){
     return(
        // <div classNameName="header">
        //     <Link to="/">
        //         <h1>Portfolio</h1>
        //     </Link>
        //     <ul classNameName="nav-menu">
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //             <Link to="/project">Project</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact">Contact</Link>
        //         </li>
        //     </ul>
        // </div>
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <a className="navbar-brand" href="/">Portfolio</a>

    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ml-2 ml-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
 </>
    )
}


