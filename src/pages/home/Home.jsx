import Cards from "../../components/Cards";
import { productos } from "../../mocks/newMocks"; 
import { useState } from "react";


const Home = () =>{

  const [elementos, setElementos] = useState(productos);

    return(
      <>
        <div>
          <div>
            <img src="https://fastly.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/Hatp2024.webp" alt="fondo de pantalla" style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}/>
          </div>
          <h1>Nuestros productos:</h1>
          <div>
          {elementos.map((prod)=>(<Cards prod={prod} key={prod.title} ></Cards>))}
          </div>
         
        </div>
      </>
    )
}

export default Home;