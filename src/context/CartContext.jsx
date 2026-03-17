import { createContext, useState } from "react";

//1. definir contexto
export const CartContext = createContext();

//2. declaro proveedor
export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])
    //Las herramientas (funciones)

    //agregar un tiem al carrito
    const addItem = (item, qty) => {

        if(isInCart(item.id)){
            setCart(
                cart.map((prod) => {
                    if(prod.id === item.id){
                        //sumar cantidades
                        return{...prod,quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
            )
        }else{
            //no existe en el carrito
            setCart([...cart, {...item, quantity:qty}])
        }

    }

    //borrar todo el carrito
    const clear = () => {
        setCart([])
    }

    //borrar un solo item del carrito
    const removeItem =(id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //cantidad total de item
    const cartQty = () =>{

    }

    //total a pagar
    const total = () =>{

    }

    //opcional
    const itemQuantity = (id) => {
        const inCart = cart.find((prod) => prod.id === id)
        if(inCart){
            return inCart.quantity
        }else{
            return 0
        }
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )

}