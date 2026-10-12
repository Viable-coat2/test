document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle-color');
  const body = document.body;

  btn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;
    btn.textContent = 'Ещё раз';
  });
});
