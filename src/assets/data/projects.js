import { v4 as uuidv4 } from 'uuid';

import Shopping from '../images/Shopping.png';
import Red from '../images/red-social.png';
import Netflix from '../images/Netflix.png';
import Dashboard_temp from '../images/Dashboard_temp.png';
import Seiko from '../images/Seiko.png';
import Maps_Angular from '../images/Maps_Angular.png';
import Anime from '../images/anime.png';
import Angular_1 from '../images/A12_1.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Shopping Store',
    desc:
      'Un E-commerce hecho con ReactJs w/Redux del lado del cliente, Y Node w/ExpressJS como lado del servidor junto con MongoDB w/MongoDB Atlas',
    img: Shopping,
    link: 'https://effulgent-frangipane-145685.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Dashboard de Temperatura y Humedad',
    desc:
      'Proyecto para mi curso de Arquitectura de Computadoras de la Universidad. Trata sobre una aplicación web que provee un pequeño dashboard de la temperatura y humedad conectada a una base de datos en la nube.',
    img: Dashboard_temp,
    link: 'https://astounding-travesseiro-3a604c.netlify.app/',
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
    name: 'Seiko Hub',
    desc:
      'Sitio web que permite la subida de videos donde se puede interactuar con los usuarios. (No accesible por seguridad xD se puede ver en mi github)',
    img: Seiko,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Mapas con Angular',
    desc:
      'Aplicación web que muestra la ubicación en tiempo real del usuario. También, permite buscar direciones y colocar indicaciones en pantalla.',
    img: Maps_Angular,
    link: 'https://angular-maps-chapter.netlify.app/',
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
