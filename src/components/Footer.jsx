import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>JobApp</h4>
          <p>Tu plataforma de empleo y oportunidades</p>
        </div>
        <div>
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/login">Ingresar</a></li>
            <li><a href="/register">Registro</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 JobApp - All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
