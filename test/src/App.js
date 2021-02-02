import './App.css';
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import Moment from 'react-moment';
import moment from 'moment';
import Clock from './Clock';

function App() {
  const [timeLeft,setTimeLeft] = useState(moment().utcOffset('GMT+07:00').format("hh:mm:ss"));
  const [left_watch,setLeft_watch] = useState('GMT+07:00');
  const [right_watch,setRight_watch] = useState('Moscow');
  const watch = useSelector((state)=>state);
  const dispatch = useDispatch();

  let left_interval =   setTimeout(() => {
            setTimeLeft(moment().utcOffset(left_watch).format("hh:mm:ss"))
       }
       , 1000);

  const left = (e) => {
      setLeft_watch(e.target.value)
      dispatch({type:"TIMEZONE","timezone":e.target.value})
  }

  const right = (e) => {
      setRight_watch(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <div className="left_watch">
                  <Clock/>
                  <p className="app_clock">{timeLeft}</p>
                  <form className="form_left">
                      <select value={left_watch} onChange={(e)=>left(e)}>
                          <option value={"GMT+02:00"}>Калининград</option>
                          <option value={"GMT+10:00"}>Владивосток</option>
                          <option value={"GMT+07:00"}>Красноярск</option>
                          <option value={"GMT+03:00"}>Москва</option>
                      </select>
                  </form>
              </div>
              {/*<div className="right_watch">*/}
              {/*    <div className="circle">*/}
              {/*        <div id="hour"></div>*/}
              {/*        <div id="minute"></div>*/}
              {/*        <div id="second"></div>*/}
              {/*    </div>*/}
              {/*    <p className="app_clock">Текущее время: {timeRight}</p>*/}
              {/*          <form>*/}
              {/*        <select value={right_watch} onChange={right}>*/}
              {/*            <option value={"Kaliningrad"}>Калининград</option>*/}
              {/*            <option value={"Vladivostok"}>Владивосток</option>*/}
              {/*            <option value={"Krasnoyarsk"}>Красноярск</option>*/}
              {/*            <option value={"Moscow"}>Москва</option>*/}
              {/*        </select>*/}
              {/*    </form>*/}
              {/*</div>*/}
          </div>
      </header>
    </div>
  );
}

export default App;
