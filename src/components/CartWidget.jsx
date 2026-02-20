import { IoCartOutline } from "react-icons/io5";

const CartWidget = ()=> {
    return (
        <button className="cart-icon">
            <IoCartOutline size={28} />
            <span>1</span>
        </button>
    )
}

export default CartWidget