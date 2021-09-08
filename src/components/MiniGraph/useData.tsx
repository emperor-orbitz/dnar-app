import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface MiniGraphI{
    id?:string | any,
    price_change:number
}

function useData(id:any):Array<any> {
    const [maps, setMaps] = useState([[],[]]);

    async function fetchGraph(){
        const xy =[[],[]];
        const now = Math.floor(new Date().getTime()/1000);
        const before = now - 36000;

        try {
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${before}&to=${now}&timestamp=${now}`)
            data.prices.forEach((v:Array<never>)=>{
                xy[0].push(v[0])
                xy[1].push(v[1]);
            })
            setMaps(xy); 

        } catch (error) { console.error('Error @ useData MiniGraph') }
    }

    useEffect(()=>{
        fetchGraph();
    }, []);

 return [maps];
}

export default useData;
