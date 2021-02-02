import './App.css';
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";


function Clock2() {
    const watch = useSelector((state)=>state);
    const [time,setTime] = useState('')

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString('ru-Ru',{timeZone:watch.timezoneRight.timezone_right}))
        document.querySelector('#second_right').style.transform = 'rotate('+360/60*new Date().getSeconds()+'deg)'
        document.querySelector('#minute_right').style.transform = 'rotate(' + 360 / 60 * new Date().getMinutes() + 'deg)'
        document.querySelector('#hour_right').style.transform = 'rotate(' + 360 / 12 * new Date().toLocaleTimeString('ru-Ru', {timeZone: watch.timezoneRight.timezone_right}).slice(0, 2) + 'deg)'
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
              <div id="hour_right"></div>
              <div id="minute_right"></div>
              <div id="second_right"></div>
          </div>
          <p className="app_clock">{time}</p>
      </div>

  );
}

export default Clock2;
