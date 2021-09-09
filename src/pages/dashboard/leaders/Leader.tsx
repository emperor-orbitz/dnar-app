import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import MiniGraph from "../../../components/MiniGraph";
import Price from "../../../components/PercentChange";
import '../style.scss';
import { LeaderI } from "../../../store/types";

export default function Leader(props: LeaderI): ReactElement {
    const { name, price_change_percentage_24h, symbol, current_price, image, id } = props;

    return (
        <Link to={'/coin/'+id}>
            <div className='leader-box'>

                <img alt={id} src={image} className='image' />

                <div className='title'>
                    <h4>{name}({symbol})</h4>
                </div>

                <div className='graph'>
                    <MiniGraph id={id} price_change={price_change_percentage_24h} />
                </div>

                <div className='increase'>
                    <Price currency='$' price={price_change_percentage_24h} />
                </div>

                <div className='price'>
                    ${current_price}
                </div>

            </div>
        </Link>
    )
}