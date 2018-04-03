import React from 'react';
import Rate from './Rate';
import Exchange from '../containers/Exchange';
import '../App.css';


const MainDetails =()=>(
<div className="row main">  
  <div className="col-sm-12 col-md-6 offset-md-4 col-lg-4 offset-lg-3 text-center">
      <div className="main-container">
        <p>Cambio de Dólares Online</p>
        <p>Seguro, Rápido y al mejor Precio</p>
        <Rate/>
      </div>      
      <Exchange/>
  </div>
</div>
)

export default MainDetails;