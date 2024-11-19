import '../styles/nav.css';
import { NavLink } from "react-router-dom";

const Nav = () =>{
    return(
        <>
          <div className="conteiner_nav">
            <div className='navLink1'>
              <NavLink to={'/'}>Incio</NavLink>
            </div>
            <div className='navLink1'>
              <NavLink to={'/CompraProductos'}>Compras</NavLink>
            </div>
            <div className='navLink1'>
              <NavLink to={'/CargaProductos'}>Proveedores</NavLink>
            </div>
            <div className='navLink2'>
              <NavLink to={'/Login'}>Iniciar Sesión</NavLink>
            </div>
            <div className='navLink3'>
              <NavLink to={'/RegistroNewUsuario'}>Registrarse</NavLink>
            </div>  
          </div>
        </>
    )
}

export default Nav;