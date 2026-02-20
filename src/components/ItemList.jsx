import React from 'react'
import Item from './Item'

//import css
import '../assets/css/ItemList.css'

const ItemList = ({data}) => {
  return (
    <section className="experiences-section">
        <div className="experiences-container">
            {data.map((prod)=> <Item key={prod.id} prod={prod}/> )}
        </div>
    </section>
  )
}

export default ItemList