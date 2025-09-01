import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserTypeCard from "../components/UserTypeCard";
import "../styles/Register.css";

function Register() {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (userType === "cesante") navigate("/cesante-form");
    else if (userType === "empresa") navigate("/empresa-form");
    else alert("Selecciona un tipo de usuario");
  };

  return (
    <div className="card">
      <h2>Registro de Usuario</h2>
      <input type="text" placeholder="Nombre Completo" />
      <input type="email" placeholder="Correo Electrónico" />
      <input type="password" placeholder="Contraseña (mínimo 8 caracteres)" />
      <h4>Tipo de Usuario</h4>
      <div className="user-type">
        <UserTypeCard
          type="cesante"
          label="Cesante"
          selected={userType === "cesante"}
          onClick={() => setUserType("cesante")}
        />
        <UserTypeCard
          type="empresa"
          label="Empresa"
          selected={userType === "empresa"}
          onClick={() => setUserType("empresa")}
        />
      </div>
      <button onClick={handleRegister}>Registrarse</button>
      <Link className="link" to="/">
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
    </div>
  );
}

export default Register;
