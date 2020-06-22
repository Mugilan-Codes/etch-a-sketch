const root = document.documentElement;
const gridContainer__div = document.querySelector('.container');

const clearGrid = () => {
  gridContainer__div.innerHTML = '';
};

//! Maximum size is 120
const createGrid = (size = 16) => {
  clearGrid();

  size = size < 1 ? 1 : size > 120 ? 120 : size;
  console.log({ size });
  root.style.setProperty('--grid-size', size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'grid-item');
      div.setAttribute('id', `${i}X${j}`);
      div.addEventListener('mouseover', (e) =>
        e.target.classList.add('passed-over')
      );
      gridContainer__div.appendChild(div);
    }
  }
};

createGrid();
