import './login.css';

const Login = () => {
    return(
        <>
        login
          <div className="conteiner_login">
              <h2>Iniciar Sesión</h2>
              <div className="form_login">
                <form action="">
                    <label htmlFor=""><b>Usuario</b></label>
                    <input type="text" name="" id="" />
                    <label htmlFor=""><b>Contraseña</b></label>
                    <input type="password" name="" id="" />
                </form>
                <br />
                <button type="button" className="btn_login">Entrar</button>
              </div>
          </div>
        
        </>
    )
}

export default Login;