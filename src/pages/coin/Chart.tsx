import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { useParams } from 'react-router';
import Loader from '../../components/Loader';


var config: any = {
    config: {
        displayModeBar: false,
        showAxisDragHandles: false,
        displaylogo: false,
        responsive: true,
    },
    layout: {
        hovermode: true,
        autosize: true,
        xaxis: {
            showgrid: false,
            color: 'white',
            anchor: 'x'
        },
        yaxis: {
            showgrid: false,
            color: 'white',
            anchor: 'y'
        },
        margin: {
            l: 50,
            r: 10,
            t: 30,
            pad: 10
        },
        font: { size: 10 },
        height: "80%",
        showlegend: false, paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',

        yaxis2: {
            showticklabels: false,
            domain: [0, 0.1],
            anchor: "x",
        },
        grid: {
            roworder: "bottom to top",
        },
    }
}



function Chart(props: any): ReactElement {
    const [latestPrice, setLatestPrice] = useState<any>(0);
    const [data, setData] = useState<any>({});
    const param: any = useParams();

    useEffect(() => {
        fetchData().then((chartData: any) => {

            setData(chartData);
            setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
        });
    }, []);

    const fetchData = async () => {
        let data: { index: Array<any>, price: Array<any>, volumes: Array<any> } = { index: [], price: [], volumes: [] };
        let result: any = await axios.get("https://api.coingecko.com/api/v3/coins/"+param.id+"/market_chart?vs_currency=usd&days=30&interval=1d");

        for (var item of result.data.prices) {
            data.index.push(item[0]);
            data.price.push(item[1]);
        }
        for (const item of result.data.total_volumes) data.volumes.push(item[1]);
        return data;
    };



    return (

        <div className='big-chart'>

            {Object.keys(data).length > 0 ?
                <>
                    <h3>Current Price: ${latestPrice}</h3>
                    <Plot
                        config={config.config}
                        data={[
                            {
                                x: [...data.index.map((t: any) => new Date(t))],
                                y: [...data.price],
                                type: "scatter",

                                mode: "lines",
                                marker: { color: '#3f6eff' }
                            }
                        ]}
                        style={{ height: '80%', width: '95%', fontSize: '12px' }}
                        layout={config.layout}
                    />
                </>
                :
                <Loader w={20} h={20} />


            }


        </div>

    );
}



export default Chart;
