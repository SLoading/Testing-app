import {combineReducers} from 'redux';
import ClockReducer from './Clock';



const allReducers = combineReducers({
    clock: ClockReducer,
});

export default allReducers