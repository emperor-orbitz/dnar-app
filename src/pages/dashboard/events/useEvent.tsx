import axios from 'axios';
import { useEffect, useState } from 'react';

function useEvent(): Array<any> {
    const [data, setData] = useState<any>([]);

    async function fetchCoins() {

        try {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/events`)
            console.log(data.data, "datagram")
            setData([...data.data]);
        } catch (error) { console.error('Error @ useData MiniGraph') }
    }

    useEffect(() => {
        fetchCoins();
    }, []);

    return [data];
}

export default useEvent;
