import React from 'react';
import { Link } from 'react-router-dom';
const Menu=()=>{
   
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
       
 <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
              <Link to='/' className="nav-link" aria-current="page" >
              Dashboard
              </Link>
          </li>
 
          <li className="nav-item">
              <Link to='/categorie' className="nav-link" aria-current="page" >
                Les categories
              </Link>
          </li>
          
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Les marchandises</span>
        </h6>
        
          <li className="nav-item">
              <Link to='/marchandise/ajouter' className="nav-link" aria-current="page" >
                Ajouter 
              </Link>
          </li>

          <li className="nav-item">
              <Link to='/marchandise/update' className="nav-link" aria-current="page" >
                Metre a jour  
              </Link>
          </li>
       
      </div>
    </nav>
        
       
    </nav>
  );

}

export default Menu;
