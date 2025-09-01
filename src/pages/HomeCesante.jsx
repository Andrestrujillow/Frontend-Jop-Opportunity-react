import { useNavigate } from "react-router-dom";
import "../styles/HomeCesante.css";

function HomeCesante() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Bienvenido al Home de Cesante</h2>
      <p>Aquí podrás ver ofertas de empleo y capacitaciones.</p>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}

export default HomeCesante;
