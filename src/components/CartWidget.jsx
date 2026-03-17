import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartWidget = ()=> {
    return (
        <Link className="cart-icon" to="/cart">
            <IoCartOutline size={28} />
            <span>1</span>
        </Link>
    )
}

export default CartWidget