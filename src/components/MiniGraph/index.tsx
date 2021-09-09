
import React, { ReactElement } from 'react';
import Plot from 'react-plotly.js';
import config from './config';
import useData from './useData';
import Loader from '../Loader';

interface MiniGraphI {
  id?: string | any,
  price_change: number
}
function MiniGraph({ id, price_change }: MiniGraphI): ReactElement {
  const [maps] = useData(id);

  return (
    <>
      {maps[0].length === 0 ?

        <Loader w={100} h={100} />
        :
        <Plot
          className='small-mini-plots'
          config={config.config}
          data={[
            {
              x: [...maps[0]],
              y: [...maps[1]],
              type: "scatter",
              mode: "lines",
              marker: { color: price_change > 0 ? 'green' : 'red' }
            }
          ]}

          layout={config.layout}
        />
      }
    </>);
}

export default MiniGraph;
