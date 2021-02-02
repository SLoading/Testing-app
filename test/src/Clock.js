import './App.css';
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import Moment from 'react-moment';
import moment from 'moment';

function Clock() {

  const watch = useSelector((state)=>state);
    setTimeout(() => {
        let count = 0;
        document.querySelector('#second').style.transform = 'rotate('+360/60*new Date().getSeconds()+'deg)'
        if( count == 0){
            document.querySelector('#minute').style.transform = 'rotate('+360/60*new Date().getMinutes()+'deg)'
            document.querySelector('#hour').style.transform = 'rotate('+360/12*moment().utcOffset(watch.clock.timezone).format("h")+'deg)'
            count = 1;
        }else{
            if(new Date().getSeconds() == 1){
                document.querySelector('#minute').style.transform = 'rotate('+360/60*new Date().getMinutes()+'deg)'
                document.querySelector('#hour').style.transform = 'rotate('+360/12*moment().utcOffset(watch.clock.timezone).format("h")+'deg)'
                count = 1;
            }
        }}
       , 1000);
  return (
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

  );
}

export default Clock;
