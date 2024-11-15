import { useParams } from "react-router-dom";

const VerProductos = () =>{

    //con el id buscar el blog que hay que mostrar
    const {idprod} = useParams();


    return(
        <>
        <div>Ver Productos {idprod}</div>
        </>
    )
}

export default VerProductos;