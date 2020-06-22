const root = document.documentElement;
const gridContainer__div = document.querySelector('.container');
const clearGridButton__div = document.getElementById('clear-grid');
const blackBackgroundButton__div = document.getElementById('black-bg');
const randomBackgorundButton__div = document.getElementById('random-bg');

const MIN_SIZE = 1;
const MAX_SIZE = 64;

const clearGrid = () => {
  gridContainer__div.innerHTML = '';

  const size = Number(prompt('Enter grid size?'));

  createGrid(size);
};

const createGrid = (size = 16) => {
  size = size < MIN_SIZE ? MIN_SIZE : size > MAX_SIZE ? MAX_SIZE : size;
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

//* Set the width of conatainer based on it's height
gridContainer__div.style.width = `${gridContainer__div.clientHeight}px`;

clearGridButton__div.addEventListener('click', clearGrid);
