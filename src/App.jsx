import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CargaProductos from './productos/cargaProductos/CargaProductos';
import ModificarProductos from './productos/modificarProductos/ModificarProductos.jsx'
import ListaProductos from './productos/listaProductos/ListaProductos.jsx';
import VerProductos from './productos/verProductos/VerProductos.jsx'
import Home from './pages/home/Home';
import Login from './users/login/Login.jsx'
import './App.css'

function App() {

  return (
    <>
      {/**Rutas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> {/**Ver Todos los blogs*/}
          <Route path='/Login' element={<Login/>} /> {/**Login de la pagina*/}
          <Route path='/CargaProductos' element={<CargaProductos/>} /> {/**Cargar los productos cargados*/}
          <Route path='/ModificarProductos' element={<ModificarProductos/>} /> {/**Modificar los productos cargados*/}
          <Route path='/ListaProductos' element={<ListaProductos/>} /> {/**Lista los productos cargados*/}
          <Route path='/Cards/:idCards' element={<VerProductos/>} /> {/**Ver Productos*/}
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
