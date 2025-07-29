const list = document.getElementById('list');
const themeSelect = document.getElementById('themeSelect');
const styleSelect = document.getElementById('styleSelect');

const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];


const savedTheme = localStorage.getItem('theme') || 'light';
const savedStyle = localStorage.getItem('listStyle') || 'expanded';


document.body.classList.add(savedTheme);
list.classList.add(savedStyle);
themeSelect.value = savedTheme;
styleSelect.value = savedStyle;


items.forEach(color => {
  const li = document.createElement('li');
  li.textContent = color;
  list.appendChild(li);
});


themeSelect.addEventListener('change', () => {
  document.body.classList.remove('light', 'dark', 'contrast');
  document.body.classList.add(themeSelect.value);
  localStorage.setItem('theme', themeSelect.value);
});


styleSelect.addEventListener('change', () => {
  list.classList.remove('expanded', 'compact', 'bordered');
  list.classList.add(styleSelect.value);
  localStorage.setItem('listStyle', styleSelect.value);
});
