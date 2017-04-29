import { FETCH_POSTS, FETCH_POST } from '../actions'
import _ from 'lodash';
export default function(state = {}, action){
    switch (action.type){
        case FETCH_POST:
            const post = action.payload.data;
            // this would be ES5
            // const newState = {
            //     ...state

            // };
            // newState[post.id] = post;
            // return newState

            // ES6
            // key value pair
            return{
                ...state, 
                [action.payload.data.id]:action.payload.data
            }
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}