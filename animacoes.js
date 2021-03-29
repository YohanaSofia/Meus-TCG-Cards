let html = document.querySelector('html');
let imgPokemon = document.querySelector('#img');

function segue(e) {
  imgPokemon.style.left = `${e.pageX + 2}px`;
  imgPokemon.style.top = `${e.pageY + 2}px`;
  return null;
}

html.addEventListener('mousemove', segue);

