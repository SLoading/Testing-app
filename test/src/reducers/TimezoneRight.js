import React from 'react'

  const initialState = {
    timezone_right: 'europe/Moscow',
  }


const clockReducer = (state = initialState, action) => {
  console.log(action.timezone_right)
  switch(action.type){
    case 'RIGHT':
        return {timezone_right: action.timezone_right};

    default:
      return state;
  }
}


export default clockReducer