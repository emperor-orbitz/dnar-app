import React, { ReactElement } from 'react';
import '../styles/App.scss';
import ReactLoading from 'react-loading';

function Loader({w, h}:{w:number, h:number}): ReactElement {
  return (

        <div style={{ padding:'5%'}}>
          <ReactLoading type={"bubbles"} color={"white"} height={h} width={w} />
        </div>
  );
}


export default Loader;
