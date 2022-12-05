import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

// import { idMenuContext } from '../../App';
// import { chartContext } from '../../App';


const NavBar = () => {

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
          <Link to="/">Se picó</Link>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-start">
            
            <NavDropdown title="Picadas" bg="dark" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link to='category/Picadas4/'>Para 4</Link>
                </NavDropdown.Item>
              <NavDropdown.Item> 
                         <Link to='category/Picadas6'>Para 6</Link>
                
              </NavDropdown.Item>
            </NavDropdown>
          
          
            <NavDropdown title="Bebidas"   id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    
                    <Link to='category/Cervezas'>Cervezas</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='category/Gaseosas'>Gaseosas</Link>  
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='category/Tragos'>Tragos</Link>
                  </NavDropdown.Item>
            </NavDropdown>
            
            <Link to='category/Combos'>Combos</Link>
            
              </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="chart">
            <img src={"https://png.pngtree.com/png-vector/20191124/ourmid/pngtree-shopping-cart-icon-simple-png-image_2028930.jpg"} alt={"chart"} />
          (5)        
        </div>
    </Navbar>
    </div>
  );
}

export default NavBar;
