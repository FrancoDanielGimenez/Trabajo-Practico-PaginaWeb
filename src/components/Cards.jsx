import { useNavigate } from 'react-router-dom';
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
          <button type="button" className='btn_card' onClick={handleClick}>Ver Más</button>
        </div>
        </>
    )
}

export default Cards;