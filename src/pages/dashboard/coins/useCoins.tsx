import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_COINS } from '../../../store/coins.actions';


function useCoins(store?: any, dispatch?: any): Array<any> {
    const dispatchFn = useDispatch();


    async function fetchCoins() {
        try {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            dispatchFn({ type: LOAD_COINS, payload: data });
        } catch (error) { console.error('Error @ useData MiniGraph') }
    }

    useEffect(() => {
        if (store.length === 0) fetchCoins();
    },[]);

    return [store];
}

export default useCoins;
