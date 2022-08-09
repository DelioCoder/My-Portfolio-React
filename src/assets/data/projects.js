import { v4 as uuidv4 } from 'uuid';

import Shopping from '../images/Shopping.png';
import Covid from '../images/covid-tracker.png';
import Red from '../images/red-social.png';
import Netflix from '../images/Netflix.png';
import Senati from '../images/Senati.png';
import Anime from '../images/anime.png';
import Angular_1 from '../images/A12_1.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Shopping Store',
    desc:
      'Un E-commerce hecho con ReactJs w/Redux del lado del cliente, Y Node w/ExpressJS como lado del servidor junto con MongoDB w/MongoDB Atlas',
    img: Shopping,
    link: 'https://shopping-react-redux.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Covid-19-Tracker',
    desc:
      'Una aplicación web que provee personas infectadas, recuperadas y fallecidas por covid 19.',
    img: Covid,
    link: 'https://modest-bhabha-99d59a.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Red social MERN-G',
    desc:
      'Red social usando el stack MERN junto con la maravilloso lenguaje de consultas: GraphQl(Apollo)',
    img: Red,
    link: 'https://symphonious-sawine-50e3f3.netlify.app/',
  },
  {
    id: uuidv4(),
    name: "Netflix Clone",
    desc:
      'Solo Interfaz de Netflix con: ReactJS, Firebase y MovieDB API',
    img: Netflix,
    link: 'http://sleepy-crate.surge.sh/',
  },
  {
    id: uuidv4(),
    name: 'Biblioteca PIM - SENATI',
    desc:
      'Pagina para mostrar, registrar, editar y eliminar proyectos para estudiantes de SENATI con: Html, Css(Bootstrap), Javascript(AJAX) y Php(MVC)',
    img: Senati,
    link: 'https://sistema-pim.000webhostapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Anime & Manga Search',
    desc:
      'Buscador de animes o mangas con redirección a su información completa con: ReactJS, Jikan API y Material UI',
    img: Anime,
    link: 'https://anime-search-api-jikan.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Gifs search(Angular 12)',
    desc:
      'Buscador de Gifs con: Angular 12 y css(Bootstrap)',
    img: Angular_1,
    link: 'https://ecstatic-bose-69176e.netlify.app/',
  }
];

export default projects;
