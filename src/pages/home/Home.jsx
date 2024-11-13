import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Cards from "../../components/Cards";
import FondoImg from '../../../public/fondo_inicio.jpg';


const Home = () =>{

    return(
      <>
        <div>
          <Nav></Nav>
          <div>
            <img src={FondoImg} alt="fondo de pantalla" style={{
                width: "100%",
                height: "400px",
                display: "block",
                objectFit: "cover",
              }}/>
          </div>
          <h1>Home</h1>
          <Cards></Cards>
          <Footer></Footer>
        </div>
      </>
    )
}

export default Home;