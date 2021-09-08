import axios from 'axios';
import  {ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import SideNav from '../../components/SideNav';
import '../../styles/App.scss';
import Search from '../dashboard/Search';


function useInfo(id:string): Array<any> {
    const [data, setData] = useState({});


    async function fetchCoin(){
        try {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?community_data=false&developer_data=false`)
            setData(data);
        } catch (error) { console.error('Error @ useInfo MiniGraph') }
    }

    useEffect(()=>{
        fetchCoin()
    }, []);

 return [data];
}



export default useInfo;
