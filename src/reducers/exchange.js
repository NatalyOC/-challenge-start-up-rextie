
const state_Initials={
  amount:0,
  amount_f:0,
};


const Reducer=(state=state_Initials,action)=>{
  console.log(action)
  //const { payload } = action;

  switch (action.type){
    case 'CONVERT':
    return{
      ...state,
      amount_f:action.payload
    }
    break;
    default:
        return state;
  }
}

export default Reducer;