import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//import css
import '../assets/css/CategoryListContainer.css'

const CategoryListContainer = ()=> {
    return(
        <Container fluid className='category-list'>
            <Container>
                <Row>
                    <Col>
                        <Button variant="light">✨ Todas</Button>
                        <Button variant="light">🍽️ Gastronomía</Button>
                        <Button variant="light">🏔️ Aventura</Button>
                        <Button variant="light">👨‍🍳 Clases de Cocina</Button>
                        <Button variant="light">💆 Spa and Wellness</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default CategoryListContainer