import React from 'react';
import {rateContants} from '../constants';

const Rate =()=>(
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h6>Tipo de Cambio : <span className="badge badge-greend">Compra : {rateContants.RATE_BUY}</span> <span className="badge badge-blue">Venta : {rateContants.RATE_SALE}</span></h6>
      </div>
    </div>
  </div>

)
export default Rate;
