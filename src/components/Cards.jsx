import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import '../styles/cards.css';

const Cards = ({prod}) =>{

    const navigate = useNavigate()

    const handleClick = () =>{
      navigate(`/productos/${prod.id}`)
    }

    return(
        <>
        <div className='contenier_cards'>
          <img src={prod.img} alt="imagen de pc" height={150} width={150}  />
          <div className='descripcion'>
            <h3>{prod.title}</h3>
            <p>{prod.descripcion}</p>
            <p>${prod.precio}</p>
          </div>
          <button type="button" className='btn_card' onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass} /> Ver Más</button>
          <button type='button' className='btn_card'><FontAwesomeIcon icon={faCartShopping} /> Comprar</button>
        </div>
        </>
    )
}

export default Cards;