import { ReactElement, useEffect, useState } from 'react';
function DataList(props: any): ReactElement {
    const [updates, setUpdates] = useState<any>({});
    useEffect(() => {
        if (Object.keys(props.data).length > 0) setUpdates(props.data);
    }, [props.data]);

    return (
        <div>
            {
                Object.keys(updates).length > 0 ?
                
                    props.maps.map((v: any, i: number) =>
                    (
                        <p className='description-item' key={i}>
                            <span className='key'>{v.key}:</span>
                            <span className='value'>{updates[v.value] || 'Unknown'}</span>
                        </p>
                    ) )
                    :
                    <></>
            }
        </div>
    );
}



export default DataList;
