import "../Styles/NavApp.css"

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
        <a href="/about">Nosotros</a>
      </li>
      <li>
        <a href="/contact">registro</a>
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