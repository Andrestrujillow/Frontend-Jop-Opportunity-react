import { useNavigate } from "react-router-dom";
import "../styles/HomeGeneral.css";

function HomeGeneral() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Bienvenido</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}

export default HomeGeneral;
