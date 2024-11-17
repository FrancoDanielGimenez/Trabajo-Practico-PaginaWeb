import { useParams } from "react-router-dom";
import { productos } from "../../mocks/newMocks";
import { useState } from "react";
import DetalleProducto from "../detalleProductos/DetalleProducto";

const VerProductos = () =>{

    //con el id buscar el blog que hay que mostrar
    const {idprod} = useParams();

    const [elementos, setElementos] = useState(productos);
    const prod = elementos[idprod-1]
    console.log(prod)

    return(
        <>
        <DetalleProducto prod={prod}/>
        </>
    )
}

export default VerProductos;