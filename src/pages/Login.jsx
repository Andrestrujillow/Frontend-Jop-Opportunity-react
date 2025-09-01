import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <p>Accede con tus credenciales</p>
        <div className="input-group">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Correo Electrónico" />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className="login-btn" onClick={() => navigate("/home")}>
          Iniciar Sesión
        </button>
        <div className="extra-links">
          <span>¿Olvidaste tu contraseña?</span>
          <br />
          <Link to="/register">¿No tienes cuenta? Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
