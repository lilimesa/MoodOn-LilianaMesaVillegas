import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

// css
import '../assets/css/NavBar.css'

// images
import logoReact from '../assets/react.svg'

const NavBar = ()=> {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to='/' className='brand-logo'>
                  <img src={'../moodon.svg'} alt="logo moodon" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="box-center">
                        <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>

                        <NavDropdown title="Experiencias" id="experiencias-dropdown">

                            <NavDropdown.Item as={NavLink} to="/category/gastronomía">
                                🍽 Gastronomía
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/category/aventura">
                                🏔 Aventura
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/category/clases de cocina">
                                👨‍🍳 Clases de Cocina
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/category/spa & wellness">
                                🧘 Spa & Wellness
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item as={NavLink} to="/">
                                ✨ Ver todas
                            </NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar