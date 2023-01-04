import React,{useContext} from 'react';
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
  
  const {calcItemsQty}= useContext(cartContext)

 
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
            <NavDropdown className='dropdown' title="Picadas" bg="dark" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='category/Picadas4/'>Para 4</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/Picadas6'>Para 6</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bebidas"   id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='category/Cervezas'>Cervezas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/Gaseosas'>Gaseosas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/Tragos'>Tragos</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link as={Link} to='category/Combos'>Combos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>

    
    { //si hay items en el carrito muestro carrito
      calcItemsQty()>0 &&
      <>
        <Link className='menuLink' to='Brief'>
        <CartWidget cartQ={calcItemsQty()} />
        </Link>
      </>
    } 
    
    </Navbar>


    </div>
  );
}

export default NavBar;
