import '../styles/nav.css';
import { NavLink } from "react-router-dom";

const Nav = () =>{
    return(
        <>
          <div className="conteiner_nav">
            <div className='navLink1'>
              <NavLink to={'/'}>Incio</NavLink>
            </div>
            <div className='navLink2'>
              <NavLink to={'/Login'}>Iniciar Sesión</NavLink>
            </div>
            <div className='navLink3'>
              <NavLink to={''} className="parrafoLink">Registrarse</NavLink>
            </div>  
          </div>
        </>
    )
}

export default Nav;