import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { cartContext } from '../../contexts/cartContext';



const NavBar = () => {
  
  const {cartQ} =useContext(cartContext)

  

  return (

    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
          <Link className='menuLink'  to="/">Se picó</Link>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-start">
            
            <NavDropdown title="Picadas" bg="dark" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link className='menuLink' to='category/Picadas4/'>Para 4</Link>
                </NavDropdown.Item>
              <NavDropdown.Item> 
                <Link className='menuLink'  to='category/Picadas6'>Para 6</Link>
                
              </NavDropdown.Item>
            </NavDropdown>
          
          
            <NavDropdown title="Bebidas"   id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    
                    <Link className='menuLink' to='category/Cervezas'>Cervezas</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className='menuLink' to='category/Gaseosas'>Gaseosas</Link>  
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className='menuLink' to='category/Tragos'>Tragos</Link>
                  </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
                <Link className='menuLink' to='category/Combos'>Combos</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    
      <Link className='menuLink' to='cart'>
            <CartWidget qOfCart={cartQ()} />
      </Link>

    </Navbar>
    </div>
  );
}

export default NavBar;
