import React from 'react';
import Rate from './Rate';
import Exchange from '../containers/Exchange';
import '../App.css';


const MainDetails =()=>(
<main className="main col-sm-12 col-md-8 col-lg-8"> 
  <div className="row">
  <div className="col-lg-6 offset-lg-3">
  <div className="main-container ">
        <p>Cambio de Dólares Online</p>
        <p>Seguro, Rápido y al mejor Precio</p>
        <Rate/>
  </div>
  </div>
  </div>
  <div className="col-lg-6 offset-lg-3">
  <Exchange/>  
  </div>
</main>
)

export default MainDetails;