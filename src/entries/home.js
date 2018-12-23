import React from 'react';
import { render } from 'react-dom'
import ReactDom from 'react-dom';
import Home from '../pages/containers/home'
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';


const home = document.getElementById('home-container')
// const hola = <h1>Hola Mundo Amigos! buenas tardes</h1>


// ReactDom.render(que voy a renderizar, donde lo hare )
render(<Home data={data}/>, home);
