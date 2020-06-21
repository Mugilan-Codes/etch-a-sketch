const gridContainer__div = document.querySelector('.container');

const clearGrid = () => {
  gridContainer__div.innerHTML = '';
};

const createGrid = (size = 16) => {
  clearGrid();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'grid-item');
      div.setAttribute('id', `${i}X${j}`);
      gridContainer__div.appendChild(div);
    }
  }
};

createGrid();
