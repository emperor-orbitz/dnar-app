
import { LOAD_LEADERS } from "./leaders.actions";

const STORE:Array<any> = [];

export default function reducers(store = STORE, action:any){
    var data = action.payload;

    switch(action.type){

        case LOAD_LEADERS:
            return  [...data];
       
        default:
            return store;
    }
       
}