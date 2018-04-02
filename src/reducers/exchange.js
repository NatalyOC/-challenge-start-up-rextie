import {CONVERT_AMOUNT} from '../actions';

const INITIAL_STATE={
  amount:0,
  abc:0
}


const Reducer=(state=INITIAL_STATE,action)=>{
  console.log(action)
  //const { payload } = action;
 console.log(action.type)
  switch (action.type){
    case CONVERT_AMOUNT:
    return{
      ...state,
      amount:3,
      abc:action.payload*2
    }
    
    default:
        return state;
  }
}

export default Reducer;