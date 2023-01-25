import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {HomeIndex} from './components/homeComponent/HomeIndex';
import { RepositoryIndex } from './components/repository-component/RepositoryIndex';
import {AvatarImg} from './Helpers/AvatarImg';
import '../src/wwwroot/_Navbar.css';

//npm install @mui/icons-material
import MenuIcon from '@mui/icons-material/Menu';

function App() {  
  return (
    <Fragment>
      

    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"><MenuIcon/></i>
        </label>
        <a href="#" class="enlace">
        <AvatarImg 
          urlImg = 'https://img.wattpad.com/0227e689fb13e2f2b397fcd91aa45a4f68807fae/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d71454769566b7646754d4773413d3d2d32362e313630643937663637333934326637323934313532333132303336312e6a7067?s=fit&w=720&h=720'
          sizeImg = {45}
        />
        </a>
        <h1>Andy Bernal - CV</h1>
        <ul>
            <li><a class="active" href="/">Inicio</a></li>
            <li><a href="/repository/index">Portafolio</a></li>
            <li><a href="https://github.com/AndyExploit" target="_blank">GitHub</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeIndex/>} />
            <Route path='/repository/index' element={<RepositoryIndex/>} />
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
