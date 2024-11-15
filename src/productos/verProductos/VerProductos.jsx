import { useParams } from "react-router-dom";

const VerProductos = () =>{

    const {idcard} = useParams();

    return(
        <>
        <div>Ver Productos{idcard}</div>
        </>
    )
}

export default VerProductos;