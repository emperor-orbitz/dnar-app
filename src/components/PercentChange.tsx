import React, { ReactElement } from 'react';
import './styles.scss';

interface PriceColorI{
    currency:string,
    price:number
}
function PercentChange({currency,price}:PriceColorI):ReactElement {
  return(
  <>
        {
            price < 0 ? <span className='red'>{price}%</span> : <span className='green'>{price}%</span>
        }
  </>); 
}

export default PercentChange;
