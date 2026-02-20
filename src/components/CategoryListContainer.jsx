import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

//import css
import '../assets/css/CategoryListContainer.css'

const CategoryListContainer = ()=> {
    return(
        <section className="categories-section">
            <div className="categories-container">
                <NavLink to="/" end className={({ isActive }) => isActive ? "category-pill active" : "category-pill"}>✨ Todas</NavLink>
                <NavLink className="category-pill" to="/category/gastronomica">🍽 Gastronomía</NavLink>
                <NavLink className="category-pill" to="/category/aventura">🏔 Aventura</NavLink>
                <NavLink className="category-pill" to="/category/clase-cocina">👨‍🍳 Clases de Cocina</NavLink>
                <NavLink className="category-pill" to="/category/spa">🧘 Spa & Wellness</NavLink>
            </div>
        </section>
    )
}

export default CategoryListContainer