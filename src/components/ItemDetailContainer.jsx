import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItem } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando]= useState(true)
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(()=> setCargando(false))
  }, [id])

  return (
    <div>
      {
        cargando
        ? <Loader text='Cargando información del producto'/>
        : <ItemDetail detalle={detalle} />
      }
    </div>
  )
}

export default ItemDetailContainer;