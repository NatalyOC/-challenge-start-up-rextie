
const state_Initials={
  amount:0,
  abc:0,
};


const Reducer=(state=state_Initials,action)=>{
  console.log(action)
  const { payload } = action;
 console.log(action.type)
  switch (action.type){
    case 'CONVERT':
    return{
      ...state,
      abc:action.payload,
    }
    
    default:
        return state;
  }
}

export default Reducer;