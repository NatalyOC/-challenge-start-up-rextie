import React from 'react';
import { connect } from 'react-redux';
//import {convert} from '../actions';
import '../App.css';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions';

const Exchange =({convert,valor})=>(
 /*  <div>
    <label>Tengo:</label>
    <input type="text" value={valor} onChange={(e)=> convert(e.target.value)} />
    <input type="text"  />
  </div> */ 
  <div>  
    <div className="input-group col-12">
        <label /* class="input-group-text" */>Tengo:</label>
        <input type="text" className="form-control" onChange={e=>{convert(e.target.value)}}/>
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">$ Dolares </span>
        </div>
      </div>
      <div className="input-group col-12">
        <label /* class="input-group-text" */>Recibo</label>
        <input type="text" className="form-control"/>
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">S/  Soles</span>
        </div>
      </div>
  </div>
)

const mapStateToProps = ({ state }) => ({
  state,
});


const mapDispatchToProps = (dispatch) => ({
  convert: (num) => {
    dispatch({ type: 'CONVERT_AMOUNT', payload:num})
  }
}); 



export default connect (mapStateToProps,mapDispatchToProps)(Exchange);