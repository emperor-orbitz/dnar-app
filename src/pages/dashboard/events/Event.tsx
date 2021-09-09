import React, { ReactElement } from 'react';
import './style.scss';

import { AiOutlineLink } from "react-icons/ai";


function Event(props: any): ReactElement {
    return (
        <div className='event-card' style={{ backgroundImage: `url(${props.screenshot})`}}>
            <div className='card-screen' style={{ background: '#17151d', borderRadius: '5px', position: 'absolute', bottom: '0', padding: '10px',  boxShadow: '3px 3px 102px -2px rgba(11,8,8,0.56)', color: 'white', }}>
                <h5>{props.title}</h5>
                <p style={{ fontSize: '12px', lineHeight: '14px' }}>{props.description.substring(0, 100)}..</p>
                <span><AiOutlineLink style={{ padding: '5px', background: 'black', borderRadius: '3px' }} /></span>
            </div>
        </div>
        // </a>
    );
}

export default Event;
