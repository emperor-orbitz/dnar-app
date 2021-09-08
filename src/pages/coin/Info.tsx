import  {ReactElement } from 'react';
import { useLocation, useParams } from 'react-router';
import Loader from '../../components/Loader';
import '../../styles/App.scss';
import useInfo from './useInfo';


function Info(props:any): ReactElement {
    const param:any = useParams();
    const {state} = useLocation();
    const [data] = useInfo(param.id);

    return (
        <div>
                {
                    Object.keys(data).length === 0 ?
                    <Loader w={100} h={100} />
                    :
                    <div style={{position:"relative", padding:'20px 10px', }}>
                        <img src={data.image.small} style={{height:'50px', width:'50px',right:'0', top:'-25px', position:'absolute'}} /> 
                        <h3>Info Card</h3>
                       
                              <span>Description</span><br/><br/>

                        <div style={{maxWidth:'80%'}}>
                        <p style={{fontSize:'12px', wordWrap:'break-word', lineHeight:'14px'}}>
                            {data.description['en'].substring(0,180)}...
                        </p>
                        <p>Facts</p>
                        <hr/>
                        <p>Hashing Algorithm:</p>
                        <p>Country Origin: {data.country_origin || 'NA'}</p>
                        <p>Category: {data.country_origin || 'NA'}</p>

                        </div> 
                    </div>
                }
        </div>
    );
}



export default Info;
