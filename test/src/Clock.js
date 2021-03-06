import './App.css';
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import 'moment-timezone';

function Clock() {
  const watch = useSelector((state)=>state);
  const [time,setTime] = useState('')
    setTimeout(() => {
        setTime(new Date().toLocaleTimeString('ru-Ru',{timeZone:watch.timezoneLeft.timezone_left}))
        document.querySelector('#second').style.transform = 'rotate('+360/60*new Date().getSeconds()+'deg)'
        document.querySelector('#minute').style.transform = 'rotate('+360/60*new Date().getMinutes()+'deg)'
        document.querySelector('#hour').style.transform = 'rotate('+360/12*new Date().toLocaleTimeString('ru-Ru',{timeZone:watch.timezoneLeft.timezone_left}).slice(0,2)+'deg)'
        }
       , 1000);

  return (
      <div>
          <div className="circle">
              <div className="c12"></div>
              <div className="c11"></div>
              <div className="c10"></div>
              <div className="c9"></div>
              <div className="c8"></div>
              <div className="c7"></div>
              <div className="c6"></div>
              <div className="c5"></div>
              <div className="c4"></div>
              <div className="c3"></div>
              <div className="c2"></div>
              <div className="c1"></div>
              <div id="hour"></div>
              <div id="minute"></div>
              <div id="second"></div>
          </div>
          <p className="app_clock">{time}</p>
      </div>

  );
}

export default Clock;
