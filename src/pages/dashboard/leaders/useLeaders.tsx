import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_LEADERS } from '../../../store/leaders.actions';

function useLeaders(store:any): Array<any> {

    const dispatch = useDispatch();

    async function fetchLeaders() {

        try {
            const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h')
            dispatch({type:LOAD_LEADERS, payload: data.data});

        } catch (error) { console.error('Error @ useData MiniGraph') }
    }


    useEffect(() => {
        if (store.length === 0) fetchLeaders();
    },[]);

    return [store];
}

export default useLeaders;
