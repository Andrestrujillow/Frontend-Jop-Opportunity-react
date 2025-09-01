import { useNavigate } from "react-router-dom";
import "../styles/CesanteForm.css";

function CesanteForm() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Formulario de Cesante</h2>
      <input type="text" placeholder="Profesión" />
      <textarea placeholder="Experiencia"></textarea>
      <input type="text" placeholder="Ubicación" />
      <button onClick={() => navigate("/home-cesante")}>Registrar Cesante</button>
    </div>
  );
}

export default CesanteForm;
