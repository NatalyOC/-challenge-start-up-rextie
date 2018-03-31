import React from 'react';
import '../App.css';

const Exchange =()=>(
  <div className="container">
    <div className="row">
      {/* <div className="col-lg-12">
        <div>
          <label>Importe:</label>
          <input type="text" placeholder="Importe"/>
        </div>
      </div> */}
      <div className="form-group col-sm-6 col-md-3">
                            <h4 className="title espacio">Selecciona la Moneda Extranjera</h4>
                            <label>¿Qué moneda quieres?</label>
                            <div claclassNamess="">
                                <select className="full-width seleccion select2-hidden-accessible" id="seleccionCompra" style={{width:'304px'}} tabindex="-1" aria-hidden="true">
                                    <option value="" selected=""></option>
                                    <option id="opt_USD" value="USD">Estados Unidos - Dolar USA</option> 
                                    <option id="opt_PEN" value="PEN">Perú - Nuevo Sol Peru</option> 
                                </select>
                                <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" style={{width:'304px'}}>
                                <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="1" aria-labelledby="select2-seleccionCompra-container">
                                <span className="select2-selection__rendered" id="select2-seleccionCompra-container" title="Estados Unidos - Dolar USA">Estados Unidos - Dolar USA</span>
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
    </div>
  </div>

)

export default Exchange;