import  {ReactElement } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import SideNav from '../../components/SideNav';
import '../../styles/App.scss';
import Search from '../dashboard/Search';
import Info from './Info';


function Coin(props:any): ReactElement {
    const param:any = useParams();
    const {state} = useLocation();

    console.log(param.id, state)
    return (
        <div className='body'>

            <SideNav />

            <section className="main-content">
                <Search />
                <div style={{marginTop:'20px', padding:'20px', width:'97%', background:'#241f2a', height:'250px'}}>        
                    <p style={{textAlign:'center'}}>Big Chart Here</p>
                </div>
            </section>
            <section className='right'>
                <div className='news-container'>
                    <Info/>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state: any, ownProps:any) => ({ ...state,...ownProps });


export default connect(mapStateToProps)(Coin);
