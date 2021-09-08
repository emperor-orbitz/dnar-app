import React, { ReactElement } from 'react';
import '../styles/App.scss';

import ReactLoading from 'react-loading';

function Loader(props: {w:number, h:number}): ReactElement {
  return (

        <div style={{ padding:'5% 45%'}}>
          <ReactLoading type={"bubbles"} color={"white"} height={props.h} width={props.w} />
        </div>
  );
}


export default Loader;
