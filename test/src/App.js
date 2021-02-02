import './App.css';
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import Clock from './Clock';
import Clock2 from './Clock2';

function App() {
  const [left_watch,setLeft_watch] = useState('asia/Krasnoyarsk');
  const [right_watch,setRight_watch] = useState('europe/Moscow');
  const dispatch = useDispatch();

  const left = (e) => {
      setLeft_watch(e.target.value)
      dispatch({type:"LEFT","timezone_left":e.target.value})
  }

  const right = (e) => {
      setRight_watch(e.target.value)
      dispatch({type:"RIGHT","timezone_right":e.target.value})

  }
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <div className="left_watch">
                  <Clock/>
                  <form className="form_left">
                      <select value={left_watch} onChange={(e)=>left(e)}>
                          <option value={"europe/Kaliningrad"}>Калининград</option>
                          <option value={"asia/Vladivostok"}>Владивосток</option>
                          <option value={"asia/Krasnoyarsk"}>Красноярск</option>
                          <option value={"europe/Moscow"}>Москва</option>
                      </select>
                  </form>
              </div>
              <div className="right_watch">
                  <Clock2/>
                  <form className="form_right">
                      <select value={right_watch} onChange={(e)=>right(e)}>
                          <option value={"europe/Kaliningrad"}>Калининград</option>
                          <option value={"asia/Vladivostok"}>Владивосток</option>
                          <option value={"asia/Krasnoyarsk"}>Красноярск</option>
                          <option value={"europe/Moscow"}>Москва</option>
                      </select>
                  </form>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
