import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CesanteForm from "./pages/CesanteForm";
import EmpresaForm from "./pages/EmpresaForm";
import HomeCesante from "./pages/HomeCesante";
import HomeEmpresa from "./pages/HomeEmpresa";
import HomeGeneral from "./pages/HomeGeneral";

import "./styles/App.css"; // ✅ estilos globales

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cesante-form" element={<CesanteForm />} />
          <Route path="/empresa-form" element={<EmpresaForm />} />
          <Route path="/home-cesante" element={<HomeCesante />} />
          <Route path="/home-empresa" element={<HomeEmpresa />} />
          <Route path="/home" element={<HomeGeneral />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
