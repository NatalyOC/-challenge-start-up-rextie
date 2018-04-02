export function convertAmount(amount){
  return {
    type:'CONVERT',
    payload:{
      amount
    }

  }
}