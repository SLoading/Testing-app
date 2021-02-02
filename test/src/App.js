import './App.css';
import React,{useState,useEffect} from 'react';
import Moment from 'react-moment';
import moment from 'moment';

function App() {
  const [timeLeft,setTimeLeft] = useState(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds());
  const [timeRight,setTimeRight] = useState(new Date().getHours()-4+":"+new Date().getMinutes()+":"+new Date().getSeconds());
  const [left_watch,setLeft_watch] = useState('Krasnoyarsk');
  const [right_watch,setRight_watch] = useState('Moscow');
  const [sec,setSec] = useState(new Date().getSeconds())
  const [minute,setMinute] = useState(new Date().getMinutes());
  const [hour,setHour] = useState(new Date().getHours())

    setInterval(() => {
        setTimeLeft(moment().format("hh:mm:ss"))
        document.querySelector('#second').style.transform = 'rotate('+360/60*new Date().getSeconds()+'deg)'
        if(new Date().getSeconds() == 0){
        document.querySelector('#minute').style.transform = 'rotate('+360/60*new Date().getMinutes()+'deg)'
        document.querySelector('#hour').style.transform = 'rotate('+360/12*new Date().getHours()+'deg)'}
        if(new Date().getMinutes() == 0){
        document.querySelector('#hour').style.transform = 'rotate('+360/12*new Date().getHours()+'deg)'}
        }, 1000);
  const left = (e) => {
      setLeft_watch(e.target.value)
  }

  const right = (e) => {
      setRight_watch(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <div className="left_watch">
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
                  <p className="app_clock">{timeLeft}</p>
                  <form className="form_left">
                      <select value={left_watch} onChange={left}>
                          <option value={"Kaliningrad"}>Калининград</option>
                          <option value={"Vladivostok"}>Владивосток</option>
                          <option value={"Krasnoyarsk"}>Красноярск</option>
                          <option value={"Moscow"}>Москва</option>
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
