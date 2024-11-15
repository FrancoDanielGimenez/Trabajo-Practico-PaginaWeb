import Cards from "../../components/Cards";
import { productos } from "../../mocks/newMocks"; 
import { useState } from "react";


const Home = () =>{

  const [elementos, setElementos] = useState(productos);
  console.log(elementos);

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
          <h1>Home</h1>
          {elementos.map((blog)=>(<Cards blog={blog} key={blog.title} ></Cards>))}
        </div>
      </>
    )
}

export default Home;