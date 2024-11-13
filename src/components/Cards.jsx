import '../styles/cards.css';

const Cards = () =>{
    return(
        <>
        <div className='contenier_cards'>
          <img src="" alt="imagen de pc" height={100} width={100}  />
          <div className='descripcion'>
            <h3>titulo</h3>
            <p>descripcion</p>
            <p>precio</p>
          </div>
          <button type="button" className='btn_card'>Ingresar</button>
        </div>
        </>
    )
}

export default Cards;