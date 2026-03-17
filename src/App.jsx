import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import componentes
import BotonMultiusos from './examples/BotonMultiusos'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';

//3. importamos el proveedor del contexto para que puedan sus hijos consultarlo
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';


function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      {/* <HeroSection/> */}
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Todas las experiencias' disponibles='11 experiencias disponibles'/>} />
        <Route path='/category/:type' element={<ItemListContainer mensaje='Categoría: '/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App