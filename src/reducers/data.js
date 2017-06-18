import {GETVALUE} from '../actions'

export default function (state={},action={}) {
    console.log(action);
    switch(action.type){
        case GETVALUE:
            return {...state, data:action.username};
        default:
            return state;
    }
}