document.addEventListener('DOMContentLoaded', loadAllFunctions, false);

function loadAllFunctions() {
  activateBlockClick();
}

function activateBlockClick() {
  var block = document.querySelector('.block');
  block.addEventListener('click', proceed, false);
}

function proceed() {
  switchClass() && reward();
}

function switchClass() {
  var classes = ['black', 'red', 'yellow', 'green', 'blue', 'white', 'gray',
    'orange', 'pink', 'purple', 'brown', 'beige', 'light-green', 'turquoise',
    'eggplant'];
  var isLastClass = false;
  var block = document.querySelector('.block');
  var activeClass = block.classList[1];
  var index = classes.indexOf(activeClass);
  var newIndex = index + 1;
  if (index === classes.length - 1) {
    isLastClass = true;
    return isLastClass;
  }
  block.classList.remove(activeClass);
  block.classList.add(classes[newIndex]);
  return isLastClass;
}

function reward() {
  var catContainer = document.querySelector('.cat');
  catContainer.classList.remove('hide');
  catContainer.classList.add('show');
}
