import { useParams } from "react-router-dom";

const VerProductos = () =>{

    const {idproductos} = useParams()

    return(
        <>
        <div>Ver Productos{idproductos}</div>
        </>
    )
}

export default VerProductos;