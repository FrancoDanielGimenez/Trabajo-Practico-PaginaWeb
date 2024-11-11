import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'

function App() {

  return (
    <>
      {/**Rutas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> {/**Ver Todos los blogs*/}
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
