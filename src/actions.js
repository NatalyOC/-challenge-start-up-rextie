export const CONVERT_AMOUNT ='CONVERT_AMOUNT';
export function convertAmount(num){
  return {
      type: CONVERT_AMOUNT,
      payload: num
  };
}