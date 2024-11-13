import { useNavigate } from 'react-router-dom';
import '../styles/cards.css';

const Cards = ({blog}) =>{

    const navigate = useNavigate()

    const handleClick = () =>{
      navigate(`/cards/${blog.source.id}`)
    }

    return(
        <>
        <div className='contenier_cards'>
          <img src={blog.img} alt="imagen de pc" height={150} width={150}  />
          <div className='descripcion'>
            <h3>{blog.title}</h3>
            <p>{blog.descripcion}</p>
            <p>${blog.precio}</p>
          </div>
          <button type="button" className='btn_card' onClick={handleClick}>Ingresar</button>
        </div>
        </>
    )
}

export default Cards;