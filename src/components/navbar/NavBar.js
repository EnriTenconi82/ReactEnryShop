import React, {useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import { idMenuContext } from '../../App';

const NavBar = () => {

  const {menuChange} = useContext(idMenuContext)

  const menuPicada4 = () => {
    menuChange(0)
    };
  
    const menuPicada6 = () => {
      menuChange(1)
    };
    const menuCerveza = () => {
      menuChange(2)
    };
  
    const menuGaseosa= () => {
      menuChange(3)
    };
  
    const menuAlcolic = () => {
      menuChange(4)
    };
  
    const menuCombo = () => {
      menuChange(5)
    }; 
    
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Se picó</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-start">
            <NavDropdown title="Picadas" bg="dark" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={menuPicada4}>Para 4 </NavDropdown.Item>
              <NavDropdown.Item onClick={menuPicada6}>Para 6</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bebidas"   id="basic-nav-dropdown">
              <NavDropdown.Item onClick={menuCerveza}>Cervezas</NavDropdown.Item>
              <NavDropdown.Item onClick={menuGaseosa}>Gaseosas</NavDropdown.Item>
              <NavDropdown.Item onClick={menuAlcolic}>Alcolicas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={menuCombo}>Combos</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
