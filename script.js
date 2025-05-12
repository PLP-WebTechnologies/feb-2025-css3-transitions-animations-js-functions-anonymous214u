const colorPicker = document.getElementById('colorPicker');
const saveBtn = document.getElementById('saveBtn');
const box = document.getElementById('box');

// Load saved color from localStorage
const savedColor = localStorage.getItem('favColor');
if (savedColor) {
  box.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Save color and trigger animation
saveBtn.onclick = function () {
  const color = colorPicker.value;
  localStorage.setItem('favColor', color);
  box.style.backgroundColor = color;

  // Trigger animation
  box.classList.add('animate');
  setTimeout(() => {
    box.classList.remove('animate');
  }, 500); // remove class after animation
};
