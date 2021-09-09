import React, { ReactElement } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import './style.scss';
import { CoinI } from "../../../store/types";

export default function Coin(props: CoinI): ReactElement {
    const { name, current_price, image, id } = props;
    return (
        <div className='coin'>
            <Link to={{
                pathname: `/coin/${id}`,
                state: {
                    data: props
                }
            }} style={{ height: '100%', width: '100%' }}>

                <img alt={id} src={image} style={{ height: '40px', width: '40px', marginTop: '5px', display: 'inline-block' }} />
                <p>{name}</p>
                <b className='price'>USD {current_price}</b>
                <p className='high_low'>
                    <AiFillCaretUp color='green' /> <span style={{ color: 'green' }}>${props.high_24h}</span>
                    &nbsp;&nbsp;
                    <AiFillCaretDown color='red' /> <span style={{ color: 'red' }}>${props.low_24h}</span>
                </p>
            </Link>

        </div>
    )
}