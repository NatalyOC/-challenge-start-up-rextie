import React from 'react';
import Rate from './Rate';
import Exchange from '../containers/Exchange';
import '../App.css';


const MainDetails =()=>(
<main className="main col-sm-12 col-md-10 col-lg-10">  
  <div className="main-container">
        <p>Cambio de Dólares Online</p>
        <p>Seguro, Rápido y al mejor Precio</p>
        <Rate/>
  </div>      
  <Exchange/>  
</main>
)

export default MainDetails;