import { useNavigate } from "react-router-dom";
import "../styles/HomeEmpresa.css";

function HomeEmpresa() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Bienvenido al Home de Empresa</h2>
      <p>Aquí podrás publicar ofertas y gestionar candidatos.</p>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}

export default HomeEmpresa;
