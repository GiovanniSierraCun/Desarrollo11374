import "../Styles/NavApp.css"

/*las  siguientes  importaciones son  para el  apuntamiento  en  la pagina*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import Registro from "../Registro/registroApp";
import LoginApp from "../Login/LoginApp";
import React from "react";




const NavApp =()=>{ 

    return(
        <>
           <nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="bi bi-house-dash">   
      Mi Lavanderia
    </a>
    
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">
        <i className="bi bi-house-dash"></i>    
        Servicios</a>
        
      </li>
      <li>
        <Link to="/FormApp">Pagina  de  prueba</Link>
      </li>
      <li>
        <Link to="/registro">Registro</Link>
      </li>
      <li>
          <Link to="/login">Iniciar Sesion</Link>
       </li>
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/cart" className="cart-icon">
     <i class="bi bi-briefcase"></i>
<i className="bi bi-person"></i>
      <span className="cart-count">Carrito</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="bi bi-person"></i>
    </a>
  </div>
</nav>
         
        
        
        
        
        </>        

    );


};

export default NavApp