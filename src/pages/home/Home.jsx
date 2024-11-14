import Cards from "../../components/Cards";
import FondoImg from '../../../public/fondo_inicio.jpg';
import { productos } from "../../mocks/newMocks"; 
import { useState } from "react";


const Home = () =>{

  const [elementos, setElementos] = useState(productos);
  console.log(elementos);

    return(
      <>
        <div>
          <div>
            <img src={FondoImg} alt="fondo de pantalla" style={{
                width: "100%",
                height: "400px",
                display: "block",
                objectFit: "cover",
              }}/>
          </div>
          <h1>Home</h1>
          {elementos.map((blog)=>(<Cards blog={blog} key={blog.title} ></Cards>))}
        </div>
      </>
    )
}

export default Home;