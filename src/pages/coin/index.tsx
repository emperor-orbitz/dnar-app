import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import SideNav from '../../components/SideNav';
import Search from '../dashboard/Search';
import Chart from './Chart';
import Info from './info';


function Coin(props: any): ReactElement {
    const param: any = useParams();
    const { state } = useLocation(); 

    return (
        <div className='body'>

            <SideNav />

            <section className="main-content">
                <Search />
                <Chart/>
            </section>
            <section className='right'>
                    <Info />
            </section>
        </div>
    );
}

const mapStateToProps = (state: any, ownProps: any) => ({ ...state, ...ownProps });


export default connect(mapStateToProps)(Coin);
