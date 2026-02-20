//import child components
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//import css
import '../assets/css/NavBar.css'

//import images
import logoReact from '../assets/react.svg'

const NavBar = ()=> {
    return(
        
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div href="#home" className='brand-logo'><img src={'../moodon.svg'} alt="logo moodon" /></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="box-center">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Experiencias</Nav.Link>
                    <Nav.Link href="#link">Regalos</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar