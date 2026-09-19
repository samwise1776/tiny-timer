const button = document.getElementById('cta');
button.addEventListener('click', () => {
  button.textContent = 'Launched';
  button.disabled = true;
});
