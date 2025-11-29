document.addEventListener('DOMContentLoaded', () => {
  const proposalDateEl = document.getElementById('proposal-date');
  if (!proposalDateEl) return;

  const hoy = new Date();
  const fechaFormateada = hoy.toLocaleDateString('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  proposalDateEl.textContent = fechaFormateada;
});

