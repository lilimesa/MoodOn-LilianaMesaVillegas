import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../mock/asyncMock';
import ItemList from './ItemList';

//import css
import '../assets/css/ItemListContainer.css'

//import child components
import CategoryListContainer from './CategoryListContainer'

const ItemListContainer = (props)=> {
    const {mensaje, disponibles}=props
    const [data, setData] = useState([])
    const {type} = useParams()
    console.log(type)

    useEffect(()=>{
        getProducts()//pedimos datos
        .then((res) =>{
            if(type){
                //filtro
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })//tratamos la respuesta y la guardamos
        .catch((error) => console.log(error, 'error')) //atrapamos el error
    },[type])

    return(
        <Container fluid>
            <CategoryListContainer />
            <Container>
                <Row lg={1}>
                    <Col className='list-container'>
                        <h1>{mensaje}</h1>
                        <span>{disponibles}</span>
                        <ItemList data={data}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ItemListContainer