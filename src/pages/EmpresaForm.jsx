import { useNavigate } from "react-router-dom";
import "../styles/EmpresaForm.css";

function EmpresaForm() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Formulario de Empresa</h2>
      <input type="text" placeholder="Nombre de la Empresa" />
      <textarea placeholder="Descripción"></textarea>
      <button onClick={() => navigate("/home-empresa")}>Registrar Empresa</button>
    </div>
  );
}

export default EmpresaForm;
