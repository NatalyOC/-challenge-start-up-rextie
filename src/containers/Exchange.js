import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Exchange =({convert})=>(
  <div>
    <input type="text"  onChange={(e)=>convert(e.target.value)} />
    <input type="text" value={convert.amount_f} />
  </div>
)

const mapStateToProps = ({ state }) => ({
  state,
});



const mapDispatchToProps = (dispatch) => ({
  convert: () => {
    dispatch({ type: 'CONVERT'})
  }
});



export default connect (mapStateToProps,mapDispatchToProps)(Exchange);