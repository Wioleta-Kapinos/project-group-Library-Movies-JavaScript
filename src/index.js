import './sass/main.scss';
import { getAndDisplayTrendingMovies } from './js/initial-fetch.js';
import './js/search-movies.js';
import './js/modal-film';
import './js/local-storage';

window.onload = getAndDisplayTrendingMovies(1);
