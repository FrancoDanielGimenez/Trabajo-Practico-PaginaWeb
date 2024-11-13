import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CargaProductos from './productos/cargaProductos/CargaProductos';
import Home from './pages/home/Home';
import './App.css'

function App() {

  return (
    <>
      {/**Rutas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> {/**Ver Todos los blogs*/}
          <Route path='/CargaProductos' element={<CargaProductos/>} /> {/**Ver Todos los blogs*/}
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
