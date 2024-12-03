/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="Conectar LAB" href="#top">
      <img class="header-logo" src="./logosConectar/logo.png" alt="Logo de Conectar LAB" />
    </a>
    <nav class="header-nav">
      <ul>
        <li><a href="#top">INICIO</a></li>
        <li><a href="#images">PROPUESTAS</a></li>
        <li><a href="#info">CARGOS</a></li>
        <li>
          <a class="header-descargar" href="./archivos/PLAN_DE_TRABAJO_CF_2024.pdf" download="PLAN_DE_TRABAJO_CF_2024.pdf" title="Descargar Plan de TRABAJO">
            <button class="btn-descargar"> <i class="fa-solid fa-download"></i> Descargar Plan </button>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">INICIO</a></li>
      <li><a href="#images">PROPUESTAS</a></li>
      <li><a href="#info">CARGOS</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img src="./logosConectar/logo.png"  >
  <div class="contacto-info">
    <h1>¡Descargar nuestro PLAN de TRABAJO!</h1>
    <div>
      <a href="./archivos/PLAN_DE_TRABAJO_CF_2024.pdf" target="_blank" download="PLAN_DE_TRABAJO_CF_2024.pdf"><i class="fa-solid fa-download"></i></a>   
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
 <div class="footer-content">
    <p>&copy; 2024 JR-System Todos los derechos reservados.</p>
    <nav class="footer-nav">
      <a href="#top">INICIO</a>
      <a href="#images">PROPUESTAS</a>
      <a href="#info">CARGOS</a>
    </nav>
  </div>
  <a title="Conectar LAB" href="#top">
    <img class="header-logo" src="./logosConectar/logo.png"  >
  </a>
`;
};

function precionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}
