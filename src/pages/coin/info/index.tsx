import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import Loader from '../../../components/Loader';
import useInfo from './useInfo';
import '../styles.scss';
import DataList from './DataLists';
// import { pa } from './parseHistoryData';
import { parseHistoryData } from '../../../utilities/parseHistoryData';

function Info(props: any): ReactElement {
    const param: any = useParams();
    const [data] = useInfo(param.id);

    const data1 = [
        { key: 'Country Origin', value: 'country_origin' },
        { key: 'Hashing Algorithm', value: 'hashing_algorithm' },
        { key: 'Category', value: 'categories' },
    ];
    const data2 = [
        { key: 'Max Supply', value: 'max_supply' },
        { key: 'Circulating Supply', value: 'circulating_supply' },
        { key: 'Total Supply', value: 'total_supply' },
    ];

    return (
        <div>
            {
                Object.keys(data).length === 0 ?
                    <Loader w={100} h={100} />
                    :
                    <div className='info-box'>
                        <img alt='Coin' src={data.image.small} />
                        <h3 className='white'>History</h3>

                        <span className='description'>Description</span>

                        <div style={{ maxWidth: '100%' }}>
                            <p className='description-html'>
                                {/**TODO: Convert To HTML Safely */}
                                {data.description['en'].substring(0, 150)}...
                            </p>
                            <br></br>

                            <span className='description'>Facts</span>
                               <DataList data={parseHistoryData(data)} maps={data1} />

                            <br></br>

                            <div className='numbers-box'>
                                <DataList data={parseHistoryData(data)} maps={data2} />
                            </div>

                        </div>
                    </div>
            }
        </div>
    );
}



export default Info;
