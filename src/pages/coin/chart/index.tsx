import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';


// var config:any = {
//     config: {
//         displayModeBar: false,
//         showAxisDragHandles: false,
//         displaylogo: false

//     },
//     layout: {
//         hovermode: false,
//         xaxis: {
//             showgrid: false,
//             color: 'rgba(0,0,0,0)'
//         },
//         yaxis: {
//             showgrid: false,
//             color: 'rgba(0,0,0,0)'
//         },
//         width: 200, height: 40, margin: {
//             l: 2,
//             r: 2,
//             b: 2,
//             t: 5,
//             pad: 4
//         }, font: { size: 10 }, showlegend: false, autosize: false, paper_bgcolor: 'rgba(0,0,0,0)',
//         plot_bgcolor: 'rgba(0,0,0,0)',
//     }
// }



var config:any = {
        config: {
            displayModeBar: false,
            showAxisDragHandles: false,
            displaylogo: false
    
        },
        layout: {
			// autosize: true,
			margin: {
				l: 10,
				r: 10,
				t: 35,
				pad: 3,
			},
            font: { size: 5 },
			showlegend: false,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
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
    const [data, setData] =  useState<any>({});

	useEffect(() => {
		fetchData().then((chartData:any) => {
			// initChart(chartData);
            setData(chartData);
			setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
		});
	}, []);

	const fetchData = async () => {
		let data:{index:Array<any>, price:Array<any>, volumes:Array<any>} = { index: [], price: [], volumes: [] };
		let result:any = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=1m");
        console.log(result, 'Result.price sis iterable oo')
		for (var item of result.data.prices) {
			data.index.push(item[0]);
			data.price.push(item[1]);
		}
		for (const item of result.data.total_volumes) data.volumes.push(item[1]);
		return data;
	};

	const initChart = (data:any) => {
		let trace_price = {
			name: "Price ($)",
			x: data.index.map((t:any) => new Date(t)),
			y: data.price,
			xaxis: "x",
			yaxis: "y1",
			type: "scatter",
			mode: "lines+markers",
			marker: { color: "blue", size: 3 },
		};
		// let trace_volumes = {
		// 	name: "Volumne ($B)",
		// 	x: data.index.map((t:any) => new Date(t)),
		// 	y: data.volumes,
		// 	xaxis: "x",
		// 	yaxis: "y2",
		// 	type: "bar",
		// 	barmode: "relative",
		// 	marker: {
		// 		color: "rgb(49,130,189)",
		// 		opacity: 0.7,
		// 	},
		// };
		let layout = {
			autosize: true,
			height: "100%",
			margin: {
				l: 50,
				r: 20,
				t: 35,
				pad: 3,
			},
			showlegend: false,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.1],
				anchor: "x",
			},
			grid: {
				roworder: "bottom to top",
			},
		};
		let config = { responsive: true };
		let series = [trace_price];
		// Plotly.newPlot("chart", series, layout, config);
//}
    }

    return (
     
                <div className='big-chart'>
                 {console.log(data, 'latestPrice')}
                    {Object.keys(data).length > 0? 
                          <Plot
                            className='big-maxi-plots'
                          
                            config={config.config}
                            data={[
                              {
                                  x: [...data.index.map((t:any) => new Date(t))],
                                  y: [...data.price],
                                type: "scatter",
                              
                                mode: "lines",
                                marker: { color: 'green' }
                              }
                            ]}
                  
                            layout={config.layout}
                          />
                
                
                    :
                    
                    <div>Loading.....</div>
                    
                    
                    }
              

                </div>
            
    );
}

// x: [200,300,400,500,600],
// y: [0.4,0.5,0.6,0.2, 0.9],
const mapStateToProps = (state: any, ownProps: any) => ({ ...state, ...ownProps });


export default connect(mapStateToProps)(Chart);
