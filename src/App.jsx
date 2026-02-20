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


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      {/* <HeroSection/> */}
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Todas las experiencias' disponibles='11 experiencias disponibles'/>} />
        <Route path='/category/:type' element={<ItemListContainer mensaje='Estás en la categoría'/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App