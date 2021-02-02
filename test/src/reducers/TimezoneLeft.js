import React from 'react'

  const initialState = {
    timezone_left: 'asia/Krasnoyarsk',
  }


const timezoneLeftReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LEFT':
        return {timezone_left:action.timezone_left};

    default:
      return state;
  }
}


export default timezoneLeftReducer