import request from '../js/apiRequest';
import card from '../Templates/imageCard.hbs';
// import '../tools/styles.css';

let query = '';
const input = document.querySelector('input');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery'); // замінить клас

const debounce = require('lodash.debounce');

form.addEventListener('submit', debounce(renderImages, 500));

function renderImages(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  query = input.value;
  request.searchFilms(query).then(data => {
    const markup = card(data.results);
    gallery.innerHTML = markup;
    form.reset();
  });
}

