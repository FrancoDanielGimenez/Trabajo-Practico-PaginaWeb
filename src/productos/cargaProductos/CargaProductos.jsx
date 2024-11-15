import './cargaProductos.css';

const CargaProductos = () =>{

    return(
        <>
        <div>
          <h1>Carga de Productos</h1>
          <div className='form_carga_productos'>
            <form action="" method="get">
              <label htmlFor="producto"><b>Producto </b></label>
              <input type="text" name="" id="producto" />
              <label htmlFor="descripcion"><b>Descripcion</b> </label>
              <textarea name="" id="descripcion" cols={20} rows={10}></textarea>
              <label htmlFor="precio"><b>Precio</b></label>
              <input type="number" name="" id="precio" />
              <label htmlFor="imagen"><b>Imagen</b></label>
              <input type="file" name="" id="imagen" /> 
            </form>
            <br />
            <div className='btn_carga_producto'>
                <button type="submit">Crear</button>
                <button type="submit">Volver</button>
            </div> 
          </div>
        </div>
        </>
    )
}

export default CargaProductos;