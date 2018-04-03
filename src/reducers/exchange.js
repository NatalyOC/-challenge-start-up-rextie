import {CONVERT_AMOUNT} from '../actions';

const INITIAL_STATE={
  amount_t:0,
  amount_q:0
}


const Reducer=(state=INITIAL_STATE,action)=>{
  console.log(action.payload)
  //const { payload } = action;
 //console.log(action.type)
  switch (action.type){
    case CONVERT_AMOUNT:
    return[
      ...state,
      {amount_t:action.payload,
        amount_q:action.payload*3.246}
    ]
    
    default:
        return state;
  }
}

export default Reducer;