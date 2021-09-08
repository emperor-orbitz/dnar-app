import React, { ReactElement } from 'react';

interface PriceColorI{
    currency:string,
    price:number
}
function PercentChange({currency,price}:PriceColorI):ReactElement {
  return(
  <>
        {
            price < 0 ? <span style={{color:'red'}}>{price}%</span> : <span style={{color:'green'}}>{price}%</span>
        }
  </>); 
}

export default PercentChange;
