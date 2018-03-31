import React from 'react';
import {rateContants} from '../constants';

const Rate =()=>(
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h5>Tipo de Cambio: <span class="badge badge-secondary">Compra: {rateContants.RATE_BUY}</span> <span class="badge badge-secondary">Venta:{rateContants.RATE_SALE}</span></h5>
      </div>
    </div>
  </div>

)
export default Rate;
