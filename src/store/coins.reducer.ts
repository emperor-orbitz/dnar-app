
import { LOAD_COINS } from "./coins.actions";
const STORE:Array<any> = [];

export default function reducers(store = STORE, action:any){
    var data = action.payload;

    switch(action.type){

        case LOAD_COINS:
            return  [...data];
       
        default:
            return store;
    }
       
}