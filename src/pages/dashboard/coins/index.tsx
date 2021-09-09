import { ReactElement } from "react";
import './style.scss';
import Coin from './Coin';
import useCoins from "./useCoins";
import { CoinI } from "../../../store/types";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

function AllCoin(props: any): ReactElement {
    const [data] = useCoins(props.coins);
// 
    return (
        <div className='all-coins'>
            <h3> All Coins</h3>
            <div className='coin-container'>
                {props.coins.length === 0 ? 
                <Loader h={100} w={100} />
                :
                props.coins.map((v: CoinI, i: number) => (<Coin {...v} key={i} />))
                }
            </div>
        </div>
    );
}

const mapStateToProps = function(state:any){
    
    return {...state};
}

export default connect(mapStateToProps)(AllCoin);