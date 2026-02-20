import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import css
import '../assets/css/ItemListContainer.css'

//import child components
import CategoryListContainer from './CategoryListContainer'

import { useState, useEffect } from 'react';
import { getProducts } from '../mock/asyncMock';
import ItemList from './ItemList';

const ItemListContainer = (props)=> {
    const {mensaje}=props
    const [data, setData] = useState([])
    console.log('ItemListContainer', data)
    console.log(getProducts())
    useEffect(()=>{
        getProducts()
        .then((res) => setData(res))
        .catch((error) => console.log(error, 'error'))
    },[])

    return(
        <Container fluid>
            <CategoryListContainer />
            <Container>
                <Row lg={1}>
                    <Col className='list-container'>
                        <h1>Todas las experiencias</h1>
                        <span>11 experiencias disponibles</span>
                        <ItemList data={data}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ItemListContainer