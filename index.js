document.addEventListener('DOMContentLoaded', loadAllFunctions, false);

function loadAllFunctions() {
  activateBlockClick();
}

function activateBlockClick() {
  var block = document.querySelector('.block');
  block.addEventListener('click', switchClass, false);
}

function switchClass() {
  var classes = ['black', 'red', 'yellow', 'green', 'blue', 'white', 'gray', 'orange', 'pink', 'purple'];
  var block = document.querySelector('.block');
  var activeClass = block.classList[1];
  var index = classes.indexOf(activeClass);
  var newIndex = index + 1;
  if (index === classes.length - 1) {
    newIndex = 0;
  }
  block.classList.remove(activeClass);
  block.classList.add(classes[newIndex]);
}
