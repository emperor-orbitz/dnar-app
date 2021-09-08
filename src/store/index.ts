import { combineReducers, createStore } from "redux";
import LeadReducer from './leaders.reducers';
import CoinReducer from './coins.reducer';

const combinedReducers = combineReducers({
    leaders: LeadReducer,
    coins: CoinReducer
})


export default createStore(combinedReducers);