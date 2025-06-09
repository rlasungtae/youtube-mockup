document.addEventListener('DOMContentLoaded', () => {
  const btn     = document.querySelector('.hamburger-button');
  const sidebar = document.querySelector('.sidebar');

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});