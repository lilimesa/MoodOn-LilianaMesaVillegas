import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getItem } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, [id]);

  if (!detalle) return <p>Cargando...</p>;

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;