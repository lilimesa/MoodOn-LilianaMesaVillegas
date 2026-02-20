import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//import icons
import { MdCardGiftcard } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuMousePointerClick } from "react-icons/lu";
import { FaRegGrinStars } from "react-icons/fa";

//import css
import '../assets/css/HeroSection.css'

const HeroSection = ()=> {
    return(
        <section className='hero-section'>
            <Container>
                <Row>
                    <Col className='hero-promise'>
                        <h1>Regala Momentos Inolvidables</h1>
                        <h2>Descubre experiencias únicas que crearán recuerdos para toda la vida</h2>
                        <Button variant="light">Explora experiencias</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='hero-icon'>
                        <div className='icon'><MdCardGiftcard size={32} /></div>
                        <h6>Tarjeta Regalo</h6>
                        <span>El regalo perfecto</span>
                    </Col>
                    <Col className='hero-icon'>
                        <div className='icon'><RiSecurePaymentLine size={32} /></div>
                        <h6>Pago Seguro</h6>
                        <span>100% protegido</span>
                    </Col>
                    <Col className='hero-icon'>
                        <div className='icon'><LuMousePointerClick size={32} /></div>
                        <h6>Reserva Fácil</h6>
                        <span>En pocos clics</span>
                    </Col>
                    <Col className='hero-icon'>
                        <div className='icon'><FaRegGrinStars size={32} /></div>
                        <h6>Experiencias Únicas</h6>
                        <span>Momentos especiales</span>
                    </Col>
                
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection