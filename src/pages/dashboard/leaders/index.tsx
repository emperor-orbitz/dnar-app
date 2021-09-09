import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import '../../../styles/App.scss';

import Leader from './Leader';
import useLeaders from './useLeaders';
import Loader from '../../../components/Loader';

function Leaders(props: any): ReactElement {
  const [leaders] = useLeaders(props.leaders);

  return (

    <div className='market-leaders'>
      <h3>Market Leaders</h3>
      {props.leaders.length === 0 ?
        <Loader w={100} h={100} />

        :
        props.leaders.map((v: any, i: number) => (<Leader key={i} {...v} />))
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({ ...state });


export default connect(mapStateToProps)(Leaders);
