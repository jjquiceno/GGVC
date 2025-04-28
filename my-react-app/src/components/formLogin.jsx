import React from 'react'

export const FormLogin = () => {
  return (
    <div className="login">
      <h1>INICIAR SESIÓN</h1>

      <br /><br />

      <form action="">
        <div className="input-icon">
          <input type="text" id="usuario" placeholder="Usuario" required />
          <i className="fas fa-user"></i>
        </div>

        <br /><br />

        <div className="input-icon">
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
          <i className="fas fa-lock"></i>
        </div>

        <br /><br />

        <button type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <a href="html/#">Contraseña</a></p>
        <p>Aún no tengo una cuenta <a href="../html/registro.html">Registrarse</a></p>
      </form>
    </div>
  )
}