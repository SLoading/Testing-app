import React from 'react'

  const initialState = {
    timezone: 'GMT+07:00',
  }


const clockReducer = (state = initialState, action) => {
  switch(action.type){
    case 'TIMEZONE':
        return {timezone:action.timezone};

    default:
      return state;
  }
}


export default clockReducer