document.addEventListener("DOMContentLoaded", () => {
  const telefonoLink = document.querySelector('.sub-navegador2 a');
  const telefonoDiv = document.getElementById('telefono-header');

  telefonoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que haga scroll o refresque
    telefonoDiv.classList.toggle('telefono-visible');
  });
});
