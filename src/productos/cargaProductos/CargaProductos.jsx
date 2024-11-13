import Footer from "../../components/Footer";
const CargaProductos = () =>{

    return(
        <>
        <div>
          <h1>Carga de Productos</h1>
          <div>
            <form action="" method="get">
              <label htmlFor="">Producto </label>
              <input type="text" name="" id="" />
              <label htmlFor="">Descripcion </label>
              <input type="text" name="" id="" />
              <label htmlFor="">Observacion</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Precio</label>
              <input type="number" name="" id="" />
              <label htmlFor="">Imagen</label>
              <input type="file" name="" id="" />
              <div>
                <button type="submit">Crear</button>
                <button type="submit">Volver</button>
              </div>  
            </form>
          </div>
        </div>
        <Footer/>
        </>
    )
}

export default CargaProductos;