import '../compraProductos/CompraProductos.css';

const CompraProductos = () =>{
    return(
        <>
        <div>
            <h2>Compras Realizadas</h2>
            <div>
              <div className='datos_usuario_compra'>
                <h4>Nombre y Apellido: Franco Daniel Gimenez</h4>
                <p>Usuario</p>
                <p>Nro de Documento: 39936632</p>
                <p>Ciudad: Jesus Maria</p>
              </div>
              <div className="tabla_productos">
                <table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Caracteristica</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <th>Notebook</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div> 
            </div>
        </div>
        </>
    )
}

export default CompraProductos;