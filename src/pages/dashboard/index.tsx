import React, { ReactElement } from 'react';
import './style.scss';

import Leader from './leaders';
import SideNav from '../../components/SideNav';
import Coins from './coins';
import Events from './events';
import Search from './Search';

function Dashboard(props: any): ReactElement {


    return (
        <div className='body'>

            <SideNav />

            <section className="main-content">
                <div style={{ width: '100%', position: 'relative', boxSizing: 'border-box' }}>
                    <Search />
                    <Leader />
                    <Coins />
                </div>

            </section>

            <Events />
        </div>
    );
}

export default Dashboard;
