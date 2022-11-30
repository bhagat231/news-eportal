import React from 'react'
import Data from '../Data/Data'
import Home from '../Pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import Cat from '../Pages/Cat';
import Single from '../Pages/Single';


export default function Header() {
  return (
    <>

    <div className='container-fluid d-flex justify-content-around bg-dark text-white'>
      <div className='row '>
        <div>
        <p>२३ कात्तिक, २०७९Wednesday,&nbsp; &nbsp; November 9, 2022, 1:49 AM</p></div>
      </div>
      <div className='ab'>
      <ul>
            <li><i class="bi bi-facebook"></i></li>
            <li> <i class="bi bi-twitter"></i></li>
            <li> <i class="bi bi-youtube"></i></li>
            <li> <i class="bi bi-instagram"></i></li>
        </ul>

      </div>
    </div>
  
  <div className='container py-2 text-center'>
    <div className='row'>
    <img src={require('../assests/img/1.gif')} /> 
    </div>
   </div>

 <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid gap-5 px-5 ">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-center  mb-lg-0  ">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><img src={require('../assests/img/2.png')}/></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">आवरण</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">भिडियो</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ग्यालरी</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">नयाँसूचना</a>
        </li>
      </ul>
      <form className="d-flex px-5 " role="search">
        <input className="form-control me-2 rounded-pill bc  position-relative" type="search" placeholder  ="खोज्नुहोस्" aria-label="Search" /><button className='btn btn-danger rounded-circle ss'><i class="bi bi-search"></i></button>
        <button className="btn btn-outline-success bg-danger text-white px-3 " type="submit">ENGLISH</button>
      </form>
    </div>
  </div>
</nav>
<div className='sus'>
</div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        {Data.map((d)=>(
           <li className="nav-item">
           <Link className="nav-link" to={`/cat/${d.id}`}>{d.catName}</Link>
         </li>

        ))}
       
       </ul>
    </div>
  </div>
</nav>
<div className='sus'>
</div>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/details/:id" element={<Single />} />
      </Routes>




    </>
  )
}
