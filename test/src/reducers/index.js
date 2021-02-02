import {combineReducers} from 'redux';
import TimezoneRight from './TimezoneRight';
import TimezoneLeft from "./TimezoneLeft";



const allReducers = combineReducers({
    timezoneRight: TimezoneRight,
    timezoneLeft: TimezoneLeft
});

export default allReducers